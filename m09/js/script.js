function addItemToList() {
  const newItemText = document.getElementById("newItem").value;

  if (newItemText) {
    const newListItem = document.createElement("li");

    newListItem.textContent = newItemText;
    newListItem.classList.add("green-li");

    document.getElementById("groceryList").appendChild(newListItem);
    document.getElementById("newItem").value = "";
  }
}

document.getElementById("addButton").addEventListener("click", addItemToList);
document
  .getElementById("newItem")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItemToList();
    }
  });
