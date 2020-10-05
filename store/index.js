import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    companies: [],
    comments: [],
    token: localStorage.getItem("access_token") || null,
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_COMPANIES(state, companies) {
      state.companies = companies;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    retrieveToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async loadCategories({ commit }) {
      let response = await Api().get("/category");
      commit("SET_CATEGORIES", response.data);
    },
    async loadComments({ commit }) {
      let response = await Api().get("/comment");
      commit("SET_COMMENTS", response.data);
    },
    async loadCompanies({ commit }) {
      let response = await Api().get("/companies");
      commit("SET_COMPANIES", response.data);
    },

    register(context, data) {
      return new Promise((resolve, reject) => {
        Api()
          .post("/register", {
            name: data.name,
            email: data.email,
            password: data.password,
          })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        Api()
          .post("/login", {
            email: credentials.email,
            password: credentials.password,
          })
          .then((response) => {
            const token = response.data;

            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
  },
});
