import categoryMutations from './mutations';
import categoryGetters from './getters';
import categoryActions from './actions';
export default {
    //namespaced: true,
    state: {
        categories: []
    },
    mutations: categoryMutations,
    actions: categoryActions,
    getters: categoryGetters
}