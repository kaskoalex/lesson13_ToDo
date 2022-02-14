
const todoControl = document.querySelector('.todo-control') // form class="todo-control" 
const headerInput = document.querySelector('.header-input') // input class="header-input" type = "text" placeholder = "Какие планы?" 
const todoList = document.querySelector('.todo-list') //<ul class="todo todo-list" id="todo">
const todoCompleted = document.querySelector('.todo-completed')  // <ul class="todo todo-completed" id="completed">

const toDoData = [
  {
    text:'Сварить кофе',
    completed: false
  },
  {
    text: 'Помыть посуду',
    completed: true
  }
]

const render = function () {
  toDoData.forEach(function(item){

    console.log(item)

  })   // функция по перебору событий, тудушек
}


todoControl.addEventListener('submit', function(event)  // фукция выполнения события
{
  event.preventDefault()

  const newToDo =    // создали новый объект newToDo
    {
      text: headerInput.value,  // текст берётся из inputa
      completed: false
    }

     toDoData.push(newToDo)
     headerInput.value = ''  // очищение строчки от надписи

     render()

})

