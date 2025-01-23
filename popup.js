document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    addRowToTable(name, email, message);
    document.getElementById('sampleForm').reset();
});

function addRowToTable(name, email, message) {
    const table = document.getElementById('sampleTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td contenteditable="true">${name}</td><td contenteditable="true">${email}</td><td contenteditable="true">${message}</td>`;
    table.appendChild(newRow);

    newRow.addEventListener('input', function() {
        updateData(newRow);
    });
}

function updateData(row) {
    const cells = row.querySelectorAll('td');
    const updatedData = {
        name: cells[0].innerText,
        email: cells[1].innerText,
        message: cells[2].innerText
    };
    console.log('Updated data:', updatedData);
}

function populateTable(dataArray) {
    const tableBody = document.getElementById('sampleTable').querySelector('tbody');
    tableBody.innerHTML = '';
    dataArray.forEach(data => addRowToTable(data.name, data.email, data.message));
}
