<template>
<div>
    <appHeader></appHeader>
    <transition name="fade" mode="out-in">
        <router-view></router-view>>
    </transition>
    <appFooter></appFooter>
</div>
</template>

<script>
import Footer from './components/shared/Footer.vue';
import Header from './components/shared/Header.vue';

export default {
    components: {
        appFooter: Footer,
        appHeader: Header
    },
    created() {
        this.$store.dispatch("getTradeResult");
        this.$store.dispatch("initApp");
    }
}
</script>

<style>

body{
  background-color: #a7a0bb5c;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .3s ease-out;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity .3s ease-out;
  opacity: 0;
}
</style>
