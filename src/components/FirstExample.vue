<template lang="">
    <div>
        <h1>Vue VUEX</h1>
        <h4>{{counter}}</h4>
        <button @click="increase">inc</button>
    </div>
</template>
<script>
export default {
    computed:{
        counter(){
            //return this.$store.state.counter;$store.state.
            //return this.$store.getters.getCounter;
            //return this.$store.getters.getCounterNormalize;
            return this.$store.getters['counter/getCounterNormalize'];
        }
    },
    methods: {
        increase(){
            //this.$store.state.counter++;
            //this.$store.commit('increment', {data: 5});
            //this.$store.dispatch('increment', {data: 5});
            this.$store.dispatch('counter/increment', {data: 5});
        }
    },
}
</script>
<style lang="">
    
</style>