import { createStore } from "vuex";

export default createStore({
  state: {
    quizs: [
      {
        name: "HCI",
        terms: "448 terms",
        user: "User ABC",
      },
      {
        name: "HCI",
        terms: "448 terms",
        user: "User ABC",
      },
      {
        name: "HCI",
        terms: "448 terms",
        user: "User ABC",
      },
      {
        name: "HCI",
        terms: "448 terms",
        user: "User ABC",
      },
      {
        name: "HCI",
        terms: "448 terms",
        user: "User ABC",
      },
      
    ],
  },
  getters: {
    quizs: state => state.quizs,
  },
  mutations: {},
  actions: {},
  modules: {},
});
