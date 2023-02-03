<template>
  <v-card prepend-icon="mdi-calendar-today" class="ma-2">
    <template v-slot:title> Forecast for: </template>
    <v-card-text class="text-center">
      <strong>{{ formatedDate }}</strong>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="setToday()"> Today </v-btn>
      <v-btn variant="outlined" @click="setNextDay()"
        >Next Day</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";
import { formatDate } from "../helper/date";

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
    setNextDay() {
      this.mainStore.setNextDay();
    },
  },
  computed: {
    formatedDate() {
      return formatDate(this.mainStore.date);
    },
  },
};
</script>

<style scoped>
</style>