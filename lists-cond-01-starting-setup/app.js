const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue:'',
      goals: [] };
      
  },
  methods: {
    AddGoal(){
      this.goals.push(this.enteredGoalValue)
    }
  }
});

app.mount('#user-goals');
