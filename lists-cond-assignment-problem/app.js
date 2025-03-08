const app = Vue.createApp({
    data() {
        return {
            addTask: '',
            a: true,
            tasks: []
        };
    },
    methods: {
        addingTask() {
            this.tasks.push(this.addTask);
            this.addTask=''
        },
        vshow() {
            this.a = !this.a;
        }
    }
});

app.mount("#assignment")