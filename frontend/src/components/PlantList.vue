<template>
  <ul>
    <li v-for="plant in plants" :key="plant.id">
      🌿 <strong>{{ plant.name }}</strong> ({{ plant.species }}) @ {{ plant.location }} — next water: {{ plant.next_water_date }}
      <br />📝 {{ plant.notes }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      plants: []
    };
  },
  async mounted() {
    const res = await axios.get('http://localhost:8080/plants');
    this.plants = res.data;
  }
}
</script>
