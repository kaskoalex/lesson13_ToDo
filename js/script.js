
const todoControl = document.querySelector('.todo-control') // form class="todo-control" 
const headerInput = document.querySelector('.header-input') // input class="header-input" type = "text" placeholder = "Какие планы?" 
const todoList = document.querySelector('.todo-list') //<ul class="todo todo-list" id="todo">
const todoCompleted = document.querySelector('.todo-completed')  // <ul class="todo todo-completed" id="completed">
const todoContainer = document.querySelector('.todo-container')  // <div class="todo-container">

const toDoData = []   // база занесённых задачь

const render = function () {
  todoList.innerHTML = ''    // очищаем от предыдущих запесей
  todoCompleted.innerHTML = ''
  toDoData.forEach(function (item) {

    const li = document.createElement('li') // создаём елемент 'li'
    li.classList.add('todo-item') // добовляем в 'li' todo-item
    li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div> '    // добавляем в li текст переберая item  со сссылкой на техт


    // проверка на true и false
    if (item.completed) {
      todoCompleted.append(li)  // вставляем данные елементы в Completed если true

    } else {
      todoList.append(li)  // вставляем данные елементы в todoList

    }
    // вешаем на кнопку обработчик событий
    li.querySelector('.todo-complete').addEventListener('click', function() {
      item.completed = !item.completed
      render()
    }); 
    //Удаление дел на кнопку КОРЗИНА
    li.querySelector('.todo-remove').addEventListener('click', function () {
      const index = toDoData.indexOf(item);
      toDoData.splice(index, 1);
      
      render();
    });

  })   // функция по перебору событий, тудушек
}


todoControl.addEventListener('submit', function (event)  // фукция выполнения события
{
  event.preventDefault()

  // проверка на введение текста
  while (headerInput.value==='') {
    headerInput.style.backgroundColor = 'hotpink';
    alert('Введите текст');    
    return
  }

  const newToDo =    // создали новый объект newToDo
  {
    text: headerInput.value,  // текст берётся из inputa
    completed: false
  }

  toDoData.push(newToDo)
  headerInput.value = ''  // очищение строчки от надписи


  render()

})

//Удаление дел на кнопку КОРЗИНА

console.log(todoContainer)

console.dir(todoContainer)
console.dir(todoContainer.children[0])
console.log(todoContainer.children[0].children.HTMLCollection)