/*
app : digunakan sebagai directive yang ada di halaman html, biar bisa ketarik
dirrective:
    .namaClass = penggunaan titik diikuti dengan nama class, untuk memanggil directive jika berupa class
    #Id = pemanggilan directive menggunakan tanda (#) digunakan apabila dalam html berupa (id)

methods: digunakan untuk menampung method-method yang kita buat
handleAction :  adalah salah satu dari jenis pembuatan method
preventDefault = digunakan bila TIDAK ingin menampilkan dari action url pada sebuah form
*/


Vue.component('my-counter',{
    template:'#counter-template',
    props:['title'],
    data:function () {
        return {
            counter:0
        }
    }
});

new Vue({
    el:'#app',


    data:{
        pesan: '',
        count: 0,
        point:0,
        first:'waviq',
        last:'subhi'
    },

    components:{

    },
    computed:{
        skills:function () {
            if(this.point <= 50){
                return 'Cupu';
            }
            return 'Pro';
        },

        fullname:function () {
            return this.first +' '+ this.last;
        }
    },

    watch:{
        /*first:function (first) {
            this.fullname = first +' '+ this.last;
        },
        last:function (last) {
            this.fullname = this.first +' '+ last;
        }*/
    },
    methods:{
        handleAction:function (e) {
            alert('Handleddd');
            e.preventDefault();
        },

        countAction:function () {
            this.count +=1;
        }
    }

});

