<template>
  <v-card variant="outlined" class="ma-5">
    <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="mainStore.getListData"
    item-key="cityName"
    item-value="cityName"
    @update:sortBy="sortData($event)"
    :loading="mainStore.isLoading"
    loading-text="Loading... Please wait"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" @click="removeCity(item.raw.cityName)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table-server>
  </v-card>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "WeatherForecastTableComponent",
  data() {
    return {
      itemsPerPage: 10,
      headers: [
        { title: "City", align: "center", key: "cityName" },
        { title: "MinTemp", align: "center", key: "minTemp" },
        { title: "MaxTemp", align: "center", key: "maxTemp" },
        { title: "Actions", align: "center", sortable: false, key: "actions" },
      ],
    };
  },
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    removeCity(name) {
      console.log(name);
      this.mainStore.removeCity(name);
    },
    sortData(type) {
      console.log(type);
      if (!type.length) {
        return;
      }
      this.mainStore.sortData(type[0].key);
    },
  },
};
</script>

<style scoped>

</style>