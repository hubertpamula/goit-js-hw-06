const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (name) {
  const list = document.querySelector("#ingredients");
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = name;
  list.append(listItem);
});
