<template>
  <div class="container">
    <CitySelection />
    <ul class="contoller">
      <li>City</li>
      <li>MinTemp</li>
      <li>MaxTemp</li>
    </ul>
    <div class="forecast-wrapper">
      <ul v-for="data in mainStore.getListData" :key="data.name">
        <li>{{ data.name }}</li>
        <li>{{ data.forecast.daily.temperature_2m_min[0] }}</li>
        <li>{{ data.forecast.daily.temperature_2m_max[0] }}</li>
        <li><button @click="removeCity(data.name)">Delete</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import CitySelection from "@/components/CitySelection.vue";

export default {
  name: "WeatherForecastTableComponent",
  components: { CitySelection },

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    removeCity(name) {
      this.mainStore.removeCity(name);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
}

li {
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  margin-right: 2px;
  width: 300px;
}
</style>