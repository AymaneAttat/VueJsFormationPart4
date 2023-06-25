import counterMutations from './mutations';
import counterGetters from './getters';
import counterActions from './actions';
export default {
    namespaced: true,
    state: {
        counter: 5,
        name: 'Aymane Attat'
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
}