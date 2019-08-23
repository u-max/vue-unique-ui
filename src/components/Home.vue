<template>
    <div id="Home">
        <button id="alertBtn" type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="alert">警告消息框</button>
        <Dialog :isShow="isShow" @submitDialog="submitDialog"></Dialog>
        
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
        }
    }
}
</script>

<style scoped lang="less">

</style>
