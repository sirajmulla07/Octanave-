document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTask.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            listItem.querySelector(".complete").addEventListener("click", function () {
                listItem.classList.toggle("completed");
            });

            listItem.querySelector(".delete").addEventListener("click", function () {
                listItem.remove();
            });

            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    });
});
