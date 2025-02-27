Vue.createApp({
  data() {
    return {
      user: "",


    };
  },

  methods: {
    showAlert() {
      console.log("hi")
      alert("show Alert");
    },
    register(event) {
      this.user = event.target.value;
    },
    check() {
      console.log(this.user);
    },
    reset() {
      this.user = "";
    }
  }
}).mount("#assignment");
