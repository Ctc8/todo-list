


let addToDoButton = document.getElementById("addToDo")
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField")

let clearCompleted = document.getElementById("clearCompleted")
let clearAll = document.getElementById("clearAll")

// Press enter
inputField.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        if (inputField.value.trim().length === 0){
            return;
        }

        let task = document.createElement('p')
        task.classList.add('task-styling')

        task.innerHTML = inputField.value
        toDoContainer.append(task)

        inputField.value = ""

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button-styling')
        deleteButton.innerHTML = `<i class="fa fa-trash""></i>`
        task.append(deleteButton)

        deleteButton.addEventListener('click', () => {
            toDoContainer.removeChild(task)
            toDoContainer.removeChild(deleteButton)
        })

        const checkButton = document.createElement('button')
        checkButton.classList.add('check-button-styling')
        checkButton.innerHTML = `<i class="fa fa-check"></i>`
        task.append(checkButton)

        var flag = false
        checkButton.addEventListener('click', () => {
            if (flag) {
                task.classList.remove('markedCompleted')
                task.style.textDecoration = 'none'
                deleteButton.classList.remove('delete-button-styling-dark')
                checkButton.classList.remove('check-button-styling-dark')
                flag = false
            }

            else {
                task.classList.add('markedCompleted')
                task.style.textDecoration = 'line-through'
                deleteButton.classList.add('delete-button-styling-dark')
                checkButton.classList.add('check-button-styling-dark')
                flag = true
            }
        })
    }
})

// clearAll.addEventListener('click', () => {
//     toDoContainer.innerHTML = ''
// })

// Click the button
// addToDoButton.addEventListener('click', (e) => {
//     if (inputField.value.trim().length === 0){
//         return;
//     }

//     let task = document.createElement('p')
//     task.classList.add('task-styling')

//     task.innerHTML = inputField.value
//     toDoContainer.append(task)

//     inputField.value = ""

//     const deleteButton = document.createElement('button')
//     deleteButton.classList.add('delete-button-styling')
//     deleteButton.innerHTML = `<i class="fa fa-trash""></i>`
//     task.append(deleteButton)

//     deleteButton.addEventListener('click', () => {
//         toDoContainer.removeChild(task)
//         toDoContainer.removeChild(deleteButton)
//     })

//     const checkButton = document.createElement('button')
//     checkButton.classList.add('check-button-styling')
//     checkButton.innerHTML = `<i class="fa fa-check"></i>`
//     task.append(checkButton)

//     checkButton.addEventListener('click', () => {
//         task.classList.add('markedCompleted')
//         task.style.textDecoration = 'line-through'
//         deleteButton.classList.add('delete-button-styling-dark')
//         checkButton.classList.add('check-button-styling-dark')
//     })
// })

// task.innerHTML = localStorage.getItem("value")

