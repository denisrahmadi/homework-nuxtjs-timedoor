import axios from "axios";

export const state = () => ({
  // classData: [
  //   {
  //     title: "Learn HTML",
  //     link: "pQN-pnXPaVg",
  //     imageLink: "https://codybonney.com/images/16x9/tags/html.png",
  //     price: 100,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn CSS",
  //     link: "1Rs2ND1ryYc",
  //     imageLink:
  //       "https://designmodo.com/wp-content/uploads/2011/11/3-CSS3-Logo-747x439.jpg",
  //     price: 150,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn Javascript",
  //     link: "PkZNo7MFNFg",
  //     imageLink:
  //       "https://techdevised.files.wordpress.com/2021/01/javascript.png?w=1200",
  //     price: 200,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn VueJS",
  //     link: "4deVCNJq3qc",
  //     imageLink:
  //       "https://www.synolia.com/wp-content/uploads/2019/12/header-vue-js.jpg",
  //     price: 300,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn ReactJS",
  //     link: "DLX62G4lc44",
  //     imageLink:
  //       "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
  //     price: 300,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn NuxtJS",
  //     link: "IRKx97XfiYI",
  //     imageLink:
  //       "https://kdydesign.github.io/2019/04/10/nuxtjs-tutorial/cover.png",
  //     price: 250,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn NextJS",
  //     link: "KjY94sAKLlw",
  //     imageLink:
  //       "https://javabeat.net/wp-content/uploads/2016/11/Using-Next.jpg",
  //     price: 250,
  //     level: "basic",
  //   },
  //   {
  //     title: "Learn NextJS",
  //     link: "KjY94sAKLlw",
  //     imageLink:
  //       "https://javabeat.net/wp-content/uploads/2016/11/Using-Next.jpg",
  //     price: 250,
  //     level: "basic",
  //   },
  // ],
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
            classItemArray.push({ ...response.data[key], id:key })
        }
        commit('setClassData', classItemArray)
      })
      .catch(e => context.error(e))
  },
};
