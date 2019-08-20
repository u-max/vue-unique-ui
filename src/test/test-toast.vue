<template>
    <div>
        <button id="alertBtn" type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="alert">警告消息框</button>
        <Toast :oToastOptions="oToastOptions" @submitToast="submitToast"></Toast>
    </div>
</template>

<script>
import Vue from 'vue'
// import uniqueUI from '../../lib/index.js';
import uniqueUI from '../../example/unique-ui.js';

Vue.use(uniqueUI)
export default {
    data () {
        return {
            oToastOptions: {
                isShow: false
            }
        }
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

<style>
</style>