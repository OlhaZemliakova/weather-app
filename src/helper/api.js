import axios from "axios";
import { formatDate } from "./date";

export default {
  getForecast(date, city) {
    return axios
      .get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: city.latitude,
          longitude: city.longitude,
          timezone: "PST",
          start_date: formatDate(date),
          end_date: formatDate(date),
          daily: ["temperature_2m_max", "temperature_2m_min"],
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
};
