// Get students
const API_URL1 = "http://127.0.0.1:5000/term1";
const API_URL2 = "http://127.0.0.1:5000/term2";
const API_URL3 = "http://127.0.0.1:5000/term3";
const API_URL4 = "http://127.0.0.1:5000/term4";
function loadUser() {
    fetch(API_URL4)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.oop}</td>
                <td>${user.laravel}</td>
                <td>${user.vue}</td>
                <td>${user.english}</td>
                <td>${user.pro}</td>
                <td>${user.average}</td>
                <td>${user.Exam}</td>
                </tr>
                `;
            });
            document.getElementById('term4-table').innerHTML = rows;
        });
    fetch(API_URL2)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.algorithm}</td>
                <td>${user.web}</td>
                <td>${user.git}</td>
                <td>${user.english}</td>
                <td>${user.pro}</td>
                <td>${user.average}</td>
                <td>${user.Exam}</td>
                </tr>
                `;
            });
            document.getElementById('term2-table').innerHTML = rows;
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
                <td>${user.logic}</td>
                <td>${user.bcu}</td>
                <td>${user.ms}</td>
                <td>${user.ui}</td>
                <td>${user.typing}</td>
                <td>${user.english}</td>
                <td>${user.pro}</td>
                <td>${user.average}</td>
                <td>${user.Exam}</td>
                </tr>
                `;
            });
            document.getElementById('term1-table').innerHTML = rows;
        });
    fetch(API_URL3)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.software}</td>
                <td>${user.js}</td>
                <td>${user.php}</td>
                <td>${user.db}</td>
                <td>${user.git}</td>
                <td>${user.pm}</td>
                <td>${user.node}</td>
                <td>${user.oop}</td>
                <td>${user.english}</td>
                <td>${user.pro}</td>
                <td>${user.average}</td>
                <td>${user.Exam}</td>
                </tr>
                `;
            });
            document.getElementById('term3-table').innerHTML = rows;
        });
}
// term1
const term1 = document.getElementById('term1');
const term1_display = document.getElementById('term1-display')
document.getElementById('term1-btn').onclick = function () {
    term1.style.display = "flex";
    term1_display.style.display = "flex";
}
document.getElementById('back-term1').onclick = function () {
    term1.style.display = "none";
    term1_display.style.display = "none";;
}
// term2
const term2 = document.getElementById('term2');
const term2_display = document.getElementById('term2-display');
document.getElementById('term2-btn').onclick = function () {
    term2.style.display = "flex";
    term2_display.style.display = "flex";
}
document.getElementById('back-term2').onclick = function () {
    term2.style.display = "none";
    term2_display.style.display = "none";
}
// term3
const term3 = document.getElementById('term3');
const term3_display = document.getElementById('term3-display');
document.getElementById('term3-btn').onclick = function () {
    term3.style.display = "flex";
    term3_display.style.display = "flex";
}
document.getElementById('back-term3').onclick = function () {
    term3.style.display = "none";
    term3_display.style.display = "none";
}
// term4
const term4 = document.getElementById('term4');
const term4_display = document.getElementById('term4-display');
document.getElementById('term4-btn').onclick = function () {
    term4.style.display = "flex";
    term4_display.style.display = "flex";
}
document.getElementById('back-term4').onclick = function () {
    term4.style.display = "none";
    term4_display.style.display = "none";
}
loadUser();