var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails() {
    var albumId = document.getElementById("albumId").value;
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;

    if(!albumId || !id || !title){
        alert("Please fill all of the boxes");
        return;
    }
    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = albumId;
    cell2.innerHTML = id;
    cell3.innerHTML = title;

    row++;

    
}


