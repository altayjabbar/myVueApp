Vue.createApp({
    data() {
        return {
            name: "",
            // age: 26,
            counter: 0,
            name: "Altay",
            surname: "Jabbar",
        };
    },
    computed: {
        fullName() {
            return this.name + " " + this.surname
        }
    },

    watch: {
        fullName(value) {
            if (vallue == this.name + " " + this.surname) {
                this.fullName = "";
            }
        }
    },
    methods: {
        //     favoriteNumber() {
        //         return Math.random()
        //     }
        setName(event, lastNmae) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = "";
        },


    }
}).mount("#app")
