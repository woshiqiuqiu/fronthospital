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
                  <el-menu-item index="2-2">预约挂号</el-menu-item>
                  <el-menu-item index="2-3">专家介绍</el-menu-item>
                  <el-submenu index="2-4">
                    <template slot="title">出诊信息</template>
                    <el-menu-item index="2-4-1">科室总览</el-menu-item>
                    <el-menu-item index="2-4-2">电子病历</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="3">当前流程</el-menu-item>
                <el-menu-item index="4">诊室位置</a></el-menu-item>
                <el-menu-item index="5" style="margin-left: 80px"><i class="el-icon-user-solid" style="font-size: 40px;color: aliceblue;margin-top: 10px;margin-left: 200px"></i></el-menu-item>
                <el-submenu index="6">
                  <template slot="title"></template>
                  <el-menu-item index="6-1"  @click="person">个人中心</el-menu-item>
                  <el-menu-item index="6-2" @click="login">退出登陆</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </div>

        <div class="col-md-12" style="font-size: 20px">
          <div class="row">
            <div class="col-md-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" @click="appointment">在线预约</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="caseHistory">病历查看</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="process">当前进度</a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div>
                <h2 style="text-align: left">在线预约</h2>
              </div>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 60%;margin-left: 100px">
                <el-form-item label="预约人姓名">
                  <el-input v-model="ruleForm.appointmentName"></el-input>
                </el-form-item>
                <el-form-item label="预约科室">
                  <el-select v-model="ruleForm.appointmentDepartment" placeholder="请选择科室">
                    <el-option label="口腔修复科" value="xiufu"></el-option>
                    <el-option label="口腔正畸科" value="zhengji"></el-option>
                    <el-option label="牙体牙髓科" value="yasui"></el-option>
                    <el-option label="口腔种植科" value="zhongzhi"></el-option>
                    <el-option label="特诊科" value="tezheng"></el-option>
                    <el-option label="儿童口腔科" value="ertong"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="就诊时间" required>
                  <el-date-picker
                    v-model="ruleForm.appointmentTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    default-time="12:00:00">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="预约类型">
                  <el-radio-group v-model="ruleForm.appointmentType">
                    <el-radio label="初诊"></el-radio>
                    <el-radio label="复诊"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="备注">
                  <el-input type="textarea" v-model="ruleForm.appointmentRemarks"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>

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
                imgUrl:require("../../assets/logo.jpg"),
                visible: false,
                ruleForm: {
                    appointmentName: '',
                    appointmentDepartment: '',
                    appointmentTime: '',
                    appointmentType: '',
                    appointmentRemarks: ''
                },
                rules: {
                    appointmentName: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    appointmentDepartment: [
                        { required: true, message: '请选择科室', trigger: 'change' }
                    ],
                    appointmentType: [
                        { required: true, message: '请选择预约类型', trigger: 'change' }
                    ],
                    appointmentRemarks: [
                        { required: true, message: '请填写备注', trigger: 'blur' }
                    ]
                }
            };


        },
        methods: {
            Home(){
                this.$router.push('/')
            },
            person(){
                this.$router.push('/PatPerson')
            },
            login(){
                this.$router.push('/login')
            },
            appointment(){
                this.$router.push('/appointment')
            },
            caseHistory(){
                this.$router.push('/caseHistory')
            },
            process(){
                this.$router.push('/process')
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
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            submitForm() {
                let self = this;
                this.$http.post('/patient/saveAppointmentInfo', {
                    appointmentName: self.ruleForm.appointmentName,
                    appointmentDepartment: self.ruleForm.appointmentDepartment,
                    appointmentTime:self.ruleForm.appointmentTime,
                    appointmentType:self.ruleForm.appointmentType,
                    appointmentRemarks:self.ruleForm.appointmentRemarks,
                }).then(function (response) {
                    console.log("++++++++++")
                    console.log(response.status)
                    if (response.status ===200) {
                        self.$message({
                            message: '预约成功',
                            type: 'success'
                        });
                    } else {
                        self.$message({
                            message: '预约失败',
                            type: 'error'
                        });

                    }
                }).catch(function (error) {
                    console.log(error);
                });

                // this.$refs[formName].validate((valid) => {
                //     if (valid) {
                //         alert('submit!');
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
