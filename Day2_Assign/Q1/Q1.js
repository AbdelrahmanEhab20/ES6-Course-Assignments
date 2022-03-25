// Script
//MY FAKE API
//https://mocki.io/v1/4260e2e4-6df5-421c-b4ce-6fe5f29b0054


fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then((data) => {
        data.forEach((element) => {
            document.getElementById("mylist").innerHTML += `<option value="${element.id}">${element.name}</option>`;
        });
        document.getElementById("BTN_DATA").disabled = false;
        document.getElementById("mylist").onchange = function () {
            var value = this.value;
            var userData = data.filter((user) => user.id == value);
            var user = userData[0];
            document.getElementById("BTN_DATA").onclick = function () {
                var Info = document.getElementById("DIVINFO");
                Info.innerHTML = `<p> NAME--> (${user.name}) </p> <p> UserName -->  (${user.username}) </p> <p> Email--> (${user.email}) </p><p>  ADDRESS --> (${user.address.street + "At suite:" + user.address.suite}) </p><p>  Phone --> [${user.phone}] </p><p>  <p>  WebSite --> [${user.website}] </p>`;
            };
        };
    });

// let url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

// let text = '{ "Students" : [' +
//     '{ "firstName":"ABDELRAHMAN" , "lastName":"EHAB" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);

// console.log(obj.Students[0].firstName+" "+obj.Students[0].lastName);
// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         document.getElementById("demo").innerHTML =
//             this.responseText;
//     }
//     xhttp.open("GET", "ajax_info.txt");
//     xhttp.send();
// }

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML =
//                 this.responseText;
//         }
//     }
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhttp.send();
// }
// fetch("https://mocki.io/v1/4260e2e4-6df5-421c-b4ce-6fe5f29b0054")
//     .then(Response => Response.json())
//     .then(data => console.log(data));