const inputs = document.querySelectorAll("input");
const sign_in = document.querySelector(".Sign_in");
const msg = document.querySelector(".msg");
const sign_up = document.querySelector(".Sign_up");


var allUsers = [];
allUsers = JSON.parse(localStorage.getItem("users")) ?? [];

console.log(allUsers);

function clear() {
  inputs[0].value = "";
  inputs[1].value = "";
}


function userData() {
  const user = {
    email: inputs[0].value,
    pass: inputs[1].value,
  };

  let accountIndex;

  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == inputs[0].value&&allUsers[i].pass == inputs[1].value) {
      accountIndex = i;
      console.log("temam");
      msg.textContent = "successs";
        msg.style.color = "green";
        localStorage.setItem("user_name",JSON.stringify(allUsers[i].user_name));
        location.href = `./home.html?email=${allUsers[i].user_name}`;
    }else{
      msg.textContent = "wrong email or password";
        msg.style.color = "red";
    }
  }

}
sign_in.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    
    validationEmail() &&
    validationPassword()
  ) {
    userData();
  }
});
sign_up.addEventListener(`click`, function (e) {
  e.preventDefault();
  location.href = `register.html`;
});


inputs[0].addEventListener(`input`, function (e) {
  validationEmail();
});

inputs[1].addEventListener(`input`, function (e) {
  validationPassword();
});

// validation



function validationEmail() {
  const regexStyle =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

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


function validationPassword() {
  const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
