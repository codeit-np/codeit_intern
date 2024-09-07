import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useGalleryStore = defineStore("gallery", {
  state: () => ({
    gallery: null,
    loading: false,
  }),

  actions: {
    async fetchGallery() {
      try {
        this.loading = true;
        const response = await axiosApi.get("galleries");
        if (response.status == 200) {
          this.gallery = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
