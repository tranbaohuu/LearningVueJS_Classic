<!--&lt;!&ndash;demo gốc&ndash;&gt;-->

<!--<template>-->
<!--<div class="container">-->
<!--<div class="row">-->
<!--<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">-->
<!--<h1>Server Status: {{status}}</h1>-->

<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "my-cm",-->
<!--data: function () {-->
<!--return {-->
<!--status: "My Critical Status"-->
<!--}-->
<!--}-->

<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->


<!--Cách gọi Component thừ class vue khác-->

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-server></app-server>

            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>

