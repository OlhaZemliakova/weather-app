import { defineStore } from "pinia";
import api from "@/helper/api";
import { getToday } from '@/helper/date.js';
import { getDefaultCoordinates } from "../data/citiesList";

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
      this.selectedCities.forEach((city) =>
        api
          .getForecast(this.date, city)
          .then((result) =>
            this.forecast.push({ name: city.name, forecast: result })
          )
      );
    },
  },
  getters: {
    getListData() {
      return this.forecast;
    },
  },
});
