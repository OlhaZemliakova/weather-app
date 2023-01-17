<template>
  <div class="container">
    <CitySelection />
    <ul class="contoller">
      <li>City</li>
      <li>MinTemp</li>
      <li>MaxTemp</li>
    </ul>
    <div
      class="forecast-wrapper"
      v-for="data in mainStore.getListData"
      :key="data.name"
    >
      <ul class="city-name">
        <li>{{ data.name }}</li>
      </ul>
      <ul class="temperature">
        <li>{{ data.forecast.daily.temperature_2m_min[0] }}</li>
      </ul>
      <ul class="temperature">
        <li>{{ data.forecast.daily.temperature_2m_max[0] }}</li>
      </ul>
      <button>Delete</button>
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
};
</script>

<style scoped>
.forecast-wrapper {
  display: flex;
}

ul {
  display: flex;
}

li {
  width: 300px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  margin-right: 2px;
}
</style>