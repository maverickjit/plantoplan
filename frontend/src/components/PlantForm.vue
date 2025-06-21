<template>
  <form @submit.prevent="submitForm" class="my-4">
    <input v-model="form.name" placeholder="Plant Name" />
    <input v-model="form.species" placeholder="Species" />
    <input v-model="form.location" placeholder="Location" />
    <input v-model="form.next_water_date" type="date" />
    <textarea v-model="form.notes" placeholder="Notes"></textarea>
    <button type="submit">Add Plant</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: { name: '', species: '', location: '', next_water_date: '', notes: '' }
    };
  },
  methods: {
    async submitForm() {
      await axios.post('http://localhost:8080/plants', this.form);
      window.location.reload();
    }
  }
}
</script>
