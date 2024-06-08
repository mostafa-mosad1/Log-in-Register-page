const inputs = document.querySelectorAll("input");
const sign_up = document.querySelector(".Sign_up");
const sign_in = document.querySelector(".Sign_in");
const msg = document.querySelector(".msg");

var allUsers = [];
allUsers = JSON.parse(localStorage.getItem("users")) ?? [];

console.log(allUsers);

function clear() {
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
}

function userData() {
  const user = {
    name: inputs[0].value,
    email: inputs[1].value,
    user_name: inputs[2].value,
    pass: inputs[3].value,
  };

  let accountIndex;

  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == inputs[1].value) {
      accountIndex = i;
    }
  }

  const account = allUsers[accountIndex];

  if (!account) {
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
    msg.textContent = "successs";
    msg.style.color = "green";
    clear();
  } else if (account) {
    msg.textContent = "email is exiting ";
    msg.style.color = "red";
  } else {
    msg.textContent = "";
  }
}
sign_up.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    validationName() &&
    validationEmail() &&
    validationUserName() &&
    validationPassword()
  ) {
    userData();
    location.href = "index.html";
  }
});


inputs[0].addEventListener(`input`, function (e) {
  validationName();
});
inputs[1].addEventListener(`input`, function (e) {
  validationEmail();
});
inputs[2].addEventListener(`input`, function (e) {
  validationUserName();
});
inputs[3].addEventListener(`input`, function (e) {
  validationPassword();
});

// validation

function validationName() {
  const regexStyle =
    /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;

  if (regexStyle.test(inputs[0].value)) {
    inputs[0].classList.add("is-valid");
    inputs[0].classList.remove("is-invalid");
    return true;
  } else {
    inputs[0].classList.add("is-invalid");
    inputs[0].classList.remove("is-valid");

    return false;
  }
}

function validationEmail() {
  const regexStyle =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (regexStyle.test(inputs[1].value)) {
    inputs[1].classList.add("is-valid");
    inputs[1].classList.remove("is-invalid");
    return true;
  } else {
    inputs[1].classList.add("is-invalid");
    inputs[1].classList.remove("is-valid");

    return false;
  }
}

function validationUserName() {
  const regexStyle =
    /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/;
  if (regexStyle.test(inputs[2].value)) {
    inputs[2].classList.add("is-valid");
    inputs[2].classList.remove("is-invalid");
    return true;
  } else {
    inputs[2].classList.add("is-invalid");
    inputs[2].classList.remove("is-valid");

    return false;
  }
}
function validationPassword() {
  const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (regexStyle.test(inputs[3].value)) {
    inputs[3].classList.add("is-valid");
    inputs[3].classList.remove("is-invalid");
    return true;
  } else {
    inputs[3].classList.add("is-invalid");
    inputs[3].classList.remove("is-valid");

    return false;
  }
}
