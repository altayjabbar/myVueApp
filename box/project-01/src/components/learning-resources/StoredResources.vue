<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>


<script>
import LearningResource from './LearningResource.vue';
export default {
  inject: ['resources'],
  components: { LearningResource },
};
</script>

<style scoped>
ul {
  padding: 0;
  max-width: 800px;
  margin: 40px auto;
}
</style>
