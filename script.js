document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    if(document.getElementById('name').value === '') {
        alert('Please enter a name.'); // show an alert if name field is empty
    } else {
        addStudent();
        clearForm(); // clear form fields
    }
});

function addStudent() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var regno = document.getElementById('regno').value;
    var course = document.getElementById('course').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = regno;
    newRow.insertCell(3).innerHTML = course;
    newRow.insertCell(4).innerHTML = gender;
}

function clearForm() {
    document.getElementById('studentForm').reset();
}

function searchStudent() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchName");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
    var found = false;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
    if (!found) {
        document.getElementById("notFoundMsg").style.display = "block";
    } else {
        document.getElementById("notFoundMsg").style.display = "none";
    }
}