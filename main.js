const inputTodo = document.querySelector('#form-input');
const list = document.getElementById('list-todo');


function tambahTodo() {
    if (inputTodo.value === '') {
        alert('Tidak Boleh Kosong')

    } else {
        let li = document.createElement('li');
        li.innerHTML = inputTodo.value;
        list.appendChild(li);

        // Button Delete
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('class', 'btnDelete');
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btnDelete.onclick = function () {
            list.removeChild(li);
        }

        li.appendChild(btnDelete);

    }
    inputTodo.value = '';

}


inputTodo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        tambahTodo();
    }
})

