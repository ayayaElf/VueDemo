(function(){
    Vue.component("nav-icon", {
        template: `<a href="#">
                       <img :src="iconSrc" alt="">
                       <span>{{content}}</span>
                   </a>`,
        props: {
            isrc: {
                type: String,
                defalut: "ex10.png"
            },
            content: {
                type: String,
                defalut: "首页"
            }
        },
        computed: {
            iconSrc(){
                return "./images/" + this.isrc;
            }
        }
    });
    Vue.component("dynamic-col", {
        template: `<div class="dynamicInfo">
                       <h3 class="info">{{info}}</h3>
                       <div class="details">
                           <span class="labelone">{{labelone}}</span>
                           <span class="labeltwo">{{labeltwo}}</span>
                           <span class="labelthree">{{labelthree}}</span>
                       </div>
                       <p class="price">{{price}}</p>
                   </div>`,
        props: {
            info: {
                type: String,
                defalut: "项目名称"
            },
            labelone: {
                type: String,
                defalut: "招标"
            },
            labeltwo: {
                type: String,
                defalut: "￥60万"
            },
            labelthree: {
                type: String,
                defalut: "甲方："
            },
            price: {
                type: String,
                defalut: "剩余天数"
            }
        }
    });
    var bg = new Vue({
        el: "#scroll"
    });
})()
