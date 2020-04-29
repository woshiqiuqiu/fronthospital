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
                  <el-menu-item index="2-1" @click="go">就诊攻略</el-menu-item>
                  <el-menu-item index="2-2" @click="subscribe">预约挂号</el-menu-item>
                  <el-menu-item index="2-3">专家介绍</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">出诊信息</template>
                    <el-menu-item index="2-4-1" @click="department">科室总览</el-menu-item>
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
          <div class="col-md-12">
            <el-card class="box-card" style="padding: 20px">
              <div slot="header" class="clearfix">
                <span style="float: left;font-size: 25px">医生介绍</span>
                <el-button style="float: right; padding: 3px 0" type="text">详细</el-button>
              </div>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：丁云</br>
                      科室：第三门诊部正畸科</br>
                      职务：科主任</br>
                      职称：主治医师</br>
                      专长：舌侧隐形正畸治疗</br>无托槽隐形矫治技术</br>微种植支抗技术</br>青少年严重牙、颌、面畸形的矫治</br>
                      社会任职：第三门诊部党支部书记
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor14.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：晏莉</br>
                      科室：牙体牙髓科</br>
                      职称：主治医师</br>
                      专长：牙体牙髓常见病的诊断与治疗
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor4.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：高学军</br>
                      科室：牙体牙髓科</br>
                      职称：知名专家</br>
                      专长：疑难牙体牙髓病的诊断与治疗</br>
                      龋病的综合管理与治疗
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor5.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：岳林</br>
                      科室：牙体牙髓科</br>
                      职称：知名专家</br>
                      专长：疑难牙体牙髓病的诊断和治疗方案设计</br>
                      复杂根管问题的处理</br>牙体缺损的保存修复
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor6.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：董艳梅</br>
                      科室：牙体牙髓科</br>
                      职称：知名专家</br>
                      专长：牙体牙髓病的诊断与治疗</br>
                      擅长显微根管治疗技术</br>牙体缺损的直接修复技术
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor7.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：王泽泗</br>
                      科室：牙体牙髓科</br>
                      职称：知名专家</br>
                      专长：疑难牙体牙髓病的诊断与治疗</br>
                      心脏病患者监护下开髓
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor8.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：梁宇红</br>
                      科室：牙体牙髓科</br>
                      职称：知名专家</br>
                      专长：复杂疑难牙髓根尖周病诊治</br>
                      疑难根管治疗以及并发症处理
                    </h5>
                  </div>
                </el-button>
              </el-popover>
              <el-popover>
                <el-button slot="reference">
                  <div class="text item" style="width: 620px;height: 330px">
                    <img src="../assets/doctor/doctor9.jpg" style="height: 300px;width: 200px">
                    <h5 class="mt-0" style="float: right;text-align:left;margin-left: 10px;font-size: 18px">
                      姓名：王祖华</br>
                      科室：牙体牙髓科</br>
                      职称：主任医师</br>
                      专长：牙体牙髓病的综合诊治</br>
                      显微根尖手术
                    </h5>
                  </div>
                </el-button>
              </el-popover>
            </el-card>
          </div>
        </div>
      </div>
      <div style="height: 300px;margin-top: 40px;background:  #F0FFF0">
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
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                imgUrl:require("../assets/logo.jpg"),
                visible: false,
                tableData: [{
                    title: '乱收费',
                    name: '游客',
                    date: '2017-06-25',
                }, {
                    title: '牙齿正畸的大概费用',
                    name: '游客',
                    date: '2016-05-02',
                }, {
                    title: '补牙的费用',
                    name: '游客',
                    date: '2016-05-30',
                }, {
                    title: '种植牙价格',
                    name: '游客',
                    date: '2016-05-02',
                }]
            };
        },
        methods: {
            Home(){
                this.$router.push('/')
            },
            go(){
                this.$router.push('/guide')
            },
            subscribe(){
                this.$router.push('/subscribe')
            },
            login(){
                this.$router.push('/login')
            },
            register(){
                this.$router.push('/register')
            },
            department(){
                this.$router.push('/department')
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-demo{
    margin-top: 50px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-left: 20px;
    width: 1600px;
  }
</style>
