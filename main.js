const form = document.getElementById("form");
// const { form } = document.forms;
// const getColor = () => {
//   const color = document.getElementById("colorPicker").value;
//   console.log(color);
// };

const getValuesFromForm = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  //   let result = {};
  //   for (let [key, value] of formData.entries()) {
  //     result[key] = value;
  //   }
  const color = document.getElementById("color").value;
  document.getElementById(
    "colorValue"
  ).textContent = `Selected color: ${color}`;
  document.getElementById("colorValue").style.backgroundColor = color;
  console.log("values: ", values);
};

// const getValuesFromForm = (e) => {
//   e.preventDefault();

//   const color = document.getElementById("color").value;
//   document.getElementById(
//     "colorValue"
//   ).textContent = `Selected color is: ${color}`;
//   console.log(color);
// };

// const getValuesFromForm = (e) => {
//   e.preventDefault();

//   const fields = document.querySelectorAll("input, select");

//   const values = {};

//   fields.forEach((field) => {
//     const { name, value } = field;
//     values[name] = value;
//   });

//   console.log("values: ", values);
// };

form.addEventListener("submit", getValuesFromForm);
