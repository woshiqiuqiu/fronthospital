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
        </div>
        <div class="col-md-12" style="margin-top: 20px">
          <div class="row">
            <div class="col-md-12">
              <el-tabs :tab-position="tabPosition" style="height: 200px;margin-left: 200px;font-size: 20px">
                <el-tab-pane label="就诊须知">
                  <el-row :gutter="20">
                    <el-col :span="16"><div class="grid-content bg-purple" style="margin-left: 250px">
                      牙周科“全预约”新诊区预约须知
                      牙周病是口腔专科最为常见的疾病，没有之一。90%的成年人都患有或曾患过不同程度的牙周疾病。况且，日常的口腔保健（如洗牙）、定期维护口腔健康也都在牙周科。
                      因此，牙周科的潜在就诊群体是如何庞大就可想而知了。牙周科就成为各家口腔医院难挂号的科室之一。
                      为满足更多患者的就诊需求，北京大学口腔医院牙周科开辟了“全预约”的新诊区。对，新诊区，还全部都是预约可得！
                      新诊区位于市中心的西城区（西四路口向东500米），设有诊椅17台，还设有牙周门诊手术诊室和口腔卫生指导室，由总院专家和医师接诊（出诊医师名单附后）。
                      为了您的口腔健康，维护好牙周健康这一环必不可少！还等什么？约吗？
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  </el-row>
                  </el-tab-pane>
                <el-tab-pane label="联系我们">
                  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 300px;width: 600px">
                    <el-tab-pane label="电话" name="first">电话：(0411)86571657</el-tab-pane>
                    <el-tab-pane label="邮箱" name="second">邮箱</el-tab-pane>
                    <el-tab-pane label="地址" name="third">地址：大连市甘井子区山东路商城225号</el-tab-pane>
                    <el-tab-pane label="路线" name="fourth">路线</el-tab-pane>
                  </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="医院布局">医院布局</el-tab-pane>
                <el-tab-pane label="在线查询"><i class="el-icon-chat-dot-round"></i></el-tab-pane>
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
                activeName: 'second',
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
            department(){
                this.$router.push('/department')
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
            },
            handleClick(tab, event) {
                console.log(tab, event);
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
