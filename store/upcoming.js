import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useUpcomingStore = defineStore("upcoming", {
  state: () => ({
    upcoming: null,
    loading: false,
  }),

  actions: {
    async fetchOnlineUpcomingClasses() {
      try {
        this.loading = true;
        const response = await axiosApi.get("online-upcoming-classes");
        if (response.status == 200) {
          this.upcoming = response.data.upcoming_classes;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
