<template>
  <div class="home">
	  <!-- 导航模块-->
	<div class="index-category">
		 <!-- v-for指令循环-->
		 <div class="category" v-for="(val,key) in lists " :key="key">
			 <!-- class属性的绑定可以是数组，也可以是对象，对象的话，值用布尔值-->
			 <i class="iconfont" :class="[val.icon]" :style="{background:val.color}"></i>
			 <label >{{val.title}}</label>
		 </div>
	</div>
	
	<!-- 轮播图模块, -->
	<Banner :imgArr="imgArr"/>
	
	<!-- 列表展示模块 -->	
	<div class="index-main">
		<ul>
			<li class="lists" v-for="(item,key) in items" :key="key">
			  <a href="">
				  <router-link :to="'/detail/'+item.product_id" >
					   <img :src="item.product_img_url" alt="" width="150" height="150"/>
				  </router-link>
			  </a>
			  <label>
				  <b class="discount">{{item.product_upprice}}</b>
				  <span class="price-text">{{item.product_price}}</span>
			  </label>
			</li>
		</ul>
		<router-view/>
	</div>
	
  </div>
</template>

<script>
import Banner from   '../components/Banner.vue'
export default {
  name: 'Home',
  data(){
	  return {
		  n:0,
		  lists:[
			 {title:"美食",icon:"iconfaxian",color:"#fadedd"},
		     {title:"健身",icon:"iconding_huabanfuben",color:"#ffbadd"},
		     {title:"娱乐",icon:"iconshouyeshouye",color:"#ff4a00"},
			 {title:"音乐",icon:"iconwode",color:"#ddd"}
		 ],
		 imgArr:[
			 require('../assets/img/img1.jpg'),
			 require('../assets/img/img2.jpg'),
			 require('../assets/img/img3.jpg'),
			 require('../assets/img/img5.jpg')
		 ],
		  items:[]
	  }
  },
  components:{
	  Banner
  },
  methods:{
	 getList(){
		 //获取图片列表
		 /* this.$http.get('http://127.0.0.1:9000/test/1/10').then(res=>{
			 console.log(res.data);
		 }) */
		 this.axios.get('/vue-mock/imgArr').then(res=>{
			 //console.log(res);
			 if(res.data){
				 this.items = res.data.data;
			 }
		 })
	 }
  },
  mounted:function(){
  	this.getList();
  }

}
</script>
<style>
	@import '../assets/css/index.css';
</style>