<template>
  <v-menu open-on-hover>
    <template v-slot:activator="{ props }">
      <div class="text-center mt-5">
        <v-btn size="large" variant="text" v-bind="props"
        ><p class="mr-2">City Select</p>
        <v-icon icon="mdi-plus-circle"></v-icon
      ></v-btn>
      </div>
    </template>
    <v-list v-if="mainStore.getAvailableCities.length > 0" theme="dark">
      <v-list-item
        v-for="city in mainStore.getAvailableCities"
        :key="city.name"
      >
        <v-list-item-title @click="addCity(city.name)"
          >{{ city.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-alert v-else>
      <p>List is empty...</p>
      <v-icon icon="mdi-emoticon-sad-outline" />
    </v-alert>
  </v-menu>
</template>

<script>
import { useMainStore } from "@/stores/MainStore";

export default {
  name: "CitySelection",
  setup() {
    const mainStore = useMainStore();

    return { mainStore };
  },
  methods: {
    addCity(name) {
      this.mainStore.addCity(name);
    },
  },
};
</script>

<style scoped>
.v-list-item-title {
  cursor: pointer;
}
</style>