<template lang="">
    <div>
        <!-- <h1>{{ getCounter }}</h1> -->
        <!-- <h2>{{ getName }}</h2> -->
        <!-- <button @click="increment({data: 10})">Increm</button> <button @click="inc">Increm</button> -->
        <h1>{{ counter }}</h1>
        <h2>{{ name }}</h2>
        <button @click="inc({data: 10})">Increm</button>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
export default {
    computed:{
        /*counter(){
            //return this.$store.state.counter;
            return this.$store.getters.getCounter;
        },
        name(){
            //return this.$store.state.name;
            return this.$store.getters.getName;
        }*/
        //...mapGetters(['getName', 'getCounter'])
        ...mapGetters('counter',{
            'name': 'getName' ,
            'counter': 'getCounter'
        })
    },
    methods: {
        /*inc(){
            //this.$store.state.counter++;
            //this.$store.commit('increment', {data: 10});
            //this.$store.commit({  type: 'increment',  data: 10 });
            this.$store.dispatch({  type: 'increment',  data: 10 });
        }*/
        //...mapActions(['increment'])
        ...mapActions('counter',{'inc': 'increment'})
    }
}
</script>
<style lang="">
    
</style>