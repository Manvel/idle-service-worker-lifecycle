function run(data) {
  const table = document.createElement("table");
  console.log(data);
  for (const {name, time} of data.events) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");
    nameCell.textContent = name;
    timeCell.textContent = time;
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    table.appendChild(row);
  }
  document.querySelector("#data").appendChild(table);
}

function resetData() {
  chrome.storage.local.set({ events: [] });
  const table = document.querySelector("#data table");
  if (table) {
    table.remove();
  }
}

chrome.storage.local.get(["events"], (data) => {
  run(data);
});

document.querySelector("#reset").addEventListener("click", resetData);
