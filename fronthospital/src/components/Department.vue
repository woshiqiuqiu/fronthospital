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
                <el-menu-item index="4" @click="map">诊室位置</a></el-menu-item>
                <el-menu-item index="5" style="margin-left: 80px"><i class="el-icon-user-solid" style="font-size: 40px;color: aliceblue;margin-top: 10px;margin-left: 200px"></i></el-menu-item>
                <el-menu-item index="6" @click="login">登陆</a></el-menu-item>
                <el-menu-item index="7" @click="register">注册</a></el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>
        <div class="col-md-12" style="margin-top: 20px">
          <div class="row">
            <div class="col-md-12">
              <el-tabs :tab-position="tabPosition" style="height: 300px;margin-left: 200px;font-size: 20px">
                <el-tab-pane label="常规科室">
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔修复科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>口腔正畸科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>牙体牙髓科
                    </div></el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>牙周粘膜科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>口腔种植科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔颌面外科
                    </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>颞颌关节科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>特诊科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>儿童口腔科
                    </div></el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔预防保健科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>义齿制作部
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>放射科
                    </div></el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>红专路门诊部
                    </div></el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="重点科室">
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔修复科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>口腔正畸科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>牙体牙髓科
                    </div></el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>牙周粘膜科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>口腔种植科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔颌面外科
                    </div>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>颞颌关节科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>特诊科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="特色专科">
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>口腔修复科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>口腔正畸科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>牙体牙髓科
                    </div></el-col>
                  </el-row>
                  <el-row type="flex" class="row-bg" justify="space-around" style="margin-top: 10px">
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>唇腭裂治疗中心
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                      <i class="el-icon-office-building"></i>颞颌关节科
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                      <i class="el-icon-office-building"></i>	儿童口腔科
                    </div></el-col>
                  </el-row>
                </el-tab-pane>
              </el-tabs>
            </div>
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
                tabPosition: 'left',
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
            subscribe(){
                this.$router.push('/subscribe')
            },
            doctor(){
                this.$router.push('/doctor')
            },
            login(){
                this.$router.push('/login')
            },
            register(){
                this.$router.push('/register')
            },
            map(){
                this.$router.push('/map')
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            onSubmit() {
                console.log('submit!');
            },
            formLabelAlign:function () {
                this.name = this.name.replace(/[ `~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '')
            },
            /**
             * 失去焦点
             * */
            blur:function () {
                if (this.name.length <= 0) {
                    pang.msg = '<span style="color: red">用户名不能为空</span>'
                } else {
                    axios.post('/user/select',{
                        name : this.name,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}   //跨域
                    }).then(function (dat){
                        if (dat.data == "0"){
                            pang.msg = '<span style="color: green">用户名可用</span>'
                        }
                        else if (dat.data == "1")
                            pang.msg = '<span style="color: red">用户名已存在</span>'
                    })
                }
            },
            /**
             * 获取焦点
             * */
            focus:function () {
                pang.msg = null
            },
            /**
             * 点击注册按钮事件
             * */
            register:function () {
                if (this.name.length <= 0) {
                    alert("用户名不能为空")
                } else if (this.password.length <= 0) {
                    alert("密码不能为空")
                } else {
                    axios.post('/user/addUser', {
                        name: this.name,
                        password: this.password,
                        email:this.email,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}   //跨域
                    }).then(function (dat) {
                        if (dat.data == '1') {
                            window.location.href = '/user/successRegister'
                        } else {
                            alert("注册失败")
                        }

                    })
                }
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
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
