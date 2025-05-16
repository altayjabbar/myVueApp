<template>
  <div>
    <base-container title="Vuex"></base-container>
    <the-components></the-components>
    <the-favorite></the-favorite>
    <change-compnent></change-compnent>
    <button @click="addOne">Add 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheComponents from './components/TheComponents.vue';
import TheFavorite from './components/TheFavorite.vue';
import ChangeCompnent from './components/ChangeCompnent.vue';
export default {
  components: {
    BaseContainer,
    TheComponents,
    TheFavorite,
    ChangeCompnent
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