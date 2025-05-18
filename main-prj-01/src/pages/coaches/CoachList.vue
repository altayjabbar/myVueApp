<template>
  <div>
    <section>FILTER</section>
    <section> 
      <div>
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else> No coaches found.</h3>
    </section>
  </div>
</template>

<script>
export default{
  computed:{
    filteredCoaches(){
      return this.$store.getters['coaches/coaches'] //first coahes=id,name,descripion    //second coaches=getters coaches
    },
    hasCoaches(){
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>