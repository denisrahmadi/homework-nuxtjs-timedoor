import axios from "axios";
import auth from "../middleware/auth";

export const state = () => ({
  classData: [],
  token: null,
  userData: null
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
  },

  isAuth(state){
    return state.token != null
  }
};

export const mutations = {
  addClassItem(state, payload) {
    return state.classData.push(payload);
  },

  setClassData(state, payload) {
    return (state.classData = payload);
  },

  setToken(state, payload){
    return state.token = payload
  },

  setUserData(state, payload){
    return state.userData = payload
  }
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

  addClassData({ commit, state }, newClassData) {
    return axios
      .post(
        "https://recall-nuxtjs-theory-default-rtdb.asia-southeast1.firebasedatabase.app/classData.json?auth="+ state.token,
        newClassData
      )
      .then((response) => {
        commit("addClassItem", newClassData);
      });
  },

  authUser({commit}, authData){
    let WebAPIKey = "AIzaSyBV4Aw9RePLtyl3AIj43sPs6etE6ktnivU"
    let authURL = authData.isLogin 
                ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
                : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

    return axios
              .post(authURL + WebAPIKey, {
                  displayName: authData.displayName,
                  email: authData.email,
                  password: authData.password,
                  returnSecureToken: true,
              })
              .then((response) => {
                                    commit('setToken', response.data.idToken)
                                    commit('setUserData', {
                                        userName: response.data.displayName,
                                        userId: response.data.localId,
                                        email: response.data.email
                                    })
                                  })
              .catch((error) => console.log(error))
  }
};
