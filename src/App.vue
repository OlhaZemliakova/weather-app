<template>
  <v-app>
    <v-app-bar color="grey-lighten-2">
      <v-icon icon="mdi-home" />
    </v-app-bar>
    <v-main>
      <v-container>
        <SetDayComponent />
        <WeatherForecastTableComponent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import WeatherForecastTableComponent from "@/components/WeatherForecastTableComponent.vue";
import SetDayComponent from "@/components/SetDayComponent.vue";

export default {
  components: { WeatherForecastTableComponent, SetDayComponent },
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