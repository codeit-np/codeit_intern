import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: null,
    blog:null,
    loading: false,
  }),

  actions: {
    async fetchBlogs() {
      try {
        this.loading = true;
        const response = await axiosApi.get("blogs");
        if (response.status == 200) {
          this.blogs = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
    async fetchBlogsBySlugs(slug) {
      try {
        this.loading = true;
        const response = await axiosApi.get(`blog/${slug}`);
        if (response.status == 200) {
          this.blog = response.data.data;
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
