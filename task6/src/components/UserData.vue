<template>
  <form @submit.prevent="sendData">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="age" />
    </div>
    <button @click="sendData">Submit</button>
  </form>
</template>


<script>
export default {
//   emits: ["active-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
  sendData() {
    if (!this.name || !this.age) {
      alert("name and age can't null!");
      return;
    }
    if (isNaN(this.age)) {
      alert("It is not number!");
      return;
    }
    this.$emit("user-data", this.name, this.age);
  },
}

}

;
</script>