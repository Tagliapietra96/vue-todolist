const { createApp } = Vue;
createApp({
    // ************ VARIABILI ************
    data() {
        return {
            //STRINGHE
            newTask: '',
            //NUMERI

            //BOOLEANI

            //ARRAY
            allTasks: [
                {
                    title: 'Fare la spesa',
                    isDone: false
                },
                {
                    title: 'Pagare le bollette',
                    isDone: false
                },
                {
                    title: 'Lavare la macchina',
                    isDone: false
                },
                {
                    title: 'Finire di studiare vue.js',
                    isDone: false
                },
                {
                    title: 'Completare il compito pomeridiano',
                    isDone: false
                },
            ],
            //OGGETTI

        }
    },
    // ************ FUNZIONI ************
    methods: {
        onDeleteBtn(i) {
            this.allTasks.splice(i, 1);
        },
        onSubmit(){
            if(this.newTask === ''){
                alert('Inserisci una nuova Task')
                return
            }else{
                this.allTasks.push(
                    {
                        title: this.newTask,
                        isDone: false
                    }
                );
            }
            this.newTask = '';
        }
    },
    mounted() {

    }
}).mount('#my-app');