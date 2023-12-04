const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {
                    text: 'Guardare tutta la saga di Star Wars',
                    done: 'false'
                },
                {
                    text: 'Comprare una nuova scheda madre',
                    done: 'false'
                },
                {
                    text: 'Andare a fare la spesa prima di morire di fame',
                    done: 'false'
                },
                {
                    text: 'Ricordarsi il nome dei propri nipoti',
                    done: 'false'
                },
                {
                    text: 'Portare la propria ragazza al cinema',
                    done: 'false'
                },
                {
                    text: 'Pagare le bollette prima di essere sfrattati di casa',
                    done: 'false'
                },
                {
                    text: 'Guardare gli spin off di Star Wars',
                    done: 'false'
                },
            ]
        }
    },
    methods: {
        doneOrNot(element) { element.done = element.done == false ? true : false; },

        removeTodoElement(indexToBeRemoved){
            console.log(indexToBeRemoved);
            this.todoList.splice(indexToBeRemoved, 1);
        },

        newElement(element) {
            element.length > 0 ? this.todoList.push({text: element, done: false}) : 'error';
            this.element = "";
        },

    },
}).mount('#app');