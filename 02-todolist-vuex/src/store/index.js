import Vue from "vue"
import Vuex from "vuex"
import home from '../pages/home/store'
import todolist from '../pages/todolist/store'

//安装vuex

Vue.use(Vuex)

//创建store

const store = new Vuex.Store({
    modules:{
        todolist,home
    }
})

//导出store

export default store