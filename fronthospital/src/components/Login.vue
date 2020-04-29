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

        <div class="col-md-12">
          <div class="background" :model="form">
            <a style="margin: 20px auto;font-size: 30px">登陆</a>
            <p>
              <a>
                账号：
              </a>
              <input style="text-align:center;margin:40px auto 0;width: 180px" type="text" placeholder="账号" v-model="form.name">

            </p>
            <p>
              <a>
                密码：
              </a>
              <input style="text-align:center;margin:20px auto;;width: 180px" type="password" placeholder="密码" v-model="form.password">

            </p>
            <p>
              <a>
                身份：
              </a>
              <select name="select01" id="selectRole" v-model="form.selected" @change='getRole'>
                <option value="0">管理员</option>
                <option value="1">医生</option>
                <option value="2">患者</option>

              </select>
              <!--<select  style="width: 180px" name="yourName" id="yourId">-->
              <!--<option value="1">患者</option>-->
              <!--<option value="2">管理员</option>-->
              <!--<option value="3">医生</option>-->
              <!--<option value="4">药师</option>-->
              <!--</select>-->
            </p>
            <button type="button"  style="width: 260px;margin: 70px auto 0;background-color: #00EE76" class="btn btn-primary btn-block" @click="go">登陆</button>


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
        name: "workerlogin",
        data() {
            return {
                tabPosition: 'left',
                activeIndex: '1',
                activeIndex2: '1',
                imgUrl:require("../assets/logo.jpg"),
                visible: false,
                optionList: [ '管理员','医生', '患者'],
                form:{
                    name:'',
                    password:'',
                    selected: '',
                },


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

            },
            register(){
                this.$router.push('/register')
            },

            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getRole(){
                var selects = document.getElementById("selectRole");
                var indexs = selects.selectedIndex;  //选中项的索引
                console.log('您选择了'+ selects.options[indexs].value)
            },
            go() {
                let self = this;
                this.$http.post('/user/login', {
                    name: self.form.name,
                    password: self.form.password,
                    role:self.form.selected,
                }).then(function (response) {
                    console.log("++++++++++")
                    console.log(response.status)
                    console.log(self.form.selected)
                    if (response.status ===200) {
                        self.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                        if(self.form.selected==0){
                            self.$router.push('./doctorInfo');
                        }else if(self.form.selected==1){
                            self.$router.push('./scheduling');
                        }else{
                            self.$router.push('./appointment');
                        }
                    } else {
                        self.$message({
                            message: '登录失败',
                            type: 'error'
                        });

                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            // go:function () {
            //     switch (this.selected) {
            //
            //         case "管理员":
            //             this.$router.push('./adminHome');
            //             break;
            //         case "医生":
            //             this.$router.push('./scheduling');
            //             break;
            //         case "患者":
            //             this.$router.push('./appointment');
            //             break;
            //     };

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
