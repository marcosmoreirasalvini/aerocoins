<template>
    <header class="header">
        <div class="row between-xs">
            <div class="header__brand">
                <router-link to="/">
                    <img src="@/assets/aerolab-logo.svg" alt="Aero Logo">
                </router-link>
            </div>
            <div class="user align-end">
                <div class="user__points">
                    <span class="title">{{user.points}}</span>
                    <img src="@/assets/icons/coin.svg" class="coin" alt=" Aero Coin">
                </div>
                <span class="user__name title ">
                    {{user.name}}
                </span>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'TheHeader',
        props: ['user', 'userPoints']
    };
</script>
