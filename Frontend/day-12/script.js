inputtext = document.querySelector("#doMe");
addbtn = document.querySelector("#addbtn");
todolist = document.querySelector(".todolist");
// console.log(addbtn);

const deletetodoitem = (item) => {
  console.log(item);
  let listtodel = item.target.parentNode;
  listtodel.remove();
  //   console.log(listtodel);
  storelocally();
};
const completetodoitem = (item) => {
  //   console.log(item);
  let listtodel = item.target.parentNode;
  listtodel.classList.add("completed");
  storelocally();
};

const createtodoitem = (item) => {
  containerTodo = document.createElement("div");
  containerTodo.classList.add("itemcontainer");
  todo = document.createElement("div");
  delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  compbtn = document.createElement("button");
  compbtn.innerHTML = "Completed";
  compbtn.classList.add("complete-btn");
  delbtn.classList.add("delete-btn");
  delbtn.addEventListener("click", deletetodoitem);
  compbtn.addEventListener("click", completetodoitem);
  todo.classList.add("todoitem");
  todo.innerHTML = item;
  containerTodo.append(todo);
  containerTodo.append(compbtn);
  containerTodo.append(delbtn);
  todolist.append(containerTodo);
};

const addtodolist = (e) => {
  if (inputtext.value == "") return;
  inputtext.focus();
  console.log(inputtext.value);
  createtodoitem(inputtext.value);
  inputtext.value = "";
  storelocally();
};

const storelocally = () => {
  localStorage.clear();
  items = document.querySelectorAll(".todoitem");
  let cnt = 1;
  items.forEach((i) => {
    console.log(i.innerHTML);
    localStorage.setItem(`item${cnt}`, i.innerHTML);
    cnt++;
  });
  console.log(items);
};

const showtodolist = () => {
  let listlength = localStorage.length;

  while (listlength) {
    let item = localStorage.getItem(`item${listlength}`);
    listlength--;
    createtodoitem(item);
  }
};

showtodolist();
addbtn.addEventListener("click", addtodolist);
