// DECOMMENT: STEP 3: Create a function that listens on a submit even of the created form
// function listenForValidation() {
//   const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
//   PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
// }


// DECOMMENT: STEP 5: Create a function which validates the data sent by the form when the user clicks on submit button
// function validatePersonalDataForm(e) {

//   const name = e.target.name.value;
//   const surname = e.target.surname.value;
//   const email = e.target.email.value;

//   let valid = true;

//   if (!name) {
//     document.getElementById("form-name").style.visibility = "visible";
//     valid = false;
//   } else document.getElementById("form-name").style.visibility = "hidden";

//   if (!surname) {
//     document.getElementById("form-surname").style.visibility = "visible";
//     valid = false;
//   } else document.getElementById("form-surname").style.visibility = "hidden";

//   if (!email) {
//     document.getElementById("form-email").style.visibility = "visible";
//     valid = false;
//   } else document.getElementById("form-email").style.visibility = "hidden";

//   if (!valid) {
//     e.preventDefault();
//   } else {
//     saveData(name, surname, email);
//   }
// }

// DECOMMENT: STEP 6: Create a function to save the form data in LocalStorage
// function saveData(name, surname, email) {
//   localStorage.setItem("name", name);
//   localStorage.setItem("surname", surname);
//   localStorage.setItem("email", email);
// }

// DECOMMENT: STEP 4: Don't forget to call the function to listen the submit event
// listenForValidation();