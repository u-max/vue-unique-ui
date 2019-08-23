<template>
    <div id="Home">
        <button id="alertBtn" type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="alert">警告消息框</button>
        <Dialog :isShow="isShow" @submitDialog="submitDialog"></Dialog>
        <button @click="OneClick">跳转 TestComponentOne</button>
        <button @click="TwoClick">跳转 TestComponentTwo</button>
        <button @click="ThreeClick">跳转 TestComponentThree</button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        alert(){
            this.isShow = true;
        },
        submitDialog(){
            this.isShow = false;
        },
        OneClick(){
            this.$router.push({
                name: 'TestComponentOne'
            });
        },
        TwoClick(){
            this.$router.push({
                name: 'TestComponentTwo'
            });
        },
        ThreeClick(){
            this.$router.push({
                name: 'TestComponentThree'
            });
        },
    }
}
</script>

<style scoped lang="less">

</style>
