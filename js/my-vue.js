new Vue({
    el: "#obj",
    data: {

        noidung: "Xin chào Trần Bảo Hữu"

    },
    methods: {
        changeTitle: function (event) {
            this.noidung = event.target.value;

        }
    }
});
