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
                <el-menu-item index="1">网站首页</el-menu-item>
                <el-submenu index="2">
                  <template slot="title">服务项目</template>
                  <el-menu-item index="2-1" @click="go">就诊攻略</el-menu-item>
                  <el-menu-item index="2-2" @click="subscribe">预约挂号</el-menu-item>
                  <el-menu-item index="2-3"  @click="doctor">专家介绍</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">出诊信息</template>
                    <el-menu-item index="2-4-1" @click="department">科室总览</el-menu-item>
                    <el-menu-item index="2-4-2">电子病历</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">当前流程</el-menu-item>
                <el-menu-item index="4" @click="map">诊室位置</a></el-menu-item>
                <el-menu-item index="5" style="margin-left: 80px"><i class="el-icon-user-solid" style="font-size: 40px;color: aliceblue;margin-top: 10px;margin-left: 200px"></i></el-menu-item>
                <el-menu-item index="6" @click="login">登陆</a></el-menu-item>
                <el-menu-item index="7" @click="register">注册</a></el-menu-item>
              </el-menu>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="carousel slide" id="carousel-906357">
                <el-carousel indicator-position="outside">
                  <el-carousel-item>
                    <img src="../assets/lunbo1.jpg" class="carousel_image_type" style="width: 1700px;height: 300px;">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src="../assets/lunbo2.jpg" class="carousel_image_type" style="width: 1700px;height: 300px;">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src="../assets/lunbo4.jpg" class="carousel_image_type" style="width: 1700px;height: 350px;">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <el-divider content-position="center">就医指南</el-divider>
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card">
                        <img src="../assets/yuyue.jpg" class="carousel_image_type" style="width: 500px;height: 200px">
                        <div class="card-block">
                          <h5 class="card-title">
                            在线挂号预约
                          </h5>
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="预约号">
                              <el-input v-model="form.num"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人">
                              <el-input v-model="form.name"></el-input>
                              </el-col>
                            </el-form-item>
                            <el-form-item label="预约时间">
                              <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                              </el-col>
                              <el-col class="line" :span="2">-</el-col>
                              <el-col :span="11">
                                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                              </el-col>
                            </el-form-item>
                            <el-form-item label="预约科室">
                              <el-radio-group v-model="form.type">
                                <el-radio label="口腔修复科"></el-radio>
                                <el-radio label="口腔正畸科"></el-radio>
                                <el-radio label="牙体牙髓科"></el-radio>
                                <el-radio label="牙周粘膜科"></el-radio>
                                <el-radio label="口腔种植科" style="margin-top: 10px"></el-radio>
                                <el-radio label="特诊科"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="subscribe">立即预约</el-button>
                            </el-form-item>
                          </el-form>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img src="../assets/wangzhanliuyan.jpg" class="carousel_image_type" style="width: 500px;height: 200px">
                        <div class="card-block">
                          <h5 class="card-title">
                            留言信息
                          </h5>
                          <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                              prop="title"
                              label="主题">
                            </el-table-column>
                            <el-table-column
                              prop="name"
                              label="姓名"
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="date"
                              label="日期"
                              width="180">
                            </el-table-column>
                          </el-table>
                          <el-button type="primary" icon="el-icon-edit" circle style="margin-top: 30px"></el-button>去留言
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img src="../assets/jiankangchangshi.jpg" class="carousel_image_type" style="width: 500px;height: 200px">
                        <div class="card-block">
                          <h5 class="card-title">
                            健康常识
                          </h5>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="龋齿">
                            <el-button slot="reference" style="width: 110px">龋齿</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="口臭">
                            <el-button slot="reference" style="width: 110px">口臭</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙髓炎">
                            <el-button slot="reference" style="width: 110px">牙髓炎</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙龈炎">
                            <el-button slot="reference" style="width: 110px">牙龈炎</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="口腔溃疡">
                            <el-button slot="reference" style="width: 110px;margin-top: 10px">口腔溃疡</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="四环素牙">
                            <el-button slot="reference" style="width: 110px">四环素牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙齿矫正">
                            <el-button slot="reference" style="width: 110px">牙齿矫正</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="智齿冠周">
                            <el-button slot="reference" style="width: 110px">智齿冠周</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="就诊常识">
                            <el-button slot="reference" style="width: 110px;margin-top: 10px">就诊常识</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="烤瓷牙">
                            <el-button slot="reference" style="width: 110px">烤瓷牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="种植牙">
                            <el-button slot="reference" style="width: 110px">种植牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="拔牙">
                            <el-button slot="reference" style="width: 110px">拔牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="根管治疗">
                            <el-button slot="reference" style="width: 110px;margin-top: 10px">根管治疗</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙齿美白">
                            <el-button slot="reference" style="width: 110px">牙齿美白</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="活动义齿">
                            <el-button slot="reference" style="width: 110px">活动义齿</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙周病">
                            <el-button slot="reference" style="width: 110px">牙周病</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="补牙">
                            <el-button slot="reference" style="width: 110px;margin-top: 10px">补牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="洗牙">
                            <el-button slot="reference" style="width: 110px">洗牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="夜磨牙">
                            <el-button slot="reference" style="width: 110px">夜磨牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="牙齿松动">
                            <el-button slot="reference" style="width: 110px">牙齿松动</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="蛀牙">
                            <el-button slot="reference" style="width: 110px;margin-top: 10px">蛀牙</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="儿童牙病">
                            <el-button slot="reference" style="width: 110px">儿童牙病</el-button>
                          </el-popover>
                          <el-popover
                            placement="top-start"
                            width="110"
                            trigger="hover"
                            content="孕妇口腔健康">
                            <el-button slot="reference" style="width: 130px">孕妇口腔健康</el-button>
                          </el-popover>
                          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-divider content-position="center">专家介绍</el-divider>
          <el-col :span="6" >
            <el-card shadow="hover"style="width: 300px;height: 300px;">
              <img src="../assets/yisheng1.jpg" style="width: 200px;height: 300px;">
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover"style="width: 300px;height: 300px;">
              <img src="../assets/yisheng2.jpg" style="width: 200px;height: 300px;">
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover"style="width: 300px;height: 300px;">
              <img src="../assets/yisheng3.jpg" style="width: 200px;height: 300px;">
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover"style="width: 300px;height: 300px;">
              <img src="../assets/yisheng4.jpg" style="width: 200px;height: 300px;">
            </el-card>
          </el-col>

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
                radio: '1',
                activeIndex: '1',
                activeIndex2: '1',
                imgUrl:require("../assets/logo.jpg"),
                visible: false,
                form: {
                    num: '',
                    name: '',
                    sex: '',
                    date1: '',
                    date2: '',
                    type: ''
                },
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
            go(){
                this.$router.push('/guide')
            },
            map(){
                this.$router.push('/map')
            },
            login(){
                this.$router.push('/login')
            },
            register(){
                this.$router.push('/register')
            },
            subscribe(){
                this.$router.push('/subscribe')
            },
            doctor(){
                this.$router.push('/doctor')
            },
            department(){
                this.$router.push('/department')
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            subscribe(){
                this.$router.push('/subscribe')
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
</style>
