import axios from "axios";

export const state = () => ({
  classData: [],
});

export const getters = {
  getClassData(state) {
    return state.classData;
  },

  lastIdClassItem(state) {
    let classItemLength = state.classData.length;
    return state.classData[classItemLength - 1].id;
  },

  detailClassItem: (state) => (id) => {
    return state.classData.find(
      (classItem) => classItem.id === id)
  }
};

export const mutations = {
  addClassItem(state, payload) {
    return state.classData.push(payload);
  },

  setClassData(state, payload) {
    return (state.classData = payload);
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    return axios
      .get(
        "https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/classData.json"
      )
      .then((response) => {
        const classItemArray = [];
        for (const key in response.data) {
          classItemArray.push({ ...response.data[key], id: key });
        }
        commit("setClassData", classItemArray);
      })
      .catch((e) => context.error(e));
  },

  addClassData({ commit }, newClassData) {
    return axios
      .post(
        "https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/classData.json",
        newClassData
      )
      .then((response) => {
        commit("addClassItem", newClassData);
      });
  },
};
