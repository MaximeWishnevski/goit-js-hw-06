const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ListRef = document.querySelector("#ingredients");

const elements = ingredients.map((options) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = options;
  return liRef;
});

ListRef.append(...elements);


