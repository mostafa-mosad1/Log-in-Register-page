var title =document.querySelector(".title-card-s");


const search = new URLSearchParams(location.search);
const email = search.get("email");


title.innerHTML = `${email}`

document.querySelector(".log_out").addEventListener(`click`, function (e) {
e.preventDefault();
    location.href = "index.html";
localStorage.removeItem("user_name");});