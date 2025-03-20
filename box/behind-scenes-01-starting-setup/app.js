// const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: '',
//       message: 'Vue is great!',
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       this.message = this.currentUserInput;
//     },
//   },  
// });

// app.mount('#app');
const app = Vue.createApp({
  data() {
    return {
      message: "Salam, dünya!"
    };
  },
  beforeCreate() {
    console.log("beforeCreate: Məlumat hələ yoxdur!");
  },
  created() {
    console.log("created: Məlumat yaradıldı →", this.message);
  },
  beforeMount() {
    console.log("beforeMount: Şablon hazırlanır...");
  },
  mounted() {
    console.log("mounted: Komponent səhifəyə əlavə olundu!");
  },
  beforeUpdate() {
    console.log("beforeUpdate: Dəyişiklik oldu, amma hələ DOM yenilənməyib.");
  },
  updated() {
    console.log("updated: DOM yeniləndi!");
  },
  beforeUnmount() {
    console.log("beforeUnmount: Komponent silinmək üzrədir...");
  },
  unmounted() {
    console.log("unmounted: Komponent silindi!");
  }
});
app.mount("#app");
