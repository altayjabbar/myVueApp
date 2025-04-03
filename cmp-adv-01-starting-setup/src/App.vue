<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <component :is="selectedComponent"></component>

  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals", // Dəyişənin adı burada düzgün yazılıb
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp; // Dəyişənin adı burada da düzgün təyin olunub
    },
  },
};
</script>


<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>