<template>
  <div>
    <base-container title="Vuex"></base-container>
    <the-components></the-components>
    <button @click="addOne">Add 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheComponents from './components/TheComponents.vue';
export default {
  components: {
    BaseContainer,
    TheComponents,
  },

  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>