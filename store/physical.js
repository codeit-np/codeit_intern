import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const usePhysicalStore = defineStore("physical", {
  state: () => ({
    physical: null,
    loading: false,
  }),

  actions: {
    async fetchPhysicalCourses() {
      try {
        this.loading = true;
        const response = await axiosApi.get("physical-upcoming-classes");
        if (response.status == 200) {
          this.physical = response.data.upcoming_classes;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
    async fetchCourseBySlugs(slug) {
      try {
        this.loading = true;
        const response = await axiosApi.get(`course-syllabus/${slug}`);
        if (response.status == 200) {
          this.course = response.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});