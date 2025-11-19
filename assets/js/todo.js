let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function loadTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((t, i) => {
        list.innerHTML += `<li>${t} 
            <button onclick="removeTask(${i})">X</button>
        </li>`;
    });
}

function addTask() {
    let t = document.getElementById("task").value;
    if (t.trim() !== "") {
        tasks.push(t);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}

function removeTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

loadTasks();
