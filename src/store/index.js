import { createStore } from 'vuex'
import counterModule from './counter/index'
import categoryModule from './category/index'

//const counterModule = {
//  namespaced: true,
//  state: {
//    counter: 5,
//    name: 'Aymane Attat'
//  },
//  mutations: {
    /*increase(state, payload){
      //state.counter += 12;
      state.counter += payload.data;
    }*/
//  },
//  actions: {
    /*increment({commit}, payload){
      //context.commit('increase', payload)
      commit('increase', payload)
    },*/
//  },
//  getters: {
    /*getName(state){
      return state.name.toUpperCase();
    },
    getCounter(state){
      return state.counter * 2;
    },
    getCounterNormalize(state, getters){
      //const counter = state.counter * 2;
      const counter = getters.getCounter;
      if(counter > 100){
        return 100;
      }
      if(counter < 0){
        return 0;
      }
      return counter;
    }*/
//  }
//}

//const categoryModule = {
//  state: {
//    categories: []
//  },
//  mutations: {
//    AddCategory(category){},
//    UpdateCategory(id, category){},
//    DeleteCategory(id){}
//  },
//  actions: {
//    persistCategory({ commit }, payload){}
//  },
//  getters: {
//    getCategories(state){},
//  }
//}

export default createStore({
  state: {
    //counter: 5,
    //name: 'Aymane Attat',
    
    //categories: []
  },
  mutations: {
    /*increase(state, payload){
      //state.counter += 12;
      state.counter += payload.data;
    },*/

    //AddCategory(category){},
    //UpdateCategory(id, category){},
    //DeleteCategory(id){}
  },
  getters: {
    //getCategories(state){},

    /*getName(state){
      return state.name.toUpperCase();
    },
    getCounter(state){
      return state.counter * 2;
    },
    getCounterNormalize(state, getters){
      //const counter = state.counter * 2;
      const counter = getters.getCounter;
      if(counter > 100){
        return 100;
      }
      if(counter < 0){
        return 0;
      }
      return counter;
    }*/
  },
  actions: { //increment(context, payload)
    /*increment({commit}, payload){
      //context.commit('increase', payload)
      commit('increase', payload)
    },*/

    //persistCategory({ commit }, payload){}
  },
  modules: {
    counter: counterModule,
    category: categoryModule
  }
})
