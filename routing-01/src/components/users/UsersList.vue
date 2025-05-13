<button @click="confirmInput">Confirm</button>
<template>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
<button @click="confirmInput">Confirm</button>

</template>
<button @click="confirmInput">Confirm</button>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      // ....
      this.$router.push('/teams')
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>