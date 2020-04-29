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
                  <a class="nav-link" @click="scheduling">排班表</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="medRecCard">电子病历</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="appointmentInfo">患者预约</a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div>
                <h2 style="text-align: left">电子病历信息管理</h2>
              </div>
              <div class="col-md-12">
                <h3 class="text-center">
                  入院记录
                </h3>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="科室">
                    <select name="select01" id="selectDepartment" v-model="form.selected" @change='getDepartment' style="width: 200px;height: 30px">
                      <option value="1">牙体牙髓科</option>
                      <option value="2">牙周科</option>
                      <option value="3">儿童口腔科</option>
                      <option value="4">口腔颌面外科</option>
                      <option value="5">口腔病理科</option>
                      <option value="6">医学影像科</option>
                      <option value="7">口腔修复科</option>
                      <option value="8">口腔正畸科</option>
                      <option value="9">口腔预防保健科</option>
                      <option value="10">口腔黏膜科</option>
                      <option value="11">检验科</option>
                      <option value="12">药剂科</option>
                      <option value="13">口腔种植科</option>
                      <option value="14">综合治疗科</option>
                      <option value="15">特诊科</option>

                    </select>
<!--                  <el-select id="selectDepartment" v-model="form.selected" placeholder="请选择科室" @change='getDepartment'>-->
<!--                    <el-option label="牙体牙髓科" value="1"></el-option>-->
<!--                    <el-option label="牙周科" value="2"></el-option>-->
<!--                    <el-option label="儿童口腔科" value="3"></el-option>-->
<!--                    <el-option label="口腔颌面外科" value="4"></el-option>-->
<!--                    <el-option label="口腔病理科" value="5"></el-option>-->
<!--                    <el-option label="医学影像科" value="6"></el-option>-->
<!--                    <el-option label="口腔修复科" value="7"></el-option>-->
<!--                    <el-option label="口腔正畸科" value="8"></el-option>-->
<!--                    <el-option label="口腔预防保健科" value="9"></el-option>-->
<!--                    <el-option label="口腔黏膜科" value="10"></el-option>-->
<!--                    <el-option label="检验科" value="11"></el-option>-->
<!--                    <el-option label="药剂科" value="12"></el-option>-->
<!--                    <el-option label="口腔种植科" value="13"></el-option>-->
<!--                    <el-option label="综合治疗科" value="14"></el-option>-->
<!--                    <el-option label="特诊科" value="15"></el-option>-->
<!--                  </el-select>-->
                  </el-form-item>
                  <el-form-item label="患者姓名">
                    <el-input v-model="form.name" style="width: 200px"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-input v-model="form.sex" style="width: 200px"></el-input>
                  </el-form-item>
                  <el-form-item label="年龄">
                    <el-input v-model="form.age" style="width: 200px"></el-input>
                  </el-form-item>
                  <el-form-item label="入院时间">
                    <el-date-picker
                      v-model="form.time"
                      type="datetime"
                      placeholder="选择日期时间"
                      default-time="12:00:00">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="主诉">
                    <el-input v-model="form.chiefComplaint"></el-input>
                  </el-form-item>
                  <el-form-item label="疾病史">
                    <el-input v-model="form.historyOfDisease"></el-input>
                  </el-form-item>
                  <el-form-item label="传染史">
                    <el-input v-model="form.historyOfInfection"></el-input>
                  </el-form-item>
                  <el-form-item label="过敏史">
                    <el-input v-model="form.allergyHistory"></el-input>
                  </el-form-item>
                  <el-form-item label="现病史">
                    <el-input v-model="form.HistoryOfPresentIllness"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div>
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
                dialogFormVisible: false,
                formLabelWidth: '120px',
                form: {
                    selected:'',
                    name: '',
                    sex: '',
                    age: '',
                    time: '',
                    chiefComplaint: '',
                    HistoryOfPresentIllness: '',
                    historyOfDisease: '',
                    historyOfInfection: '',
                    allergyHistory: ''
                }
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
            person(){
                this.$router.push('/person')
            },
            login(){
                this.$router.push('/login')
            },
            medRecCard(){
                this.$router.push('/medRecCard')
            },
            appointmentInfo(){
                this.$router.push('/appointmentInfo')
            },
            scheduling(){
                this.$router.push('/scheduling')
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
            getDepartment(){
                var selects = document.getElementById("selectDepartment");
                var indexs = selects.selectedIndex;  //选中项的索引
                console.log('您选择了'+ selects.options[indexs].value)
            },
            onSubmit() {
                let self = this;
                this.$http.post('/doctor/doc', {
                    departmentId: self.form.selected,
                    name: self.form.name,
                    sex:self.form.sex,
                    age:self.form.age,
                    time:self.form.time,
                    chiefComplaint: self.form.chiefComplaint,
                    HistoryOfPresentIllness: self.form.HistoryOfPresentIllness,
                    historyOfDisease:self.form.historyOfDisease,
                    historyOfInfection:self.form.historyOfInfection,
                    allergyHistory: self.form.allergyHistory
                }).then(function (response) {
                    console.log("++++++++++")
                    console.log(response.status)
                    if (response.status ===200) {
                        self.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                    } else {
                        self.$message({
                            message: '保存失败',
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
</style>
