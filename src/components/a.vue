<template>
  <div class="A">
    <input type="text" />
    <ul>
        <router-link to='/y' tag='li' v-for="(item,key) in list " :key="key">
            {{item.item}}
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "A",
  data() {
    return {
      list: [
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" },
        { item: "实力肯定是" }
      ],
      scroll:0//scroll初始值第一步
    };
  },
  //第四步
  //scrollTo(x,y) 方法可把内容滚动到指定的坐标。
  activated() {
    if(this.scroll>0){
        window.scrollTo(0,this.scroll)
        this.scroll=0;
        window.addEventListener('scroll',this.handelScroll)
    }
  },
   //组件退出时清楚事件第五步
  deactivated(){
        window.removeEventListener('scroll',this.handelScroll)
  },
  //挂在dom事件第二步
  mounted(){
       window.addEventListener('scroll',this.handelScroll)
  },
  //获取顶部的距离第三步
  methods:{
      handelScroll(){
          this.scroll=document.documentElement && document.documentElement.scrollTop
          console.log(document.documentElement.scrollTop)
      }
  }
};
</script>
<style scoped>
.A{
    height: 100%;
    width: 100%;
}
.A ul{
    list-style: none;
}
.A ul li{
    height: 200px;
    width: 100%;
    border-bottom: 1px solid red;
    text-align: center;
    line-height: 200px;
}
</style>