new Vue({
    el: "#obj",
    data: {

        noidung: "Xin chào Trần Bảo Hữu",
        link: "https://www.google.com.vn",
        finishedLink: '<a href="https://www.vnexpress.net">VNExpress</a>',
        counter: 0,
        x: 0,
        y: 0

    },
    methods: {
        changeTitle: function (event) {
            this.noidung = event.target.value;

        }
        ,
        sayHello: function () {
            this.noidung = "Hello It's me!";
            return this.noidung;
        }
        ,
        sayHelloReturnFromNoiDung: function () {
            return this.noidung;
        },
        //vừa truyền tham số vừa truyền event gốc vuejs
        increase: function (thamso, event) {
            this.counter++;
        },
        updateCoordinates: function (event) {
            //lấy ra vị trí con trỏ chuột
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            //ngưng tính toán khi vào hàm này
            event.stopPropagation();
        }
    }
});
