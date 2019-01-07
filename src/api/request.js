import axios from 'axios'
import { ROOT_URL } from '../myConfig'

axios.defaults.withCredentials = true // 让ajax携带cookie

const service = axios.create({
    baseURL: ROOT_URL,
    timeout: 5000
})

//后端直接标识浏览器（估计是ip),所以不用在头部带TOKEN
// service.interceptors.request.use( config => {

// })

service.interceptors.response.use( res => {
    let data = res.data
    if( data.status !== 200)
        return Promise.reject('error')
    else
        return res 
}, error => { //if errors is not handled, output the info
    console.log(error)
    console.log(error.request)
    if(error.request.status==0 && error.request.readyState==4){
        let loginBoolean = window.confirm('you status may be expired,Do you want to log in again?')
        if( loginBoolean ){
            window.location.reload()
        }

    }
    if(error.response.status === 403 ){
        let loginBoolean = window.confirm('you status may be expired,Do you want to log in again?')
        if( loginBoolean ){
            window.reload()
        }
    }
    let err = error.response.data
    return Promise.reject(err)
})

export default service