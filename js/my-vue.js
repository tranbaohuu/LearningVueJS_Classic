new Vue({
    el: "#obj",
    data: {

        noidung: "Xin chào Trần Bảo Hữu",
        link: "https://www.google.com.vn",
        finishedLink: '<a href="https://www.vnexpress.net">VNExpress</a>',
        counter: 0,
        x: 0,
        y: 0,
        twowaysbinding: "",
        attachRed: false,
        attachGreen: false

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
        },
        keyupevent: function () {
            alert('haha alert');
        }
    },
    computed: {
        output: function () {
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        },
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    },
    watch: {
        counter: function (value) {
            //trong hàm callback lại như dàng hàm setTimeout phải khai báo 1 biến để chứa this chứ ko sẽ không chạy được.
            //Như kiểu hàm callback chạy đa luồng nên cần pải có 1 biến khác để chạy thay vì dùng this chạy từ luồng chính
            //Asynchronous Task
            var vm = this;
            // this.counter = 0;
            setTimeout(function () {
                //hàm canh chừng biến data có gì thay đổi sẽ thực thi hành động trong đây.
                //Na ná trigger trong sql
                vm.counter = 0;
            }, 3000)
        }
    }
});
