<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="controls">
        <base-card>
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register">Register as Coach</base-button>
        </base-card>
      </div>

      <base-card>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>``
  </div>
</template>

<script>
import BaseButton from '../../../../box/http-01/src/components/UI/BaseButton.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem,
    BaseButton,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']; //first coahes=id,name,descripion    //second coaches=getters coaches
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>