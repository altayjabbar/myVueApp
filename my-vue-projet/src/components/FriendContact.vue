<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toogleDetails">
      {{ detaisVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detaisVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>

      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>

export default{
  props:[
  'name',
  'phoneNumber',
  'emailAddress',
],
    data(){
        return{
            detaisVisible: false,
            // friend:{
            //     id: "manuel",
            //     name: "Manuel Lorenz",
            //     phone: "01245 546 54",
            //     email: "manuel@gmail.com",
            // }
        };
    },
    methods:{
        toogleDetails(){
            this.detaisVisible=!this.detaisVisible
            
        }
    }
};
</script>