function toggleModal() {
  var todoModal = document.getElementById("modal");
  todoModal.style.display = "block";
}

function hideModal() {
  var todoModal = document.getElementById("modal");
  todoModal.style.display = "none";
}

var todoStore = JSON.parse(localStorage.getItem("taskObj")) || [];

function submitTodo(e) {
  e.preventDefault();

  var task = document.querySelector("#task").value;

  var status = document.querySelector("#status").value;

  if (!task || !status) {
    alert("Please fill all the fields");
    return;
  }

  var id = Date.now()

  var taskObj = {
    id,
    task,
    status,
  };

  todoStore.push(taskObj);
  localStorage.setItem("taskObj", JSON.stringify(todoStore));

  e.target.reset();

}

function showTasks() {
  var taskContainer = document.querySelector("#taskList");
  taskContainer.innerHTML = "";
  for (var i = 0; i < todoStore.length; i++) {
    taskContainer.innerHTML += `
        <div id="showTask">
            <h1>${todoStore[i].task}</h1>
            <p>${todoStore[i].status}</p>
            <!-- buttons -->
             <div id="actionBtn">
                <button class = "edit" onclick=(editTodo(${todoStore[i].id}))>Edit</button>
                <button class = "delete" onclick=(delTodo(${todoStore[i].id})>Delete</button>
             </div>
             </div>
        `;
  }
}

function editTodo(){
    console.log(todoStore[i].id);
    
}

function delTodo(){
    console.log(todoStore[i].id);
    
}

  showTasks();
  hideModal();
