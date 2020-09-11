import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    companies: [],
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_COMPANIES(state, companies) {
      state.companies = companies;
    },
  },
  actions: {
    async loadCategories({ commit }) {
      let response = await Api().get("/category");
      console.log(response.data[0]._id);
      commit("SET_CATEGORIES", response.data);
    },
    async loadCompanies({ commit }) {
      let response = await Api().get("/companies");
      commit("SET_COMPANIES", response.data);
    },
  },
  getters: {
    weddingCompanies: (state) => {
      return state.companies.filter(
        (company) => company.categories == "5f3eaba97b18e225b4c769fc"
      );
    },
  },
  modules: {},
});
