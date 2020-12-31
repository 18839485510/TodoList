import {LOAD_ITEM} from './types'
const mutations={
    [LOAD_ITEM](state,payload){
        state.list = payload
    },
    addItem(state,payload){
        state.list.push(payload)
    },
    delItem(state,payload){
        const list = state.list.filter(item=>item.id != payload)
        state.list = list 
    },
}
export default mutations