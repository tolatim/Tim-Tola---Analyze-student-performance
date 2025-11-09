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
                <td>
                <div>
                <button onclick="viewData_january(${user.id})">view</button>
                <button onclick="deleteData_january(${user.id})">Delete</button></div></td>
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
                <td>
                <div>
                <button onclick="viewData_february(${user.id})">view</button>
                <button onclick="deleteData_february(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_march(${user.id})">view</button>
                <button onclick="deleteData_march(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_april(${user.id})">view</button>
                <button onclick="deleteData_april(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_may(${user.id})">view</button>
                <button onclick="deleteData_may(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_june(${user.id})">view</button>
                <button onclick="deleteData_june(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_july(${user.id})">view</button>
                <button onclick="deleteData_july(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_august(${user.id})">view</button>
                <button onclick="deleteData_august(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_september(${user.id})">view</button>
                <button onclick="deleteData_september(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_october(${user.id})">view</button>
                <button onclick="deleteData_october(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_november(${user.id})">view</button>
                <button onclick="deleteData_november(${user.id})">Delete</button></div>
                </td>
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
                <td>
                <div>
                <button onclick="viewData_december(${user.id})">view</button>
                <button onclick="deleteData_december(${user.id})">Delete</button></div>
                </td>
                </tr>
                `;
            });
            document.getElementById('december-table').innerHTML = rows;
        });
};
// delete
function deleteData_february(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL2}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_january(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL1}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_march(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL3}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_may(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL5}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_july(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL7}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_june(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL6}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_april(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL4}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_august(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL8}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_december(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL12}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_october(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL10}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_november(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL11}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
function deleteData_september(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL9}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// view
function viewData_january(id) {
    fetch(`${API_URL1}/${id}`)
        .then(res => res.json())
        .then(user => {
            document.getElementById("id-jan").value = user.id;
            document.getElementById("name-jan").value = user.name;
            document.getElementById("homework-jan").value = user.homework;
            document.getElementById("quize-jan").value = user.quize;
            document.getElementById("soft-skill-jan").value = user.soft_skill;
        });
}
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
// The tob is no need to touch enymore. 
// JAN
document.getElementById("form-jan").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-jan").value.trim();
    const name = document.getElementById("name-jan").value.trim();
    const homework = document.getElementById("homework-jan").value.trim();
    const quize = document.getElementById("quize-jan").value.trim();
    const soft_skill = document.getElementById("soft-skill-jan").value.trim();

    if (!id || !name || !homework || !quize || !soft_skill) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/jan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// FEB
document.getElementById("form-feb").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-feb").value;
    const name = document.getElementById("name-feb").value;
    const homework = document.getElementById("homework-feb").value;
    const quize = document.getElementById("quize-feb").value;
    const soft_skill = document.getElementById("soft-skill-feb").value;

     if (!id || !name || !homework || !quize || !soft_skill) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/feb", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-ma").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-ma").value;
    const name = document.getElementById("name-ma").value;
    const homework = document.getElementById("homework-ma").value;
    const quize = document.getElementById("quize-ma").value;
    const soft_skill = document.getElementById("soft-skill-ma").value;

     if (!id || !name || !homework || !quize || !soft_skill) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/ma", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-ap").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-ap").value;
    const name = document.getElementById("name-ap").value;
    const homework = document.getElementById("homework-ap").value;
    const quize = document.getElementById("quize-ap").value;
    const soft_skill = document.getElementById("soft-skill-ap").value;

     if (!id || !name || !homework || !quize || !soft_skill) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/ap", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-may").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-may").value;
    const name = document.getElementById("name-may").value;
    const homework = document.getElementById("homework-may").value;
    const quize = document.getElementById("quize-may").value;
    const soft_skill = document.getElementById("soft-skill-may").value;

    if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/may", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-jun").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-jun").value;
    const name = document.getElementById("name-jun").value;
    const homework = document.getElementById("homework-jun").value;
    const quize = document.getElementById("quize-jun").value;
    const soft_skill = document.getElementById("soft-skill-jun").value;

    if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/jun", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-july").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-july").value;
    const name = document.getElementById("name-july").value;
    const homework = document.getElementById("homework-july").value;
    const quize = document.getElementById("quize-july").value;
    const soft_skill = document.getElementById("soft-skill-july").value;

    if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/july", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-au").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-au").value;
    const name = document.getElementById("name-au").value;
    const homework = document.getElementById("homework-au").value;
    const quize = document.getElementById("quize-au").value;
    const soft_skill = document.getElementById("soft-skill-au").value;

  if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/au", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-se").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-se").value;
    const name = document.getElementById("name-se").value;
    const homework = document.getElementById("homework-se").value;
    const quize = document.getElementById("quize-se").value;
    const soft_skill = document.getElementById("soft-skill-se").value;

    // send to backend (Flask or Node.js)
     if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/se", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-oc").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-oc").value;
    const name = document.getElementById("name-oc").value;
    const homework = document.getElementById("homework-oc").value;
    const quize = document.getElementById("quize-oc").value;
    const soft_skill = document.getElementById("soft-skill-oc").value;
     if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/oc", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-no").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-no").value;
    const name = document.getElementById("name-no").value;
    const homework = document.getElementById("homework-no").value;
    const quize = document.getElementById("quize-no").value;
    const soft_skill = document.getElementById("soft-skill-no").value;
    if (!id || !name || !homework || !quize || !soft_skill) {
        document, getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/no", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
document.getElementById("form-de").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("id-de").value;
    const name = document.getElementById("name-de").value;
    const homework = document.getElementById("homework-de").value;
    const quize = document.getElementById("quize-de").value;
    const soft_skill = document.getElementById("soft-skill-de").value;
     if (!id || !name || !homework || !quize || !soft_skill) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/de", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, homework, quize, soft_skill })
        });

        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});

// jan
const jan = document.getElementById('January');
const jan_display = document.getElementById('January-display')
document.getElementById('jan').onclick = function(){
    jan.style.display = "flex";
    jan_display.style.display = "flex";
}
document.getElementById('back-jan').onclick = function(){
    jan.style.display = "none";
    jan_display.style.display = "none";;
}
// feb
const feb = document.getElementById('February');
const feb_display = document.getElementById('February-display');
document.getElementById('feb').onclick = function(){
    feb.style.display = "flex";
    feb_display.style.display = "flex";
}
document.getElementById('back-feb').onclick = function(){
    feb.style.display = "none";
    feb_display.style.display = "none";
}
// march
const march_display = document.getElementById('March-display')
const march = document.getElementById('March');
document.getElementById('ma').onclick = function(){
    march.style.display = "flex";
    march_display.style.display = "flex";
}
document.getElementById('back-ma').onclick = function(){
    march.style.display = "none";
    march_display.style.display = "none";
}
// April
const april = document.getElementById('April');
const april_display = document.getElementById('April-display')
document.getElementById('ap').onclick = function(){
    april.style.display = "flex";
    april_display.style.display = "flex";
}
document.getElementById('back-ap').onclick = function(){
    april.style.display = "none";
    april_display.style.display = "none";
}
// May
const may_display = document.getElementById('May-display')
const may = document.getElementById('May');
document.getElementById('may').onclick = function(){
    may.style.display = "flex";
    may_display.style.display = "flex";
}
document.getElementById('back-may').onclick = function(){
    may.style.display = "none";
    may_display.style.display = "none";
}
// June
const june_display = document.getElementById('June-display')
const jun = document.getElementById('June');
document.getElementById('jun').onclick = function(){
    jun.style.display = "flex";
    june_display.style.display = "flex";
}
document.getElementById('back-jun').onclick = function(){
    jun.style.display = "none";
    june_display.style.display = "none"
}
// July
const july = document.getElementById('July');
const july_display = document.getElementById('July-display')
document.getElementById('july').onclick = function(){
    july.style.display = "flex";
    july_display.style.display = "flex";
}
document.getElementById('back-july').onclick = function(){
    july.style.display = "none";
    july_display.style.display = "none"
}
// August
const august_display = document.getElementById('August-display')
const au = document.getElementById('August');
document.getElementById('au').onclick = function(){
    au.style.display = "flex";
    august_display.style.display = "flex";
}
document.getElementById('back-au').onclick = function(){
    au.style.display = "none";
    august_display.style.display = "none";
}
// September
const september_display = document.getElementById('September-display')
const se = document.getElementById('September');
document.getElementById('se').onclick = function(){
    se.style.display = "flex";
    september_display.style.display = "flex";
}
document.getElementById('back-se').onclick = function(){
    se.style.display = "none";
    september_display.style.display = "none";
}
// october
const oc = document.getElementById('October');
const october_display = document.getElementById('October-display')
document.getElementById('oc').onclick = function(){
    oc.style.display = "flex";
    october_display.style.display = "flex";
}
document.getElementById('back-oc').onclick = function(){
    oc.style.display = "none";
    october_display.style.display = "none";
}
// November
const no = document.getElementById('November');
const november_display = document.getElementById('November-display')
document.getElementById('no').onclick = function(){
    no.style.display = "flex";
    november_display.style.display = "flex";
}
document.getElementById('back-no').onclick = function(){
    no.style.display = "none";
    november_display.style.display = "none";
}
//'December
const december_display = document.getElementById('December-display')
const de = document.getElementById('December');
document.getElementById('de').onclick = function(){
    de.style.display = "flex";
    december_display.style.display = "flex";
}
document.getElementById('back-de').onclick = function(){
    de.style.display = "none";
    december_display.style.display = "none";
}
loadUser();