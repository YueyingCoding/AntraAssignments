// IIFE function
const View = (() => {
    const domStr = {
        container: '.todolist_container',
        inputBox: '#user-input',
        addBtn: '#addBtn'
    };
    // querySelector should have a dot and return the first element, className does not have a dot and return all the elements with the className
    // document.querySelector()
    // document.getElementsByClassName()

    const createTmp = (arr) => {
        let tmp = '';
        arr.forEach(todo => {
            tmp += `<li class="todolist">
                <span class="todoitem">${todo.title}</span>
                <button>X</button>
            </li>`
        });
        return tmp;
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    return {
        domStr,
        createTmp,
        render
    }
})();

const Api = (() => {
        // fetch data from server
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const getData = fetch(url).then((res) => res.json());
        return {
            getData
        }
})();

const Model = ((view, api) => {

    const { getData } = api;

    const {domStr, createTmp, render} = view;

    class State {
        constructor() {
            this._todoList = [];
        }
        get getTodoList() {
            return this._todoList;
        }
        set newTodoList(arr) {
            this._todoList = arr;
            const todoContainer = document.querySelector(domStr.container);
            const tmp = createTmp(this._todoList);
            render(todoContainer, tmp);
        }
    }
    return {
        getData,
        State
    }

})(View, Api);

const Controller = ((view, model) => {
    const { State, getData } = model;
    const { domStr } = view;

    const state = new State();
    getData.then((data) => {
        state.newTodoList = data;
    });

    const init = () => {
        getData.then((data) => {
            state.newTodoList = data;
        })
    }

    const addTodo = () => {
        const userInput = document.querySelector(domStr.inputBox);
        const btn = document.querySelector(domStr.addBtn);
        btn.addEventListener("click", () => {
            let item = {
                title: userInput.value,
            }
            const newTodos = [item, ...state.getTodoList];
            state.newTodoList = newTodos;
            userInput.value = "";
        })
    }

    const deleteTodo = () => {
        const todoContainer = document.querySelector('.todolist_container');
        todoContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const todoItem = event.target.closest('.todolist');
                if (todoItem) {
                    const todoTitle = todoItem.querySelector('.todoitem').textContent;
                    const updatedTodoList = state.getTodoList.filter(todo => todo.title !== todoTitle);
                    state.newTodoList = updatedTodoList;
                }
            }
        });
    }

    const bootstrap = () => {
        init();
        addTodo();
        deleteTodo();
    }
    return {
        bootstrap
    }
})(View, Model);

Controller.bootstrap();