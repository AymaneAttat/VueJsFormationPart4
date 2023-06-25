export default {
    increase(state, payload){
        //state.counter += 12;
        state.counter += payload.data;
    }
}