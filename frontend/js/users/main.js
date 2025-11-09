// Get students
const API_URL1 = "http://127.0.0.1:5000/january"
const API_URL2 = "http://127.0.0.1:5000/february"
const API_URL3 = "http://127.0.0.1:5000/march"
const API_URL4 = "http://127.0.0.1:5000/april"
const API_URL5 = "http://127.0.0.1:5000/may"
const API_URL6 = "http://127.0.0.1:5000/june"
const API_URL7 = "http://127.0.0.1:5000/july"
const API_URL8 = "http://127.0.0.1:5000/august"
const API_URL9 = "http://127.0.0.1:5000/september"
const API_URL10 = "http://127.0.0.1:5000/october"
const API_URL11 = "http://127.0.0.1:5000/november"
const API_URL12 = "http://127.0.0.1:5000/december"
const API_URL13 = "http://127.0.0.1:5000/"
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
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                `;
            });
            document.getElementById('january-table').innerHTML = rows;
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
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('february-table').innerHTML = rows;
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
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('march-table').innerHTML = rows;
        });
    fetch(API_URL4)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('april-table').innerHTML = rows;
        });
    fetch(API_URL5)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('may-table').innerHTML = rows;
        });
    fetch(API_URL6)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('june-table').innerHTML = rows;
        });
    fetch(API_URL7)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('july-table').innerHTML = rows;
        });
    fetch(API_URL8)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('august-table').innerHTML = rows;
        });
    fetch(API_URL9)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('september-table').innerHTML = rows;
        });
    fetch(API_URL10)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('october-table').innerHTML = rows;
        });
    fetch(API_URL11)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('november-table').innerHTML = rows;
        });
    fetch(API_URL12)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.homework}</td>
                <td>${user.quize}</td>
                <td>${user.softskill}</td>
                <td>${user.average}</td>
                <td> <button id="${user.Exam}"> ${user.Exam} </button></td>
                </tr>
                </tr>
                `;
            });
            document.getElementById('december-table').innerHTML = rows;
        });
};
function viewData_february(id) {
    fetch(`${API_URL2}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-feb").value = user.id;
            document.getElementById("name-feb").value = user.name;
            document.getElementById("homework-feb").value = user.homework;
            document.getElementById("quize-feb").value = user.quize;
            document.getElementById("soft-skill-feb").value = user.soft_skill;
        });
}
function viewData_march(id) {
    fetch(`${API_URL3}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-ma").value = user.id;
            document.getElementById("name-ma").value = user.name;
            document.getElementById("homework-ma").value = user.homework;
            document.getElementById("quize-ma").value = user.quize;
            document.getElementById("soft-skill-ma").value = user.soft_skill;
        });
}
function viewData_april(id) {
    fetch(`${API_URL4}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-ap").value = user.id;
            document.getElementById("name-ap").value = user.name;
            document.getElementById("homework-ap").value = user.homework;
            document.getElementById("quize-ap").value = user.quize;
            document.getElementById("soft-skill-ap").value = user.soft_skill;
        });
}
function viewData_may(id) {
    fetch(`${API_URL5}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-may").value = user.id;
            document.getElementById("name-may").value = user.name;
            document.getElementById("homework-may").value = user.homework;
            document.getElementById("quize-may").value = user.quize;
            document.getElementById("soft-skill-may").value = user.soft_skill;
        });
}
function viewData_june(id) {
    fetch(`${API_URL6}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-jun").value = user.id;
            document.getElementById("name-jun").value = user.name;
            document.getElementById("homework-jun").value = user.homework;
            document.getElementById("quize-jun").value = user.quize;
            document.getElementById("soft-skill-jun").value = user.soft_skill;
        });
}
function viewData_july(id) {
    fetch(`${API_URL7}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-july").value = user.id;
            document.getElementById("name-july").value = user.name;
            document.getElementById("homework-july").value = user.homework;
            document.getElementById("quize-july").value = user.quize;
            document.getElementById("soft-skill-july").value = user.soft_skill;
        });
}
function viewData_august(id) {
    fetch(`${API_URL8}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-au").value = user.id;
            document.getElementById("name-au").value = user.name;
            document.getElementById("homework-au").value = user.homework;
            document.getElementById("quize-au").value = user.quize;
            document.getElementById("soft-skill-au").value = user.soft_skill;
        });
}
function viewData_september(id) {
    fetch(`${API_URL9}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-se").value = user.id;
            document.getElementById("name-se").value = user.name;
            document.getElementById("homework-se").value = user.homework;
            document.getElementById("quize-se").value = user.quize;
            document.getElementById("soft-skill-se").value = user.soft_skill;
        });
}
function viewData_october(id) {
    fetch(`${API_URL10}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-oc").value = user.id;
            document.getElementById("name-oc").value = user.name;
            document.getElementById("homework-oc").value = user.homework;
            document.getElementById("quize-oc").value = user.quize;
            document.getElementById("soft-skill-oc").value = user.soft_skill;
        });
}
function viewData_november(id) {
    fetch(`${API_URL11}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-no").value = user.id;
            document.getElementById("name-no").value = user.name;
            document.getElementById("homework-no").value = user.homework;
            document.getElementById("quize-no").value = user.quize;
            document.getElementById("soft-skill-no").value = user.soft_skill;
        });
}
function viewData_december(id) {
    fetch(`${API_URL12}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-de").value = user.id;
            document.getElementById("name-de").value = user.name;
            document.getElementById("homework-de").value = user.homework;
            document.getElementById("quize-de").value = user.quize;
            document.getElementById("soft-skill-de").value = user.soft_skill;
        });
}
// jan
const jan = document.getElementById('January');
const jan_display = document.getElementById('January-display')
document.getElementById('jan').onclick = function () {
    jan.style.display = "flex";
    jan_display.style.display = "flex";
}
document.getElementById('back-jan').onclick = function () {
    jan.style.display = "none";
    jan_display.style.display = "none";;
}
// feb
const feb = document.getElementById('February');
const feb_display = document.getElementById('February-display');
document.getElementById('feb').onclick = function () {
    feb.style.display = "flex";
    feb_display.style.display = "flex";
}
document.getElementById('back-feb').onclick = function () {
    feb.style.display = "none";
    feb_display.style.display = "none";
}
// march
const march_display = document.getElementById('March-display')
const march = document.getElementById('March');
document.getElementById('ma').onclick = function () {
    march.style.display = "flex";
    march_display.style.display = "flex";
}
document.getElementById('back-ma').onclick = function () {
    march.style.display = "none";
    march_display.style.display = "none";
}
// April
const april = document.getElementById('April');
const april_display = document.getElementById('April-display')
document.getElementById('ap').onclick = function () {
    april.style.display = "flex";
    april_display.style.display = "flex";
}
document.getElementById('back-ap').onclick = function () {
    april.style.display = "none";
    april_display.style.display = "none";
}
// May
const may_display = document.getElementById('May-display')
const may = document.getElementById('May');
document.getElementById('may').onclick = function () {
    may.style.display = "flex";
    may_display.style.display = "flex";
}
document.getElementById('back-may').onclick = function () {
    may.style.display = "none";
    may_display.style.display = "none";
}
// June
const june_display = document.getElementById('June-display')
const jun = document.getElementById('June');
document.getElementById('jun').onclick = function () {
    jun.style.display = "flex";
    june_display.style.display = "flex";
}
document.getElementById('back-jun').onclick = function () {
    jun.style.display = "none";
    june_display.style.display = "none"
}
// July
const july = document.getElementById('July');
const july_display = document.getElementById('July-display')
document.getElementById('july').onclick = function () {
    july.style.display = "flex";
    july_display.style.display = "flex";
}
document.getElementById('back-july').onclick = function () {
    july.style.display = "none";
    july_display.style.display = "none"
}
// August
const august_display = document.getElementById('August-display')
const au = document.getElementById('August');
document.getElementById('au').onclick = function () {
    au.style.display = "flex";
    august_display.style.display = "flex";
}
document.getElementById('back-au').onclick = function () {
    au.style.display = "none";
    august_display.style.display = "none";
}
// September
const september_display = document.getElementById('September-display')
const se = document.getElementById('September');
document.getElementById('se').onclick = function () {
    se.style.display = "flex";
    september_display.style.display = "flex";
}
document.getElementById('back-se').onclick = function () {
    se.style.display = "none";
    september_display.style.display = "none";
}
// october
const oc = document.getElementById('October');
const october_display = document.getElementById('October-display')
document.getElementById('oc').onclick = function () {
    oc.style.display = "flex";
    october_display.style.display = "flex";
}
document.getElementById('back-oc').onclick = function () {
    oc.style.display = "none";
    october_display.style.display = "none";
}
// November
const no = document.getElementById('November');
const november_display = document.getElementById('November-display')
document.getElementById('no').onclick = function () {
    no.style.display = "flex";
    november_display.style.display = "flex";
}
document.getElementById('back-no').onclick = function () {
    no.style.display = "none";
    november_display.style.display = "none";
}
//'December
const december_display = document.getElementById('December-display')
const de = document.getElementById('December');
document.getElementById('de').onclick = function () {
    de.style.display = "flex";
    december_display.style.display = "flex";
}
document.getElementById('back-de').onclick = function () {
    de.style.display = "none";
    december_display.style.display = "none";
}
loadUser();