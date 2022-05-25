"use strict";

const request = new XMLHttpRequest();

request.open("GET", "http://localhost:8000/api/users", true);

let users;

request.onreadystatechange = () => {
  if (request.readyState == 4) {
    try {
      users = JSON.parse(request.response); // Mi ritorna un array
      const selectDiv = (users) => {
        let div = document.getElementById("userList");

        let usersHtml = "";
        users.forEach((element) => {
          usersHtml =
            usersHtml + "<div class = 'users'>" + element.username + "</div>";
        });

        div.innerHTML = usersHtml;
      };
      selectDiv(users);
      return users.forEach((users) => console.log("My users, ", users));
    } catch (error) {
      return console.log({ msg: "Cannot connect to server" });
    }
  }
};

request.send();
