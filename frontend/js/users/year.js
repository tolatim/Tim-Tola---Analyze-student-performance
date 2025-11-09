// Get students
const API_URL1 = "http://127.0.0.1:5000/studentlist";
const API_URL2 = "http://127.0.0.1:5000/analyze";
function loadUser() {
    fetch(API_URL1)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.grade}</td>
                <td>
                <div>
                <button onclick="viewData1(${user.id})">View Result</button></div></td>
                </td>
                </tr>
                `;
            });
            document.getElementById('display-studentlist1').innerHTML = rows;
        });
    fetch(API_URL1)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.grade}</td>
                <td>
                <div>
                <button onclick="viewData2(${user.id})">View Result</button></div></td>
                </td>
                </tr>
                `;
            });
            document.getElementById('display-studentlist2').innerHTML = rows;
        });
}
// year1
const year1 = document.getElementById('year1');
const year1_display = document.getElementById('year1-display')
document.getElementById('year1-btn').onclick = function () {
    year1.style.display = "flex";
    year1_display.style.display = "flex";
}
document.getElementById('back-year1').onclick = function () {
    year1.style.display = "none";
    year1_display.style.display = "none";;
}
// year2
const year2 = document.getElementById('year2');
const year2_display = document.getElementById('year2-display');
document.getElementById('year2-btn').onclick = function () {
    year2.style.display = "flex";
    year2_display.style.display = "flex";
}
document.getElementById('back-year2').onclick = function () {
    year2.style.display = "none";
    year2_display.style.display = "none";
}
function viewData1(id){
    fetch(`${API_URL2}/${id}`)
        .then(ress => ress.json())
        .then(user => {
            document.getElementById('id-year1').innerHTML = user.id
            document.getElementById('name-year1').innerHTML = user.name
            document.getElementById('term-year1').innerHTML = user.average_total_year1
            document.getElementById('month-year1').innerHTML = user.average_total_month
            document.getElementById('avg-year1').innerHTML = user.avg_year1
            document.getElementById('result-year1').innerHTML = user.result1
        })
}
function viewData2(id){
    fetch(`${API_URL2}/${id}`)
        .then(ress => ress.json())
        .then(user => {
            document.getElementById('id-year2').innerHTML = user.id
            document.getElementById('name-year2').innerHTML = user.name
            document.getElementById('term-year2').innerHTML = user.average_total_year2
            document.getElementById('month-year2').innerHTML = user.average_total_month
            document.getElementById('avg-year2').innerHTML = user.avg_year2
            document.getElementById('result-year2').innerHTML = user.result2
        })
}
loadUser();