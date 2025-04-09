<template>
    <li>
      <base-card>
        <header>
          <h3>{{ title }}</h3>
          <base-button>Delete</base-button>
        </header>
        <p>{{ description }}</p>
        <nav>
          <a :href="link" target="_blank" rel="noopener noreferrer">View Resource</a>
        </nav>
      </base-card>
    </li>
  </template>
  
  <script>
  export default {
    props: ['title', 'description', 'link'],
  };
  </script>
  
  <style scoped>
li {
  list-style: none;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

li:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

button {
  background: #ff5c5c;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease;
}

button:hover {
  background: #e04343;
}

p {
  font-size: 1rem;
  color: #555;
  margin: 0 0 10px 0;
}

nav a {
  text-decoration: none;
  color: #1e90ff;
  font-weight: bold;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #0a66c2;
}
</style>
