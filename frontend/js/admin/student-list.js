// Get students
const API_URL = "http://127.0.0.1:5000/studentlist";
function loadUser() {
    fetch(API_URL)
        .then(ress => ress.json())
        .then(data => {
            let rows = "";
            data.forEach(user => {
                rows += `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.grade}</td>
                <td>${user.joined}</td>
                <td>
                <div>
                <button onclick="deleteData(${user.id})">Delete</button></div></td>
                </tr>
                `;
            });
            document.getElementById('display-studentlist').innerHTML = rows;
        });
}
// add 

document.getElementById("studentlist-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const grade = document.getElementById("grade").value;
    const joined = document.getElementById("joined").value;
    if (!id || !name || !grade || !joined) {
        document.getElementById('message').innerText = `Has no data`
    }
    else {
        const res = await fetch("http://127.0.0.1:5000/studentlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name,grade,joined})
        });
        const result = await res.json();
        document.getElementById("message").innerText = result.message;
        this.reset();
    }
});
// 
// DELETE
function deleteData(id){
    if(confirm("Are you sure?")){
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => loadUser());
    };
};
// // View
// function viewData_term4(id) {
//     fetch(`${API_URL4}/${id}`)
//         .then(res => res.json())
//         .then(user => {
//             document.getElementById("id-term4").value = user.id;
//             document.getElementById("name-term4").value = user.name;
//             document.getElementById("oop-term4").value = user.oop;
//             document.getElementById("laravel-term4").value = user.laravel;
//             document.getElementById("vue-term4").value = user.vue;
//             document.getElementById("english-term4").value = user.english;
//             document.getElementById("pro-term4").value = user.pro;
//         });
// }
loadUser();