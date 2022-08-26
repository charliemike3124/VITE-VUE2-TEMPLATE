import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: {
      name: "Bob",
      age: 20,
      species: "Human",
    },
  }),
  actions: {
    incrementAge() {
      this.currentUser.age++;
    },
  },
});
