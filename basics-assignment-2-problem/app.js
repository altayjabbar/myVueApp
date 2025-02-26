Vue.createApp({
    data() {
      return {
        user: "",
      };
    },
    methods: {
      showAlert() {
        alert("show Alert");
      },
      register(event) {
        this.user = event.target.value; 
      },
      check() {
        console.log(this.user); 
      }
    }
  }).mount("#assignment");
  