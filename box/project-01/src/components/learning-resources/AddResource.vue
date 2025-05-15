<template>
  <div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" close="confirmError">
      <template #default>
        <p>Unfortunately, input is invalid</p>
        <p>Please check</p>
      </template>
      <template #actions>
        <base-button @click="confirmError"> Okay </base-button>
      </template>
    </base-dialog>

    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="text" type="text" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            ref="descInput"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" ref="linkInput" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>



<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription === '' ||
        enteredLink === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmError(){
      this.inputIsInvalid=false;
    }
  },
};
</script>

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
