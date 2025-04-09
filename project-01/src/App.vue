<template>
  <div id="app">
    <the-header title="RememberMe"></the-header>
    <stored-resources :resources="storedResources" />
  </div>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    StoredResources,
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The official Google documentation',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #2d5180; /* Background color for the body */
  color: #ffffff; /* Text color */
}

#app {
  padding: 40px 20px;
  min-height: 100vh;
  background-color: #2d5180; /* Ensures consistent background */
}

the-header {
  margin-bottom: 30px;
}

stored-resources {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
