import axios from "axios";

export default {
  getForecast(date, city) {
    return axios
      .get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: city.latitude,
          longitude: city.longitude,
          timezone: "PST",
          start_date: date.start_date,
          end_date: date.end_date,
          daily: ["temperature_2m_max", "temperature_2m_min"],
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
};
