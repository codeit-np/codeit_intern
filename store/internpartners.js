import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const usePartnersStore = defineStore("partners", {
  state: () => ({
    partners: null,
    loading: false,
  }),

  actions: {
    async fetchInternPartners() {
      try {
        this.loading = true;
        const response = await axiosApi.get("placement-partners");
        if (response.status == 200) {
          this.partners = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
