import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text: "",
  },
  getters: {
    url(state) {
      const value = state.text;
      const hasType = value.indexOf("base64,") !== -1;
      const processedValue = hasType ? value.split("base64,")[1] : value;
      return `data:image/png;base64, ${processedValue}`;
    },
  },
  mutations: {
    changeText(state, text) {
      state.text = text;
    },
  },
  actions: {
    clearInput(context) {
      context.commit("changeText", "");
    },
  },
});
