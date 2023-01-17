<template>
  <div
  v-for="data in mainStore.getListData"
  :key="data.name">
  {{ data.name }}
  {{ data.forecast.daily.temperature_2m_min[0] }}
  {{ data.forecast.daily.temperature_2m_max[0] }}
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "app",

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  mounted() {
    this.mainStore.loadForecast();
  },
};
</script>

<style scoped>
</style>