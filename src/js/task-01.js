const ulItemRef = document.querySelectorAll(".item");
console.log("Number of categories:", ulItemRef.length);
ulItemRef.forEach((item) => {
  const titleRef = item.querySelector("h2");

  const getElementLi = item.querySelectorAll("li");

  console.log("Category:", titleRef.textContent);

  console.log("Elements:", getElementLi.length);
});
