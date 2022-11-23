const { createApp } = Vue;
createApp({
    // ************ VARIABILI ************
    data() {
        return {
            //STRINGHE

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
        }
    },
    mounted() {

    }
}).mount('#my-app');