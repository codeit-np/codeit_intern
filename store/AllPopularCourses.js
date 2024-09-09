import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const usePopularStore = defineStore("AllPopularCourses", {
  state: () => ({
    AllPopularCourses: null,
    loading: false,
  }),

  actions: {
    async fetchPopularCourses() {
      try {
        this.loading = true;
        const response = await axiosApi.get("popular-courses");
        if (response.status == 200) {
          this.AllPopularCourses = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});