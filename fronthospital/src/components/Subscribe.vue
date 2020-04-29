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
                  <el-menu-item index="2-2">预约挂号</el-menu-item>
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
            <div class="col-md-3" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
              <h3>就诊指南</h3>
              <ul>
                <li class="list-item" style="font-size: 16px">医院实行全年无假日门诊</li>
                <li class="list-item" style="font-size: 16px">上 午：08：00—12：00</li>
                <li class="list-item" style="font-size: 16px">午间门诊：12：00—14：30</li>
                <li class="list-item" style="font-size: 16px">下午门诊：14：30--19：00</li>
                <li class="list-item" style="font-size: 16px">夜间门诊：19：00—08：00</li>
              </ul>
              <el-carousel height="400px" direction="vertical" :autoplay="false" style="margin-top: 20px">
                <el-carousel-item>
                  <img src="../assets/yisheng1.jpg" style="width: 250px;height: 350px;margin-top: 20px">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/yisheng2.jpg" style="width: 250px;height: 350px;margin-top: 20px">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/yisheng3.jpg" style="width: 250px;height: 350px;margin-top: 20px">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/yisheng4.jpg" style="width: 250px;height: 350px;margin-top: 20px">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="col-md-5">
              <h3>在线预约挂号</h3>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="预约号">
                  <el-input v-model="form.num"></el-input>
                </el-form-item>
                <el-form-item label="会员卡号">
                  <el-switch v-model="form.vip"></el-switch>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-col :span="11">
                    <el-input v-model="form.name"></el-input>
                  </el-col>
                  <el-col class="line" :span="2">性别</el-col>
                  <el-col :span="11">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                      <el-option label="男" value="male"></el-option>
                      <el-option label="女" value="female"></el-option>
                    </el-select>
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
                <el-form-item label="联系电话">
                  <el-input v-model="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="联系地址">
                  <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="留言">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="text" @click="open">立即创建</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="col-md-4">
              <el-tabs type="border-card">
                <el-tab-pane label="科室设置">科室设置</el-tab-pane>
                <ul class="list-unstyled">
                  <li class="list-item" style="text-align: left;font-size: 20px">
                    重点科室
                  </li>
                  <li class="list-item" style="font-size: 14px">
                    口腔修复科 口腔正畸科 牙体牙髓科
                  </li>
                  <li class="list-item" style="text-align: left;font-size: 20px">
                    常规科室
                  </li>
                  <li class="list-item" style="font-size: 14px">
                    口腔修复科 口腔正畸科 牙体牙髓科 牙周粘膜科
                  </li>
                  <li class="list-item" style="font-size: 14px">
                    口腔种植科 口腔颌面外科 颞颌关节科 	特诊科
                  </li>
                </ul>
              </el-tabs>
              <el-tabs type="border-card">
                <el-tab-pane label="健康教育">健康教育</el-tab-pane>
                <ul class="list-unstyled">
                  <li class="list-item" style="text-align: left;font-size: 16px">
                    儿童牙齿稀疏是病吗？
                  </li>
                  <el-divider content-position="right">13年11月08日</el-divider>
                  <li class="list-item" style="text-align: left;font-size: 16px">
                    镶全口牙的流程与时间间隔
                  </li>
                  <el-divider content-position="right">	13年11月07日</el-divider>
                  <li class="list-item" style="text-align: left;font-size: 16px">
                    口腔溃疡反反复复要注意
                  </li>
                  <el-divider content-position="right">13年11月05日</el-divider>
                  <li class="list-item" style="text-align: left;font-size: 16px">
                    口腔疾病该怎样正确挂号？
                  </li>
                  <el-divider content-position="right">13年11月04日</el-divider>
                  <li class="list-item" style="text-align: left;font-size: 16px">
                    洗牙后会引起牙齿过敏吗？
                  </li>
                  <el-divider content-position="right">	13年11月02日</el-divider>
                </ul>
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
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        callback();
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return {
                form: {
                    num: '',
                    vip: '',
                    name: '',
                    sex: '',
                    date1: '',
                    date2: '',
                    type: '',
                    tel: '',
                    address: '',
                    desc: ''
                },
                activeIndex: '1',
                activeIndex2: '1',
                imgUrl:require("../assets/logo.jpg"),
                visible: false,
                ruleForm: {
                    name: '',
                    pass: ''
                },
                formLabelAlign: {
                    name: '',
                    pass: '',
                    email: ''
                },
                rules: {
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
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
            open() {
                this.$alert('请先登录', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `请登录`,
                        });
                    }
                });
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
  .el-carousel__item h3 {
    color: #F0FFF0;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #F0FFF0;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #F0FFF0;
  }
</style>
