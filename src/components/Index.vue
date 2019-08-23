<template>
    <div id="Index">
        <div id="title" class="uniqueUI-col-xs-12">
            <a href="javascript:;">
                <img src="../assets/img/title.png">
            </a>
        </div>
        <div id="logo">
            <a href="javascript:;">
                <img src="../assets/logo.png">
            </a>
        </div>
        <div class="btn-group">
            <button type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="docsClick">☞ docs ☜</button>
            <button type="button" class="uniqueUI-btn uniqueUI-btn-blue uniqueUI-btn-outlined" @click="liveDemoClick">☞ live demo ☜</button>
        </div>
        <div class="foot">
            v1.1.6
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
        }
    },
    created(){
        window.onresize = function(){
            var width = document.documentElement.clientWidth || document.body.clientWidth;
            if (width > 768) {
                alert('请到移动端或手机模式下查看!');
            }
        }
    },
    methods: {
        docsClick(){
            window.location.href = 'https://github.com/u-max/vue-unique-ui';
        },
        liveDemoClick(){
            this.$router.push({
                name: 'Home'
            });
        }
    }
}
</script>

<style scoped lang="less">
@media screen and (max-width:768px){
    #Index{
        #title{
            width: 50%;
            margin: 50px auto;
            margin-top: 25%;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        #logo{
            width: 100px;
            height: 178px;
            margin: 0 auto;
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .btn-group{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5%;
            button{
                width: 40%;
                margin: 2% 0;
            }
        }
        .foot{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8da6e6;
        }
        .uniqueUI-btn-outlined.uniqueUI-btn-blue{
            color: #8da6e6;
        }
        .uniqueUI-btn-blue{
            border: 1px solid #8da6e6;
        }
    }
}

</style>
