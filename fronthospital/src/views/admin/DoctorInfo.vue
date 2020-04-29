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
                  <a class="nav-link" @click="doctorInfo">医生信息管理</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="patientInfo">患者信息管理</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="mdeRec">电子病历管理</a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div>
                <h2 style="text-align: left">医生信息管理</h2>
              </div>
              <el-row>
                <el-card>
                  <el-input v-model="department_name" placeholder="请输入科室" style="width: 200px"></el-input>
                  <el-input v-model="doctor_name" placeholder="请输入姓名" style="width: 200px"></el-input>
                  <el-button type="primary" style="margin-left: 20px" @click="get_list">查找</el-button>
                </el-card>
              </el-row>
              <el-row>
                <el-table
                  :data="list"
                  style="width: 100%">
<!--                  <el-table-column-->
<!--                    prop="doctorId"-->
<!--                    label="编号">-->
<!--                  </el-table-column>-->
                  <el-table-column
                    prop="doctorName"
                    label="姓名">
                  </el-table-column>
                  <el-table-column
                    prop="doctorSex"
                    label="性别">
                  </el-table-column>
                  <el-table-column
                    prop="departmentName"
                    label="所属科室">
                  </el-table-column>
                  <el-table-column
                    prop="telphone"
                    label="电话">
                  </el-table-column>
                  <el-table-column
                    prop="idCard"
                    label="身份证号">
                  </el-table-column>
                  <el-table-column label="删除">
                    <template slot-scope="scope">
                      <el-button type="danger" icon="el-icon-delete" circle size="mini"
                                 @click="handleDelete(scope.row)"></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
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
    import {isUndefined} from "element-ui";

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
                list:[],
                department_name:undefined,
                doctor_name:undefined
            };

        },
        created: function () {

        },
        mounted: function () {
            this.get_list();
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
            doctorInfo(){
                this.$router.push('/doctorInfo')
            },
            patientInfo(){
                this.$router.push('/patientInfo')
            },
            mdeRec(){
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
            handleEdit(index, row) {
                console.log(index, row);
            },
            get_list: async function () {
                let self = this;
                let params ={
                    departmentName:this.department_name,
                    doctorName: this.doctor_name
                }
                let {data} = await this.$http.get("/admin/getDoctorInfo",{
                  'params': params
                })
                self.list = data
                console.log(self.list)
                // self.total = data.total
            },
            handleCurrentChange(v) {
                // this.currentPage = v;
                this.get_list();
            },
            handleDelete: async function (item) {
                let self = this;
                this.$confirm('此操作将删除该医生, 是否删除?', '提示', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'info'
                }).then(async () => {
                    let that = this
                    this.$http.post('/admin/removeDoctorInfo',{doctorId:item.doctorId}).then(
                        function (obj){
                            that.$message({
                                showClose: true,
                                message: '删除成功',
                                type: 'success'
                            });
                            self.get_list();
                        },
                        function (err){
                            that.$message({
                                showClose: true,
                                message: data.msg,
                                type: data.code
                            });
                        }
                    )
                }).catch(() => {

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
