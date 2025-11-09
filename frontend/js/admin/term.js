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
                <td>
                <div>
                <button onclick="viewData_term4(${user.id})">view</button>
                <button onclick="deleteData_term4(${user.id})">Delete</button></div></td>
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
                <td>
                <div>
                <button onclick="viewData_term2(${user.id})">view</button>
                <button onclick="deleteData_term2(${user.id})">Delete</button></div></td>
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
                <td>
                <div>
                <button onclick="viewData_term1(${user.id})">view</button>
                <button onclick="deleteData_term1(${user.id})">Delete</button></div></td>
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
                <td>
                <div>
                <button onclick="viewData_term3(${user.id})">view</button>
                <button onclick="deleteData_term3(${user.id})">Delete</button></div></td>
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
// add term
document.getElementById("form-term4").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-term4").value;
    const name = document.getElementById("name-term4").value;
    const oop = document.getElementById("oop-term4").value;
    const laravel = document.getElementById("laravel-term4").value;
    const vue = document.getElementById("vue-term4").value;
    const english = document.getElementById("english-term4").value;
    const pro = document.getElementById("pro-term4").value;
    if (!id || !name || !oop || !laravel || !vue || !english || !pro) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/term4", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, oop, laravel, vue, english, pro })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// DELETE
function deleteData_term4(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL4}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// View
function viewData_term4(id) {
    fetch(`${API_URL4}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-term4").value = user.id;
            document.getElementById("name-term4").value = user.name;
            document.getElementById("oop-term4").value = user.oop;
            document.getElementById("laravel-term4").value = user.laravel;
            document.getElementById("vue-term4").value = user.vue;
            document.getElementById("english-term4").value = user.english;
            document.getElementById("pro-term4").value = user.pro;
        });
}
// term2
document.getElementById("form-term2").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-term2").value;
    const name = document.getElementById("name-term2").value;
    const algorithm = document.getElementById("algorithm-term2").value;
    const web = document.getElementById("web-term2").value;
    const git = document.getElementById("git-term2").value;
    const english = document.getElementById("english-term2").value;
    const pro = document.getElementById("pro-term2").value;
    if (!id || !name || !algorithm || !web || !git || !english || !pro) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/term2", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, algorithm, web, git, english, pro })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// 
// DELETE
function deleteData_term2(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL2}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// View
function viewData_term2(id) {
    fetch(`${API_URL2}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-term2").value = user.id;
            document.getElementById("name-term2").value = user.name;
            document.getElementById("algorithm-term2").value = user.algorithm;
            document.getElementById("web-term2").value = user.web;
            document.getElementById("git-term2").value = user.git;
            document.getElementById("english-term2").value = user.english;
            document.getElementById("pro-term2").value = user.pro;
        });
}
// term1
document.getElementById("form-term1").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-term1").value;
    const name = document.getElementById("name-term1").value;
    const logic = document.getElementById("logic-term1").value;
    const bcu = document.getElementById("bcu-term1").value;
    const ms = document.getElementById("ms-term1").value;
    const ui = document.getElementById("ui-term1").value;
    const typing = document.getElementById("typing-term1").value;
    const english = document.getElementById("english-term1").value;
    const pro = document.getElementById("pro-term1").value;
    if (!id || !name || !logic || !bcu || !ui || !typing || !english || !pro || !ms) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/term1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, logic, bcu,ms, ui,typing, english, pro })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// 
// DELETE
function deleteData_term1(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL1}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// View
function viewData_term1(id) {
    fetch(`${API_URL1}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-term1").value = user.id;
            document.getElementById("name-term1").value = user.name;
            document.getElementById("logic-term1").value = user.logic;
            document.getElementById("bcu-term1").value = user.bcu;
            document.getElementById("ms-term1").value = user.ms;
            document.getElementById("ui-term1").value = user.ui;
            document.getElementById("typing-term1").value = user.typing;
            document.getElementById("english-term1").value = user.english;
            document.getElementById("pro-term1").value = user.pro;
        });
}
// term3
document.getElementById("form-term3").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-term3").value;
    const name = document.getElementById("name-term3").value;
    const software = document.getElementById("software-term3").value;
    const js = document.getElementById("js-term3").value;
    const php = document.getElementById("php-term3").value;
    const db = document.getElementById("db-term3").value;
    const git = document.getElementById("git-term3").value;
    const pm = document.getElementById("pm-term3").value;
    const node = document.getElementById("node-term3").value;
    const oop = document.getElementById("oop-term3").value;
    const english = document.getElementById("english-term3").value;
    const pro = document.getElementById("pro-term3").value;
    if (!id || !name || !software || !js || !db || !git || !english || !pro || !php || !pm || !node || !oop) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/term3", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, software, js,php, db,git, pm, node, oop, english, pro})
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// DELETE
function deleteData_term3(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL3}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// View
function viewData_term3(id) {
    fetch(`${API_URL3}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-term3").value = user.id;
            document.getElementById("name-term3").value = user.name;
            document.getElementById("software-term3").value = user.software;
            document.getElementById("js-term3").value = user.js;
            document.getElementById("php-term3").value = user.php;
            document.getElementById("db-term3").value = user.db;
            document.getElementById("git-term3").value = user.git;
            document.getElementById("pm-term3").value = user.pm;
            document.getElementById("node-term3").value = user.node;
            document.getElementById("oop-term3").value = user.oop;
            document.getElementById("english-term3").value = user.english;
            document.getElementById("pro-term3").value = user.pro;
        });
}
loadUser();