<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">🪴 PlantoPlan - Smart Plant Scheduler</h1>
    <PlantForm />
    <PlantList />
  </div>
</template>

<script>
import PlantForm from './components/PlantForm.vue'
import PlantList from './components/PlantList.vue'

export default {
  components: { PlantForm, PlantList }
}
</script>
