<template>
    <!--Trong đây chỉ xài 1 root div nếu có trên 2 thẻ sẽ báo lỗi-->
    <div>
        <p>Server Status: {{status}}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                status: 'critical'
            }
        },
        methods: {
            //Cách viết bên dưới giống changeStatus: function(){}; nhưng là ES6 nên rút gọn hơn
            changeStatus() {

                this.status = 'Normal'
            }
        }
    }
</script>

<style scoped>

</style>
