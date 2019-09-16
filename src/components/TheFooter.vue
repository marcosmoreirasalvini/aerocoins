<template>
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h4>Made width <img src="@/assets/icons/aerolove.svg" alt="Aero Love" @click="addPoints(1000)"> for Marcos to Aerolab </h4>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import user from '../services/user';

    export default {
        name: 'Footer',
        methods: {
            async addPoints(el) {
                await user.addPoints({amount: el});
            }
        }
    };
</script>
