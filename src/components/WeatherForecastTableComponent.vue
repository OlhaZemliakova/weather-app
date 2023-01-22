<template>
  <CitySelection />
  <v-table>
    <thead>
      <tr>
        <th @click="sortData('cityName')">
          <p>City</p>
          <v-icon icon="mdi-menu-swap" />
        </th>
        <th @click="sortData('minTemp')">
          <p>MinTemp</p>
          <v-icon icon="mdi-menu-swap" />
        </th>
        <th @click="sortData('maxTemp')">
          <p>MaxTemp</p>
          <v-icon icon="mdi-menu-swap" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in mainStore.getListData" :key="data.name">
        <td>{{ data.cityName }}</td>
        <td>{{ data.minTemp }}</td>
        <td>{{ data.maxTemp }}</td>
        <td>
          <v-btn
            color="error"
            rounded="pill"
            size="x-small"
            @click="removeCity(data.name)"
            >Delete</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>
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
    sortData(type) {
      this.mainStore.sortData(type);
    }
  },
};
</script>

<style scoped>
th {
  cursor: pointer;
}
</style>