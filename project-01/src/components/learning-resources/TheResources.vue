<template>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')">Add Resources</base-button>
      
      <component :is="selectedTabComponent" />
    </base-card>
  </template>
  
  <script>
  import StoredResources from './StoredResources.vue';
  import AddResource from './AddResource.vue';
  
  export default {
    components: {
      StoredResources,
      AddResource,
    },
    data() {
      return {
        selectedTab: 'stored-resources',
      };
    },
    methods: {
      setSelectedTab(tab) {
        this.selectedTab = tab;
      },
    },
    computed: {
      selectedTabComponent() {
        return this.selectedTab === 'stored-resources' ? 'StoredResources' : 'AddResource';
      },
    },
  };
  </script>
  