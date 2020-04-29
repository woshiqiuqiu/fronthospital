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
                <h2 style="text-align: left">排班表</h2>
              </div>
              <el-row>
                <el-card>
                  <el-input v-model="department_name" placeholder="请输入科室" style="width: 200px"></el-input>
                  <el-button type="primary" style="margin-left: 20px" @click="get_list">查找</el-button>
                </el-card>
              </el-row>
              <el-table
                :data="list"
                style="width: 100%">
                <el-table-column
                  prop="departmentName"
                  label="科室">
                </el-table-column>
                <el-table-column
                  prop="doctorName"
                  label="医生姓名">
                </el-table-column>
                <el-table-column
                  prop="one"
                  label="周一">
                </el-table-column>
                <el-table-column
                  prop="two"
                  label="周二">
                </el-table-column>
                <el-table-column
                  prop="three"
                  label="周三">
                </el-table-column>
                <el-table-column
                  prop="four"
                  label="周四">
                </el-table-column>
                <el-table-column
                  prop="five"
                  label="周五">
                </el-table-column>
                <el-table-column
                  prop="six"
                  label="周六">
                </el-table-column>
                <el-table-column
                  prop="seven"
                  label="周日">
                </el-table-column>
              </el-table>

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
                list:[],
                formLabelWidth: '120px',
                input:''
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
                this.$router.push('/docPerson')
            },
            login(){
                this.$router.push('/login')
            },
            medRecCard(){
                this.$router.push('/medRecCard')
            },
            scheduling(){
                this.$router.push('/scheduling')
            },
            appointmentInfo(){
                this.$router.push('/appointmentInfo')
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
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            get_list: async function () {
                let self = this;
                let {data} = await this.$http.get('/doctor/getPaiBanOneInfo',this.params)
                console.log(data)
                self.list = data
                console.log(self.list)
                // self.total = data.total
            },
            handleCurrentChange(v) {
                this.currentPage = v;
                this.get_list();
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
