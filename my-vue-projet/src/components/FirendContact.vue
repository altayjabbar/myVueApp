<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detaisVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>

      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default{
    data(){
        return{
            detaisVisible: false,
            friend:{
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01245 546 54",
                email: "manuel@gmail.com",
            }
        };
    },
    methods:{
        toggleDetails(){
            this.detaisVisible=!this.detaisVisible
        }
    }
};
</script>