<template>
   <!-- 轮播图-->
   <div class="banner">
   	<img alt="Vue logo" v-for="(v,i) in imgArr" :src="v" :key="i"  v-show="n==i" />
   	<div class="banner-circle">
   		<ul>
   			<li v-for="(v,i) in imgArr" :key="i" :class="i==n?'selected':''" @click="showImg(i)"></li>
   		</ul>
   	</div>
   </div>
</template>

<script>
   //模板里面有个固定的写法,向外默认暴露一个配置对象
   export default {
      name:'Banner',
	  data(){
	  	  return {
	  		  n:0,
	  		  timer:null,
	  		 lists:[
	  			 {title:"美食",icon:"iconfaxian",color:"#fadedd"},
	  		     {title:"健身",icon:"iconding_huabanfuben",color:"#ffbadd"},
	  		     {title:"娱乐",icon:"iconshouyeshouye",color:"#ff4a00"},
	  			 {title:"音乐",icon:"iconwode",color:"#ddd"}
	  		 ]
	  	  }
	  },
	 // props:["imgArr"],//传统的2.9.6的脚手架用数组接收参数
	  props:{
		  //对象的方式来使用
		imgArr:{
			
		},
		obj:{
			id:"",
			
		}
	  },
	  methods:{
	  	  //设置一个定时器
	  	  play(){
	  		 this.timer = setInterval(this.autoPlay,3000);  
	  	  },
	  	 
	  	  autoPlay(){
	  		  this.n++;
	  		  if(this.n==this.imgArr.length){
	  			  this.n=0;
	  		  }
	  	  },
	  	  showImg(i){
	  		 //点击某一个点的时候展示某一个指定的图片
	  		 this.n=i;
	  	  }
	  },
	  mounted:function(){//挂载完成
	  	 this.play();//调用轮播图定时器
	  },
	  destroyed:function(){//销毁
	      console.log("轮播图已停止");
	  	  clearInterval(this.timer);
	  }
   }

</script>

<style>
	
</style>
