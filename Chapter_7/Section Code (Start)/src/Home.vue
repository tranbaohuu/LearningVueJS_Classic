<!--&lt;!&ndash;Cách đầu tiên làm global component &ndash;&gt;-->

<!--<template>-->
<!--&lt;!&ndash;Trong đây chỉ xài 1 root div nếu có trên 2 thẻ sẽ báo lỗi&ndash;&gt;-->
<!--<div>-->
<!--<p>Server Status: {{status}}</p>-->
<!--<hr>-->
<!--<button @click="changeStatus">Change Status</button>-->
<!--</div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "Home",-->
<!--data: function () {-->
<!--return {-->
<!--status: 'critical'-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--//Cách viết bên dưới giống changeStatus: function(){}; nhưng là ES6 nên rút gọn hơn-->
<!--changeStatus() {-->

<!--this.status = 'Normal'-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<!--Cách 2 làm component localy-->


<template>
    <!--Trong đây chỉ xài 1 root div nếu có trên 2 thẻ sẽ báo lỗi-->
    <div>
        <!--server là tên tự đặt , tên j cũng được-->
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {

        components:
            {
                'app-server-status': ServerStatus
            }
    }
</script>

<style scoped>

</style>
