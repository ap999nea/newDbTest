"use strict";

const request = new XMLHttpRequest();

request.open("GET", "/api/users", true);

let users;

request.onreadystatechange = () => {
  if (request.readyState == 4) {
    try {
      users = JSON.parse(request.response);
      function createDiv(users) {
        let myDiv = document.getElementById("userList");

        let usersHtml = "";
        users.forEach((element) => {
          usersHtml =
            usersHtml + "<div class = 'users'>" + element.username + "</div>";
        });

        myDiv.innerHTML = usersHtml;
      }
      createDiv(users);
      return users.forEach((users) => console.log("My users, ", users));
    } catch (error) {
      return console.log({ msg: "Cannot connect to server" });
    }
  }
};

request.send();
