<template>
  <div>
    <button @click="openCitiesList()">City Select</button>
    <ul v-if="isOpen == true">
      <li v-for="city in mainStore.getAvailableCities" :key="city.name">
        {{ city.name }}
        <button @click="addCity(city.name)">Add</button>
      </li>
    </ul>
  </div>
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
ul {
  border: 1px solid red;
  width: 180px;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border: 1px solid black;
  padding: 2px;
}
li:last-child {
  margin-bottom: 0;
}
</style>