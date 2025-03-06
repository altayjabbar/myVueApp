Vue.createApp({
    data() {
        return {

            number: 0
        };
    },
    computed: {
        result() {
            if (this.number < 37) {
                return "Not there yet!";
            } else if (this.number === 37) {
                return this.number;
            } else {
                return "Too much!";
            }
        }

    },
    watch:{
        result(){
            console.log("start...")
            setTimeout(function(){
                this.number = 0;
            },5000)
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num
        }
    }
}).mount('#assignment');
