const textInputRef = document.getElementById("validation-input");
console.log(textInputRef);
function inputBlur() {
  if (textInputRef.value.length == textInputRef.dataset.length) {
    textInputRef.classList.add("valid");
    textInputRef.classList.remove("invalid");
  } else {
    textInputRef.classList.add("invalid");
    textInputRef.classList.remove("valid");
  }
}
textInputRef.addEventListener("blur", inputBlur);
