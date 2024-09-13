import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useClientsStore = defineStore("clients", {
  state: () => ({
    clients: null,
    loading: false,
  }),

  actions: {
    async fetchOurClients() {
      try {
        this.loading = true;
        const response = await axiosApi.get("clients");
        if (response.status == 200) {
          this.clients = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
