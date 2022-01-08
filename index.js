var db = [];

var editIndex = null;

function hapus(index) {
	db.splice(index, 1);

	renderTable();
}

let btnSave = document.getElementById("save");

btnSave.addEventListener("click", function () {
	let inputNama = document.getElementById("nama");
	let inputRole = document.getElementById("role");
	console.log(inputNama.value, inputRole.value);

	if (editIndex === null) {
		db.push({
			nama: inputNama.value,
			role: inputRole.value,
		});
	} else {
		db[editIndex] = {
			nama: inputNama.value,
			role: inputRole.value,
		};
	}
	renderTable();

	reset();
});

function edit(index) {
	let orang = db[index];

	let inputNama = document.getElementById("nama");
	let inputRole = document.getElementById("role");

	inputNama.value = orang.nama;
	inputRole.value = orang.role;
	editIndex = index;
}

function reset() {
	let inputNama = document.getElementById("nama");
	let inputRole = document.getElementById("role");
	editIndex = null;
	inputNama.value = "";
	inputRole.value = "";
}

function renderTable() {
	let table = document.getElementById("table");

	table.innerHTML = "";

	for (let i = 0; i < db.length; i++) {
		let orang = db[i];
		console.log(orang);
		table.innerHTML += `
            <div class="col-sm-4 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="mb-5">
                            <h3>${orang.nama}</h3>
                            <span class="text-secondary">${orang.role}</span>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-warning me-3" onclick='edit(${i})'>Edit</button>
                            <button class="btn btn-danger" onclick='hapus(${i})'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
	}
}
