<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite==='1' ? '(Favorite)':'' }}</h2>
    <button @click="toggleFavorite">toggle Favorite</button>
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
  'isFavorite'
],
    data(){
        return{
            detaisVisible: false,
            friend:{
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "01245 546 54",
                email: "manuel@gmail.com",
            },
            friendIsFavorite:this.isFavorite

            
        };
    },
    methods:{
        toogleDetails(){
            this.detaisVisible=!this.detaisVisible   
        },
        toggleFavorite(){
          if(this.friendIsFavorite==='1'){
            this.friendIsFavorite='0';
          }else{
            this.friendIsFavorite='1';
          }
        }
    }
};
</script>