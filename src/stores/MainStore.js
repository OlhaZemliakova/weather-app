import { defineStore } from "pinia";
import api from "@/helper/api";
import { getToday, tomorrow } from "@/helper/date.js";
import { getDefaultCoordinates } from "../data/citiesList";
import { citiesList } from "../data/citiesList.js";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    date: {
      start_date: getToday,
      end_date: getToday,
    },
    selectedCities: [...getDefaultCoordinates()],
    forecast: [],
  }),
  actions: {
    loadForecast() {
      this.forecast = [];

      this.selectedCities.forEach((city) =>
        api
          .getForecast(this.date, city)
          .then((result) =>
            this.forecast.push({ name: city.name, forecast: result })
          )
      );
    },
    addCity(name) {
      const citySelection = this.getAvailableCities.find(
        (element) => element.name == name
      );
      this.selectedCities.push(citySelection);
      this.loadForecast();
    },
    setToday() {
      this.date.start_date = getToday;
      this.date.end_date = getToday;
      this.loadForecast();
    },
    setTomorrow() {
      this.date.start_date = tomorrow;
      this.date.end_date = tomorrow;
      this.loadForecast();
    }
  },
  getters: {
    getListData() {
      return this.forecast;
    },
    getAvailableCities() {
      const availableCities = citiesList.filter(
        (item) =>
          !this.selectedCities.find((element) => element.name == item.name)
      );

      return availableCities;
    },
  },
});
