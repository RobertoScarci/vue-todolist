const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {
                    text: 'Guardare tutta la saga di Star Wars',
                    done: 'true'
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
                    done: 'true'
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

        removeTodoElement(indexToBeRemoved){
            console.log(indexToBeRemoved);
            this.todoList.splice(indexToBeRemoved, 1);
        }
    },
}).mount('#app');