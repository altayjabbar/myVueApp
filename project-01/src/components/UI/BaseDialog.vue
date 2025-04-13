<template>
    <div class="backdrop" @click.self="$emit('close')">
      <dialog open>
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
            <base-button @click="$emit('close')">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </div>
  </template>
  

<script>
export default{
    props:{
        title:{
            type:String,
            required: false
        }
    },
    emits:['close']

}

</script>

<style scoped>
dialog {
  width: 90%;
  max-width: 500px;
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
}

header h2 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

section {
  font-size: 1rem;
  color: #444;
  margin-bottom: 1rem;
}

menu {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 0.75rem;
}
</style>
