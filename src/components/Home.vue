<template>
    <div id="Home">
        <button id="alertBtn" type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="alert">警告消息框</button>
        <Toast ref="toast" :oToastOptions="oToastOptions" @submitToast="submitToast">
        </Toast>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            oToastOptions: {
                isShow: false
            }
        }
    },
    created(){
    },
    methods: {
        alert(){
            this.oToastOptions.isShow = true;
        },
        submitToast(){
            this.oToastOptions.isShow = false;
        }
    }
}
</script>

<style scoped>

</style>
