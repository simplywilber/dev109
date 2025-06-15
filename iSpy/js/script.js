document.addEventListener("DOMContentLoaded", () => {
  const found = {
    spoon: false,
    croissant: false,
    fork: false,
    latte: false,
    water: false,
    plant: false,
    book: false,
  };

  const totalItems = Object.keys(found).length;
  let foundCount = 0;

  function updateProgress() {
    document.getElementById(
      "progress"
    ).textContent = `Found ${foundCount} of ${totalItems} items`;
  }

  function foundItem(itemName) {
    if (found[itemName]) return;

    found[itemName] = true;
    foundCount++;

    const listItem = document.getElementById("item-" + itemName);
    if (listItem) {
      listItem.style.textDecoration = "line-through";
    }

    updateProgress();

    if (foundCount === totalItems) {
      setTimeout(() => {
        if (confirm("🎉 You found all the items! Play again?")) {
          location.reload();
        }
      }, 300);
    }
  }

  Object.keys(found).forEach((itemName) => {
    const area = document.getElementById("area-" + itemName);
    if (area) {
      area.addEventListener("click", (e) => {
        e.preventDefault(); // Optional, avoids any unintended default behavior
        foundItem(itemName);
      });
    }
  });

  updateProgress();
});
