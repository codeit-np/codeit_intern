import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useWebsiteStore = defineStore("website", {
  state: () => ({
    website: null,
    loading: false,
  }),

  actions: {
    async fetchWebsiteDetails() {
      try {
        this.loading = true;
        const response = await axiosApi.get("setting");
        if (response.status == 200) {
          this.website = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
