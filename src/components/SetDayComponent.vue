<template>
  <div>
    <v-btn color="secondary" size="large" @click="setToday()">Today</v-btn>
    <v-btn color="secondary" size="large" @click="setTomorrow()">Tomorrow</v-btn>
    <p>Forecast for:{{ mainStore.date.start_date }}</p>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "SetDayComponent",

  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    setToday() {
      this.mainStore.setToday();
    },
    setTomorrow() {
      this.mainStore.setTomorrow();
    },
  },
};
</script>

<style scoped>
</style>