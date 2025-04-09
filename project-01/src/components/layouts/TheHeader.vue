<template>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    props: ['title'],
  };
  </script>
  
  <style scoped>
  header {
    background-color: #0dc597;  /* Yaşıl fon */
    padding: 20px;              /* İç tərəfə əlavə boşluq */
    text-align: center;         /* Başlığı mərkəzləşdirir */
    border-radius: 8px;         /* Dairəvi künclər */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Yüngül kölgə */
  }
  
  h1 {
    color: rgb(87, 17, 41);              /* Başlıq üçün ağ rəng */
    font-size: 2rem;           /* Font ölçüsünü artırır */
    font-family: Arial, sans-serif; /* Yazı tipini dəyişir */
  }
  </style>
  