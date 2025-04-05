<template>
  <div>
    <h2>Manage Goals</h2>
    <button @click="setGoal" ref="goal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputisValid">
        <h2>Input is inValid</h2>
        <p>Please enter at least a few chacacters...</p>
        <button @click="ErrorHandle">Okay</button>
      </error-alert>
    </teleport>
    <input type="text" />
  </div>
</template>


<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputisValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputisValid = true;
      }
    },
    ErrorHandle() {
      this.inputisValid = false;
    },
  },
};
</script>