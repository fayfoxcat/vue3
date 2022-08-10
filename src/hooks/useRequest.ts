import { ref } from "vue"
import axios from 'axios'
export default function(url:string){
    const loading = ref(true)
    const data = ref(null)
    const errorMsg = ref('')

    axios.get(url).then(response=>{
        loading.value = false
        data.value = response.data
    }).catch(error=>{
        loading.value=false
        errorMsg.value = error.message||'未知错误'
    })
}