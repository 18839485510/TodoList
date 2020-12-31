import axios from "axios";
import {LOAD_ITEM} from './types'
const actions = {
    async [LOAD_ITEM](obj){
        const result = await axios.get('http://127.0.0.1:3000')
        obj.commit(LOAD_ITEM,result.data)
    }
}
export default actions