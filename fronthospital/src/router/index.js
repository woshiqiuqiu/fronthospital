import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Guide from '@/components/Guide'
import Subscribe from '@/components/Subscribe'
import Doctor from '@/components/Doctor'
import Map from '@/components/Map'
import Login from '@/components/Login'
import Register from '@/components/Register'
import adminHome from '@/components/AdminHome'
import department from '@/components/Department'
import doctorInfo from '../views/admin/DoctorInfo'
import patientInfo from '../views/admin/PatientInfo'
import mdeRec from '../views/admin/MedicalRecord'
import medRecCard from '../views/doctor/MedicalRecordCard'
import scheduling from '../views/doctor/Scheduling'
import appointment from '../views/patient/Appointment'
import person from '../views/admin/Person'
import docPerson from '../views/doctor/DocPerson'
import appointmentInfo from '../views/doctor/AppointmentInfo'
import patPerson from '../views/patient/PatPerson'
import process from '../views/patient/Process'
import caseHistory from '../views/patient/CaseHistory'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: '/doctor',
      name: 'Doctor',
      component: Doctor
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component : Register
    },
    {
      path: '/adminHome',
      name: 'AdminHome',
      component : adminHome
    },
    ,
    {
      path: '/department',
      name: 'Department',
      component : department
    },
    {
      path:'/doctorInfo',
      name: 'DoctorInfo',
      component : doctorInfo
    },
    {
      path:'/patientInfo',
      name: 'PatientInfo',
      component : patientInfo
    },
    {
      path:'/mdeRec',
      name: 'MedicalRecord',
      component : mdeRec
    },
    {
      path:'/medRecCard',
      name: 'MedicalRecordCard',
      component : medRecCard
    },
    {
      path:'/scheduling',
      name: 'Scheduling',
      component : scheduling
    },
    {
      path:'/appointment',
      name: 'Appointment',
      component : appointment
    },
    {
      path:'/person',
      name: 'Person',
      component : person
    },
    {
      path:'/docPerson',
      name: 'DocPerson',
      component : docPerson
    },
    {
      path:'/patPerson',
      name: 'PatPerson',
      component : patPerson
    },
    {
      path:'/process',
      name: 'Process',
      component : process
    },
    {
      path:'/caseHistory',
      name: 'CaseHistory',
      component : caseHistory
    },
    {
      path:'/appointmentInfo',
      name:'AppointmentInfo',
      component: appointmentInfo
    }
  ]
})

// import Vue from 'vue' //引入 Vue
// import VueRouter from 'vue-router' //引入 Vue 路由
//
// Vue.use(VueRouter); //安装插件
//
// export const constantRouterMap = [
//   //配置默认的路径，默认显示登录页
//   { path: '/', component: () => import('@/views/login')},
//
//   //配置登录成功页面，使用时需要使用 path 路径来实现跳转
//   { path: '/success', component: () => import('@/views/success')},
//
//   //配置登录失败页面，使用时需要使用 path 路径来实现跳转
//   { path: '/error', component: () => import('@/views/error'), hidden: true }
// ]
//
// export default new VueRouter({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap //指定路由列表
// })
