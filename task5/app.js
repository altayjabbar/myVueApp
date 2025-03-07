Vue.createApp({
    data() {
        return {
            inputClass: "",
            paragraphisvisible: true,
            inputBackgroundColor: ""
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphisvisible,
                hidden:!this.paragraphisvisible
            }
        }

    },
    methods: {
        toggleparagraphvisibility() {
            this.paragraphisvisible = !this.paragraphisvisible
        }
    }
}).mount("#assignment")