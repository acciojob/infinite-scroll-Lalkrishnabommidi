const list = document.getElementById("infi-list");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List Item ${i}`;
  list.appendChild(li);
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5
  ) {
    const currentCount = list.children.length;

    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = `List Item ${currentCount + i}`;
      list.appendChild(li);
    }
  }
});