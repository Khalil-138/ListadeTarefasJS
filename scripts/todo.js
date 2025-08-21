document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo)
    document.addEventListener('keypress', (event) => {
        console.log()
        if (event.key == 'Enter'){
            addTodo()
        }
    })

    function addTodo() {
        const texto = todoInput.value.trim()
        //pegar o que ta escrito no input       
        // verificar se tem algo
        if (texto !== '') {
            //add lista
            const li = document.createElement('li');
            li.textContent = texto
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.className = "delete-button";
            deleteButton.addEventListener('click', () => {
                //remover o li do todo lista
                todoList.removeChild(li);
            })
            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();
        }
    }


})