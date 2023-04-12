// Menambahkan efek scroll smooth ke semua link di dalam navbar
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Menambahkan kiri dan kanan header
function isNumber(num) {
return !isNaN(num);
}

function checkboxIsChecked() {
return document.getElementById("status").checked;
}

function handleGetFormData() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const city = document.getElementById("city").value;
const zipCode = document.getElementById("zip-code").value;
const status = document.getElementById("status").checked;
const props = {
  name: name,
  email: email,
  city: city,
  zipCode: zipCode,
  status: status,
};
return props;
}

function validateFormData(props) {
if (props != null && isNumber(props.zipCode) && checkboxIsChecked()) {
  return true;
} else {
  return false;
}
}

document.getElementById("submit-form").addEventListener("click", function () {
event.preventDefault();
submit();
});

function submit() {
event.preventDefault
const props = handleGetFormData();
const hasil = validateFormData(props);
if (hasil == false) {
  document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
} else {
  return hasil;
}
}
