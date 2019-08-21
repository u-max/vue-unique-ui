<template>
    <div id="Home">
        <button id="alertBtn" type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="alert">警告消息框</button>
        <Dialog :oDialogOptions="oDialogOptions" @submitDialog="submitDialog"></Dialog>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            oDialogOptions: {
                isShow: false
            }
        }
    },
    methods: {
        alert(){
            this.oDialogOptions.isShow = true;
        },
        submitDialog(){
            this.oDialogOptions.isShow = false;
        }
    }
}
</script>

<style scoped>

</style>
