export default {
    getName(state){
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
    }
}