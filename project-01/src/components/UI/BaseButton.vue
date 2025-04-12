<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>
  
  <script>
export default {
  props: ['mode'],
};
</script>
  
  <style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

/* Default style */
.primary {
  background-color: #4caf50;
  color: white;
}

.primary:hover {
  background-color: #45a049;
}

/* Secondary style */
.secondary {
  background-color: #008cba;
  color: white;
}

.secondary:hover {
  background-color: #007bb5;
}

/* Danger style */
.danger {
  background-color: #f44336;
  color: white;
}

.danger:hover {
  background-color: #d32f2f;
}

/* Small animation on click */
button:active {
  transform: scale(0.98);
}
</style>
  