<template>
  <div class="detail">
    {{id}}详情页
	<a @click="goBack">返回</a>
  </div>
</template>

<script>
import Banner from   '../components/Banner.vue'
export default {
  name: 'Home',
  data(){
	  return {
		  id:0
	  }
  },
  methods:{	 
	 goBack(){
		  //window.history.go(-1);//直接跳转
		  this.$router.push('/home');
	 }
	 
  },
  mounted:function(){
  	 //打印传递的参数值
	 console.log(this.$route.params);
	 this.id = this.$route.params.id;
	 //获取到值以后去请求后台，获取详情页相关信息
	 /* this.axios.get("vue-mock/detail",{
		 params:{
			 id:this.id
		 }
	 }).then()
	   .catch()
	 */
	 
  }

}
</script>
<style>
	@import '../assets/css/index.css';
	.detail{
		text-align: center;
	}
</style>