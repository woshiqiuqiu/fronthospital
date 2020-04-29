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
                <el-menu-item index="7">注册</a></el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="bkg">
            <div style="width: auto;">
              <a style="font-size: 30px;margin: 10px 40px">注册</a>
            </div>
            <div style="margin-top: 50px" class="row">
              <div class="col-md-5" style="text-align: right">
                <p style="height: 40px">
                  请输入您的姓名：
                </p>
                <p style="height: 40px">
                  请输入您的性别：
                </p>
                <p style="height: 40px">
                  请输入您的年龄：
                </p>
                <p style="height: 40px">
                  请输入您的省份证号：
                </p>
                <p style="height: 40px">
                  请输入您的地址：
                </p>
                <p style="height: 40px">
                  请输入手机号：
                </p>
                <p style="height: 40px">
                  设置密码：
                </p>
                <p style="height: 40px">
                  确认密码：
                </p>
                <p style="height: 40px">
                  您的身份：
                </p>
                <p style="height: 40px">
                  工作部门：
                </p>
              </div>

              <div class="col-md-7":model="form">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.name" type="text" placeholder="姓名">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.sex" type="text" placeholder="性别">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.age" type="text" placeholder="年龄">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.idCard" type="text" placeholder="身份证号">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.address" type="text" placeholder="地址">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" v-model="form.telphone" type="text" placeholder="手机号">
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input id="inputpsw1" style=";text-align:center;margin:0 auto" type="password" v-model="form.password" placeholder="密码">
                        <img  style="margin-left: 30px" id="pswimg1" @click="hideShowPsw()" src="../assets/visible.png">

                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <input style=";text-align:center;margin:0 auto" type="password" placeholder="确认密码">

                      </p>
                  </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <select name="select02" id="selectRole" v-model="form.checked" @change='getRole'>
                          <option value="1">本院工作者</option>
                          <option value="2">患者</option>
                        </select>
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="grid-content bg-purple">
                      <p style="height: 40px">
                        <select name="select01" id="selectDepartment" v-model="form.selected" @change='getDepartment'>
                          <option value="1">牙体牙髓科</option>
                          <option value="2">牙周科</option>
                          <option value="3">儿童口腔科</option>
                          <option value="4">口腔颌面外科</option>
                          <option value="5">口腔病理科</option>
                          <option value="6">医学影像科</option>
                          <option value="7">医学影像科</option>
                          <option value="8">口腔正畸科</option>
                          <option value="9">口腔预防保健科</option>
                          <option value="10">口腔黏膜科</option>
                          <option value="11">检验科</option>
                          <option value="12">药剂科</option>
                          <option value="13">口腔种植科</option>
                          <option value="14">综合治疗科</option>
                          <option value="15">特诊科</option>
                        </select>
                      </p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>


            <div style="width: 700px; height: 200px; border-style: outset;background:#fffff7;margin: 20px auto">
              <div class="row">
                <div class="col-md-6">
                  <p style="margin-left: 10px; margin-top:10px;height: 20px ;tab-size: 50px;font-style:italic">您的信息卡</p>


                  <p style="margin-left: 10px;margin-top: 40px">姓名：{{form.name}}</p>
                  <p style="margin-left: 10px;">密码：{{form.password}}</p>

                </div>
                <div class="col-md-6">
                  <p style="margin-top: 70px">手机号：{{form.telphone}}</p>
                  <p>身份证号：{{form.idCard}}</p>
                </div>

              </div>

            </div>

            <div style="width: 700px;text-align: center;margin: 20px auto">
              <button class="btn btn-primary btn-block" @click="sucgo">立即注册</button>
            </div>
          </div>
        </div>

      </div>
      <div style="height: 300px;background:  #F0FFF0">
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
        name: "register",
        data() {
            return {
                tabPosition: 'left',
                activeIndex: '1',
                activeIndex2: '1',
                imgUrl:require("../assets/logo.jpg"),
                visible: false,
                selected: '',
                disabled: false,
                time: 0,
                form:{
                    name: '',
                    sex:'',
                    age:'',
                    idCard:'',
                    address:'',
                    phone: '',
                    password: '',
                    checked: '',
                    selected:'',
                },

            };
        },
        methods: {
            Home() {
                this.$router.push('/')
            },
            subscribe() {
                this.$router.push('/subscribe')
            },
            doctor() {
                this.$router.push('/doctor')
            },
            person() {
                this.$router.push('/person')
            },
            login() {
                this.$router.push('/login')
            },
            doctorInfo() {
                this.$router.push('/doctorInfo')
            },
            patientInfo() {
                this.$router.push('/patientInfo')
            },
            mdeRec() {
                this.$router.push('/mdeRec')
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
            hideShowPsw: function () {
                if (inputpsw1.type == "password") {
                    inputpsw1.type = "text";
                    pswimg1.src = "../assets/invisible";
                } else {
                    inputpsw1.type = "password";
                    pswimg1.src = "../assets/visible.png";
                }
            },
            getRole(){
                var selects = document.getElementById("selectRole");
                var indexs = selects.selectedIndex;  //选中项的索引
                console.log('您选择了'+ selects.options[indexs].value)
            },
            getDepartment(){
                var selects = document.getElementById("selectDepartment");
                var indexs = selects.selectedIndex;  //选中项的索引
                console.log('您选择了'+ selects.options[indexs].value)
            },
            sucgo: function () {
                let self = this;
                this.$http.post('/user/register', {
                    name: self.form.name,
                    password: self.form.password,
                    age: self.form.age,
                    sex: self.form.sex,
                    role: self.form.checked,
                    address: self.form.address,
                    telphone: self.form.telphone,
                    idCard: self.form.idCard,
                    departmentId:self.form.selected,
                }).then(function (response) {
                    console.log("++++++++++")
                    console.log(response.status)
                    if (response.status ===200) {
                        self.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        this.$router.push('./login');
                    } else {
                        self.$message({
                            message: '注册失败',
                            type: 'error'
                        });

                    }
                }).catch(function (error) {
                    console.log(error);
                });
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
  .bkg{
    width: 100%;
    height: 1000px;
    margin: 0 auto;

  }
</style>
