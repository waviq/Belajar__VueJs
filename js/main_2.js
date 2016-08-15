
Vue.component('plan',{
    plan:{
        template:'#plan-template',
        props:['plan','active'],

        computed:{
            isUpgrate:function () {
                return this.plan.price > this.active.price;
            }
        },

        methods:{
            setActivePlan:function () {
                this.active = this.plan;
            }
        }
    }
});

new Vue({
    el:'#my-app',

    data:{
        plans:[
            {name:'Free', price:0},
            {name:'Personal', price:50},
            {name:'Pro', price:2000}
        ],
        active:{}
    },

    components:{

        /*plan:{
            template:'#plan-template',
            props:['plan','active'],

            computed:{
                isUpgrate:function () {
                    return this.plan.price > this.active.price;
                }
            },

            methods:{
                setActivePlan:function () {
                    this.active = this.plan;
                }
            }
        }*/

    }
});