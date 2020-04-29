<template>

  <div class="hello">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-2">
              <img :src="imgUrl" style="margin-left: 150px;">
            </div>
            <div class="col-md-3">
              <h2 style="margin-top: 60px;">
                全好口腔连锁医院
              </h2>
            </div>
            <div class="col-md-7">
              <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" @click="Home">网站首页</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">服务项目</template>
                  <el-menu-item index="2-1">就诊攻略</el-menu-item>
                  <el-menu-item index="2-2" @click="subscribe">预约挂号</el-menu-item>
                  <el-menu-item index="2-3" @click="doctor">专家介绍</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">出诊信息</template>
                    <el-menu-item index="2-4-1">科室总览</el-menu-item>
                    <el-menu-item index="2-4-2">电子病历</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">当前流程</el-menu-item>
                <el-menu-item index="4">诊室位置</a></el-menu-item>
                <el-menu-item index="5" style="margin-left: 80px"><i class="el-icon-user-solid" style="font-size: 40px;color: aliceblue;margin-top: 10px;margin-left: 200px"></i></el-menu-item>
                <el-menu-item index="6" @click="login">登陆</a></el-menu-item>
                <el-menu-item index="7" @click="register">注册</a></el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>

        <div style="height: 300px;width: 300px">
          <div class="mapbox">

            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:350px;width: 1500px;margin-left: 50px" @click="getClickInfo">
              <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
              <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
              <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
              <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>

            </baidu-map>

          </div>

        </div>

      </div>
      <div style="height: 300px;margin-top: 200px;background:  #F0FFF0">
        <el-breadcrumb separator="/" style="margin-left: 500px;font-size: 20px">
          <el-breadcrumb-item :to="{ path: '/' }" style="margin-top: 80px">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px"><a href="/">关于我们</a></el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px">来院路线</el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px">医院微信</el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px">网站地图</el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px">版权声明</el-breadcrumb-item>
          <el-breadcrumb-item style="margin-top: 80px">联系方式</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <p>
          地址：大连市甘井子区山东路商城225号    预约咨询电话：(0411)86571657
          邮编：210211
        </p>
      </div>
    </div>
  </div>



</template>

<script>
    export default {
        name: "survey",
        data() {
            return {
                imgUrl:require("../assets/logo.jpg"),
                center: {lng: 0, lat: 0},

                zoom: 16,
            }
        },
        methods: {
            Home(){
                this.$router.push('/')
            },
            go(){
                this.$router.push('/guide')
            },
            doctor(){
                this.$router.push('/doctor')
            },
            department(){
                this.$router.push('/department')
            },
            onSubmit() {
                console.log('submit!');
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handler({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 117.305577
                this.center.lat = 39.065843
                this.zoom = this.zoom
            }, getClickInfo(e) {
                console.log(e.point.lng)
                console.log(e.point.lat)
                this.center.lng = e.point.lng
                this.center.lat = e.point.lat

            }
        }

    }
</script>

<style scoped>
  /*@font-face {*/
  /*  font-family: 'webfont';*/
  /*  font-display: swap;*/
  /*  src: url('../css/webfont.eot'); !* IE9 *!*/
  /*  src: url('../css/webfont.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *! url('../css/webfont.woff2') format('woff2'),*/
  /*  url('../css/webfont.woff') format('woff'), !* chrome、firefox *! url('../css/webfont.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*! url('../css/webfont.svg#webfont') format('svg'); !* iOS 4.1- *!*/
  /*}*/

  /*.web-font {*/
  /*  font-family: "webfont" !important;*/
  /*  font-size: 30px;*/
  /*  font-style: normal;*/
  /*  padding-left: 20px;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*}*/
  .mapbox{
    margin-left: 60px;
    margin-top: 30px;
    width: 1500px;
    height: 200px;
  }
</style>
