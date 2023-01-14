import { defineStore } from "pinia";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    date: {},
    selectedCities: [],
    forecast: [],
  }),
  actions: {},
  getters: {},
});
