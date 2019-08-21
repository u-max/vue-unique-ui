<!-- 
/**
 * Dialog 模态框/对话框
 * @author YuFy
 * @return isShow 是否显示
 * @return oDialogOptions  相关配置信息
 * @param {String} title 标题
 * @param {String} text 提示说明
 * @param {Boolean} isCancelButton 是否显示取消按钮
 * @param {String} submitText 确定按钮文字
 * @param {String} cancelText 取消按钮文字
 * @param {Object} submitBtnStyle 确定按钮的样式
 * @param {Object} cancelBtnStyle 取消按钮的样式
 * emit方法:
 *     submitDialog 确定
 *     cancelDialog 取消
 */
 -->
<template>
    <transition name="fade"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
        <div id="Dialog" v-if="isShow">
            <div class="uniqueUI-popup uniqueUI-popup-in" style="display: block;">
                <div class="uniqueUI-popup-inner">
                    <div class="uniqueUI-popup-title">{{ dialog.title }}</div>
                    <div class="uniqueUI-popup-text">{{ dialog.text }}</div>
                </div>
                <div class="uniqueUI-popup-buttons">
                    <span class="uniqueUI-popup-button uniqueUI-popup-button-bold" @click="submitDialog" :style="dialog.submitBtnStyle">
                        {{ dialog.submitText }}
                    </span>
                    <span class="uniqueUI-popup-button uniqueUI-popup-button-bold" @click="cancelDialog" v-if="dialog.isCancelButton" :style="dialog.cancelBtnStyle">
                        {{ dialog.cancelText }}
                    </span>
                </div>
            </div>
            <div class="uniqueUI-popup-backdrop uniqueUI-active" style="display: block;"></div>
        </div>
    </transition>    
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        oDialogOptions: {
            type: Object,
            required: false
        },
        isShow: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        dialog(){
            let oDialogOptions = this.oDialogOptions || {};
            let dialog = {
                title: oDialogOptions.title ? oDialogOptions.title : '温馨提示',
                text: oDialogOptions.text ? oDialogOptions.text : '欢迎使用uniqueUI',
                isCancelButton: typeof(oDialogOptions.isCancelButton) === 'undefined' ? false : oDialogOptions.isCancelButton,
                submitText: oDialogOptions.submitText ? oDialogOptions.submitText : '确定',
                cancelText: oDialogOptions.cancelText ? oDialogOptions.cancelText : '取消',
                submitBtnStyle: oDialogOptions.submitBtnStyle || {},
                cancelBtnStyle: oDialogOptions.cancelBtnStyle || {},
            };
            return dialog;
        }
    },
    methods: {
        submitDialog(e){
            this.$emit('submitDialog', e);
        },
        cancelDialog(e){
            this.$emit('cancelDialog', e);
        }
    }
}
</script>

<style scoped>
.animated{
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}
</style>
