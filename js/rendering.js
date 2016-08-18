Vue.component('task-component', {
    props: ['list'],
    template: '#task-template',

    computed:{
        remaining: function () {
            return this.list.filter(this.inProgress).length;
           /* Cara tanpa methods
           return this.list.filter(function (task) {
                return ! task.completed;
            }).length;*/
        }
    },
    methods:{
        isCompleted:function (task) {
            return task.completed;
        },
        inProgress:function (task) {
            return ! this.isCompleted(task);
        },
        deleteTask:function (task) {
            this.list.$remove(task);
        },
        clearSelected:function () {
            this.list = this.list.filter(this.inProgress);
        }
    }
});

new Vue({

    el: '#app',

    data: {
        classLain: true,
        tasks: [
            {body: 'Pergi ke Pasar', completed: true},
            {body: 'Pergi ke Docter', completed: false},
            {body: 'Pergi ke Mall', completed: false}
        ]
    }

});