const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed:{
        boxAclasses(){
            return {active1:this.boxASelected}
        },
        boxBclasses(){
            return {active2:this.boxBSelected}
        },
        boxCclasses(){
            return {active3:this.boxCSelected}
        },


    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;  
            } 
            else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } 
            else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount("#styling");
