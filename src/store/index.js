import { defineStore } from 'pinia';

export const useStore = defineStore('mainStore', {
  state: () => {
    return {
      text: '',
    };
  },
  getters: {
    url(state) {
      const value = state.text;
      const hasType = value.indexOf('base64,') !== -1;
      const processedValue = hasType ? value.split('base64,')[1] : value;

      return `data:image/png;base64, ${processedValue}`;
    },
  },
  actions: {
    clearInput() {
      this.text = '';
    },
  },
});
