<template>
    <div>
        <div v-if="$store.state.loading" class="loading">
            <div class="spinner"><div></div><div></div></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Loading',
        computed: {
            ...mapState(['loading'])
        }
    };
</script>
