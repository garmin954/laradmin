const reloadpage ={
    state:{
        showrouter: true,//存放所有浏览过的且不重复的路由数据
    },
    mutations:{//这
        CHANGE_VIEW:(state,view)=>{//修改状态
            // if(state.showrouter.some(v=>v.path==view.path))return;
            state.showrouter = view; 
            
        },
    },
    actions:{//调用这里去触发mutations，如何调用？在组件内使用this.$store.dispatch('action中对应名字', 参数)
        changeShow({ commit }, view) {
            commit('CHANGE_VIEW', view)
        }
    }
}

export default reloadpage
