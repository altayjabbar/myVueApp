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
        storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The official Google documentation',
          link: 'https://google.org',
        },
      ],
      };
    },
    provide(){
      return{
        resources:this.storedResources
      }
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
  