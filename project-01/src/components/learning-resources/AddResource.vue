<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="text" type="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description"  rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-control input,
.form-control textarea {
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control input:focus,
.form-control textarea:focus {
  border-color: #42b983; /* Vue rəngi kimi */
  outline: none;
}

base-button {
  align-self: flex-start;
  margin-top: 1rem;
}
</style>
