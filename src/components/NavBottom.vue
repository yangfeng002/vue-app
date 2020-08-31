<template>
  <div class="nav-bottom">
  		  <router-link to="/home">
			  <i class="iconfont iconshouyeshouye"></i>
  			  <label>首页</label>
  		  </router-link>
  		<router-link to="/find">
			<i class="iconfont iconfaxian"></i>
  			<label>发现</label>
  		</router-link>
  		 <router-link to="/order">
			<i class="iconfont iconding_huabanfuben"></i>
  		 	<label>订单</label>
  		 </router-link>
  		 <router-link to="/my">
			 <!-- 字体图标库-->
			 <i class="iconfont iconwode"></i>
  		 	<label>我的</label>
  		 </router-link>
  </div>
</template>
hou
<script>
   //模板里面有个固定的写法,向外默认暴露一个配置对象
   export default {
      name:'NavBottom'
   }

</script>
<style>
	@import url("");
	.active{
		color:#FF0000;
	}
</style>
