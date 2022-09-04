// Load all users

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

// Create getUsers function
function getUsers(e) {
    e.preventDefault(); // prevents page reloading

    const http = new XMLHttpRequest();

    // http.open(requestType, dataFile, async or not)
    http.open("GET", "users.json", true);

    http.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

            const users = JSON.parse(this.responseText);

            let output = "";
            users.forEach(function (user) {
                output += `
                    <hr>
                    <ul>
                        <li> ID: ${user.id} </li>
                        <li> Name: ${user.name} </li>
                        <li> Age: ${user.age} </li>
                        <li> Email: ${user.email} </li>
                    </ul>
                `;
            });

            document.getElementById("users").innerHTML = output;
        }
    };

    http.send();
}
