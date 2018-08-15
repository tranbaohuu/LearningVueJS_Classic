//Dùng Vue Component, lưu ý khi xài component thi phải để trước el muốn add vào VD tại đây là el: '#app1'
//Còn nếu muốn xài cho el khac thì phải có thêm 1 hàm new Vue({ el: '#tên el' })
Vue.component('hello', {
    template: '<h1>Hello ! Component TRAN</h1>'
});

//tạo biến để lưu Vue Model sau đó gọi được từ Instance khác
var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            // console.log(this.$refs);
            //kết nối với ref đã khai báo bên HTML rồi sau đó gán giá trị cho bất cứ trường nào của nó, như trong jquery selector xong rồi đổi giá trị
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

//cách này dể đính id html vào sử dụng VueJS, nếu dùng cách này trên Vue Template không sử dụng el: '#app1'
// vm1.$mount('#app1');

vm1.newProp = 'New!';

vm1.$refs.heading.innerText = 'Something Else !';


setTimeout(function () {
    vm1.title = 'Changed by Timer 3s';
    vm1.show();
}, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The Second Instance !'
    },
    methods: {
        onChange: function () {
            //gọi title từ Instance 1
            vm1.title = 'Changed';
        }
    }
});

//
// var vm3 = new Vue({
//     template: '<h1>Hello ! Template Vue</h1>'
//
// });
//
//
// vm3.$mount('#app3');


// //javascript thuan túy mount
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el)


// var vmHello = new Vue({
//     el: 'hello',
//     template: '<h1>Hello ! Component</h1>'
//
// });


//gán template vào app3 phải khai báo component trên new Vue mới sử dụng render ra được

Vue.component('hello', {
    template: '<h1>Hello ! Component TRAN</h1>'

});

new Vue({el: '#app3',});
