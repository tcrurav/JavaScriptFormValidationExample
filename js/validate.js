function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {

  const name = e.target.name.value;
  const surname = e.target.surname.value;
  const email = e.target.email.value;

  let valid = true;

  if (!name) {
    document.getElementById("form-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-name").style.visibility = "hidden";

  if (!surname) {
    document.getElementById("form-surname").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-surname").style.visibility = "hidden";

  if (!email) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(name, surname, email);
  }
}

function saveData(name, surname, email) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
}

listenForValidation();