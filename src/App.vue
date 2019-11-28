<template>
  <div id="app">
    <div class="nave_nth">
       <router-link to="/a" tag='p'>A</router-link>
       <router-link to="/b" tag='p'>B</router-link>
    </div>
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
 width: 100%;
 height: 100%;
 border: 1px solid red;
 margin: 0;
 padding: 0;
}
.nave_nth{
  display:flex;
  justify-content:space-between;
  width: 300px;
}
.nave_nth>p{
    width:80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid darkgoldenrod;
}
</style>
