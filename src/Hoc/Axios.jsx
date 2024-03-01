import axios from "axios";
const axiosinstance=axios.create({
    baseURL:'http://192.168.100.43:3000/'
    // baseURL:"https://hubmainback.hubit.com.np/"
})

axiosinstance.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token")
axiosinstance.interceptors.request.use(
    async(config)=>{
        config.headers={
            Authorization:"Bearer "+localStorage.getItem("token")
        }

        return config 
    },
    (error)=>Promise.reject(error)
    
)
export default axiosinstance