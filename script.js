let biodataList = [];

function tambahBiodata() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let umur = document.getElementById("umur").value;

    if (nama && email && umur) {
        let biodata = { nama, email, umur };
        biodataList.push(biodata);
        document.getElementById("hasil").innerText = "Berhasil ditambahkan!";
        updateTable();
        document.getElementById("biodataForm").reset();
    } else {
        alert("Harap isi semua data dengan benar.");
    }
}

function updateTable() {
    let tbody = document.querySelector("#biodataTable tbody");
    tbody.innerHTML = "";

    biodataList.forEach((data, index) => {
        let row = tbody.insertRow();

        row.insertCell(0).innerText = data.nama;
        row.insertCell(1).innerText = data.email;
        row.insertCell(2).innerText = data.umur;

        let actionCell = row.insertCell(3);
        actionCell.classList.add("action-buttons");

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = () => editBiodata(index);
        actionCell.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Hapus";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => hapusBiodata(index);
        actionCell.appendChild(deleteButton);
    });
}

function editBiodata(index) {
    let biodata = biodataList[index];

    document.getElementById("nama").value = biodata.nama;
    document.getElementById("email").value = biodata.email;
    document.getElementById("umur").value = biodata.umur;

    biodataList.splice(index, 1);
    updateTable();
}

function hapusBiodata(index) {
    biodataList.splice(index, 1);
    updateTable();
}

function toggleTabel() {
    let table = document.getElementById("biodataTable");
    table.classList.toggle("hidden-table");
}
