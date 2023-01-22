<template>
  <v-btn dark color="primary" @click="openCitiesList()">City Select</v-btn>
  <v-list v-if="isOpen == true">
    <v-list-item v-for="city in mainStore.getAvailableCities" :key="city.name">
      {{ city.name }}
      <v-btn dark color="primary" size="small" @click="addCity(city.name)">
        Add
      </v-btn>
    </v-list-item>
  </v-list>
  <v-alert v-if="mainStore.getAvailableCities.length === 0" color="info" icon="$error">
    List is empty
  </v-alert>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "CitySelection",
  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    openCitiesList() {
      this.isOpen = !this.isOpen;
    },
    addCity(name) {
      this.mainStore.addCity(name);
    },
  },
};
</script>

<style scoped>
</style>