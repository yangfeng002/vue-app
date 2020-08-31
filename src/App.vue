<template>
  <div id="app" v-cloak>
	  <!--路由展示-->
	  <div>
	  	<router-view />
	  </div>
	  <!-- 底部导航 以下两种方式都可以-->
	 <nav-bottom/>
	 <!-- <NavBottom/> -->
	 
  </div>
</template>

<script>
	/** 
	 * 组件引入有3个步骤：
	 * 1）import引入
	 * 2）component映射
	 * 3)组件标签
	 */
	import NavBottom from './components/NavBottom.vue';
	export default {
	   components:{
		   NavBottom
	   }	
	}
</script>
	
<style scoped> 
    @import './assets/css/index.css';
</style>
