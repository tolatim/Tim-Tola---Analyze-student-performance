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
                <td>${user.joined}</td>
                <td>
                <div>
                <button onclick="viewData(${user.id})">View</button></div></td>
                </tr>
                `;
            });
            document.getElementById('display-studentlist').innerHTML = rows;
        });
}
function viewData(id) {
    fetch(`${API_URL2}/${id}`)
        .then(ress => ress.json())
        .then(user => {
            document.getElementById('id').innerHTML = user.id
            document.getElementById('name').innerHTML = user.name
            document.getElementById('avg').innerHTML = user.avg_year3
            document.getElementById('result3').innerHTML = user.result3
        })
    fetch(`${API_URL2}/${id}`)
        .then(response => response.json())
        .then(data => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            let avgScores = [];
            for (let i = 0; i < data.average_month.length; i++) {
                avgScores.push(data.average_month[i]);
            }
            console.log(avgScores);
            new Chart(document.getElementById("scoreChart"), {
                type: "bar",
                data: {
                    labels: months,
                    datasets: [{
                        label: "Average Score",
                        data: avgScores,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: { beginAtZero: true },
                        x: { title: { display: true, text: "Month" } }
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching API:", error));
    fetch(`${API_URL2}/${id}`)
        .then(response => response.json())
        .then(data => {
            const months = ["Term 1", "Term 2", "Term 3", "Term 4",]
            let avgScores = [];
            for (let i = 0; i < data.average_term.length; i++) {
                avgScores.push(data.average_term[i]);
            }
            console.log(avgScores);
            new Chart(document.getElementById("scoreChart-term"), {
                type: "bar",
                data: {
                    labels: months,
                    datasets: [{
                        label: "Average Score",
                        data: avgScores,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: { beginAtZero: true },
                        x: { title: { display: true, text: "Month" } }
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching API:", error));
    fetch(`${API_URL2}/${id}`)
        .then(response => response.json())
        .then(data => {
            const months = ["Year 1", "Year 2"]
            let avgScores = [];
            for (let i = 0; i < data.avg_year.length; i++) {
                avgScores.push(data.avg_year[i]);
            }
            console.log(avgScores);
            new Chart(document.getElementById("scoreChart-year"), {
                type: "bar",
                data: {
                    labels: months,
                    datasets: [{
                        label: "Average Score",
                        data: avgScores,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: { beginAtZero: true },
                        x: { title: { display: true, text: "Month" } }
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching API:", error));
}
loadUser();