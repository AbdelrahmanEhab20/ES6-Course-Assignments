// Script
//MY FAKE API
//https://mocki.io/v1/4260e2e4-6df5-421c-b4ce-6fe5f29b0054






//Same As The Previous Question But With Async And Await
async function fetchdata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("GETTIIING THE RESPONSE ---->|||||");
    console.log(response);
    let mydata = await response.json();
    return mydata;

}
fetchdata().then(data => {
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

//abort() ----> to cancel the request
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(Response => Response.json())
//     .then((data) => {
//         data.forEach((element) => {
//             document.getElementById("mylist").innerHTML += `<option value="${element.id}">${element.name}</option>`;
//         });
//         document.getElementById("BTN_DATA").disabled = false;
//         document.getElementById("mylist").onchange = function () {
//             var value = this.value;
//             var userData = data.filter((user) => user.id == value);
//             var user = userData[0];
//             document.getElementById("BTN_DATA").onclick = function () {
//                 var Info = document.getElementById("DIVINFO");
//                 Info.innerHTML = `<p> NAME--> (${user.name}) </p> <p> UserName -->  (${user.username}) </p> <p> Email--> (${user.email}) </p><p>  ADDRESS --> (${user.address.street + "At suite:" + user.address.suite}) </p><p>  Phone --> [${user.phone}] </p><p>  <p>  WebSite --> [${user.website}] </p>`;
//             };
//         };
//     });
