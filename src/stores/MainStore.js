import { defineStore } from "pinia";
import api from "@/helper/api";
import { getToday, tomorrow } from "@/helper/date.js";
import { getDefaultCoordinates } from "../data/citiesList";
import { citiesList } from "../data/citiesList.js";

export const useMainStore = defineStore("MainStore", {
  state: () => ({
    sort: {
      type: "cityName",
      order: "asc",
    },
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
        api.getForecast(this.date, city).then((result) =>
          this.forecast.push({
            cityName: city.name,
            minTemp: result.daily.temperature_2m_min[0],
            maxTemp: result.daily.temperature_2m_max[0],
          })
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
    removeCity(name) {
      this.selectedCities = this.selectedCities.filter(
        (item) => item.name !== name
      );
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
    },
    sortData(type) {
      if (type === this.sort.type) {
        this.sort.order = this.sort.order === "asc" ? "desc" : "asc";
        return;
      }

      this.sort.type = type;
      this.sort.order = "asc";
    },
  },
  getters: {
    getListData() {
      if (this.sort.type === "cityName") {
        return this.forecast.sort((a, b) => {
          let modifier = 1;
          if (this.sort.order === "desc") modifier = -1;
          return a.cityName.localeCompare(b.cityName) * modifier;
        });
      }
      
      return this.forecast.sort((a, b) => {
        let modifier = 1;
        if (this.sort.order === "desc") modifier = -1;
        if (a[this.sort.type] < b[this.sort.type]) return -1 * modifier;
        if (a[this.sort.type] > b[this.sort.type]) return 1 * modifier;
        return 0;
      });
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
