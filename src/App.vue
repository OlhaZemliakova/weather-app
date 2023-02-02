<template>
  <v-app>
    <v-app-bar class="bg-indigo-darken-2">
      <p class="logo ml-5">Weather app</p>
      <v-icon icon="mdi-weather-partly-lightning"></v-icon>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
      >
          <SetDayComponent />
          <CitySelection />
      </v-navigation-drawer>
        <WeatherForecastTableComponent />
    </v-main>
  </v-app>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import WeatherForecastTableComponent from "@/components/WeatherForecastTableComponent.vue";
import SetDayComponent from "@/components/SetDayComponent.vue";
import CitySelection from "@/components/CitySelection.vue";

export default {
  components: { WeatherForecastTableComponent, SetDayComponent, CitySelection },
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
.logo {
  font-size: 36px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
</style>