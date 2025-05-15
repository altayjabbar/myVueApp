<template>
  <section>
    <header>
      <h1>Active User</h1>
      <user-data @user-data="updateUserData" />
    </header>
    <active-user :name="userName" :age="userAge" />
  </section>
</template>

<script>
import UserData from "./components/UserData.vue";
import ActiveUser from "./components/ActiveUser.vue";

export default {
  components: {
    UserData,
    ActiveUser,
  },
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    updateUserData(name, age) {
      this.userName = name;
      this.userAge = age;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
}

section {
  text-align: center;
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
}

h1 {
  margin-bottom: 1rem;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  width: 100%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin-bottom: 1rem;
}

#app p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

input {
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 5px;
  width: 80%;
  max-width: 20rem;
}

input:focus {
  outline: none;
  border-color: #281b99;
  background-color: #d7fdeb;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
}
</style>


