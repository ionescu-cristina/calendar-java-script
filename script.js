const select = document.querySelector("select");
const list = document.querySelector("ul");
const h4 = document.querySelector("h4");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const getMonth = monthNames[date.getMonth()];
const day = new Date();
const getDay = day.getDate();

const choice = getMonth;
let days = 31;
if (choice === "February") {
  days = 28;
} else if (
  choice === "April" ||
  choice === "June" ||
  choice === "September" ||
  choice === "November"
) {
  days = 30;
}
createCalendar(days, choice);
function createCalendar(days, choice) {
  list.innerHTML = "";
  h4.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    listItem.id = "day" + i;

    list.appendChild(listItem);
    if (listItem.id === "day" + getDay) {
      document.getElementById(listItem.id).style.backgroundColor = "#3a56bc";
      document.getElementById(listItem.id).style.color = "#ffff";
    }
  }
}
