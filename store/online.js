import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useOnlineStore = defineStore("online", {
  state: () => ({
    online: null,
    course: null,
    loading: false,
  }),

  actions: {
    async fetchOnlineCourses() {
      try {
        this.loading = true;
        const response = await axiosApi.get("online-upcoming-classes");
        if (response.status == 200) {
          this.online = response.data.upcoming_classes;
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
          this.course = response.data.data;

        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});