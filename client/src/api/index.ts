import axios, {AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios";



class HttpRequest {
    private http! :AxiosInstance
    constructor() {
        this.http = axios.create({
            baseURL:"http://127.0.0.1:3001/api/",
            // timeout:5000
        })
        this.request(this.http)
    }
    private request (http:AxiosInstance) {
        http.interceptors.request.use((config:AxiosRequestConfig)=>{
            const token:string = localStorage.getItem('token')||""
            if (!!token) {
                config.headers!['accept-token'] = token
            }
            return config
        },(error:AxiosError) => {
            return error
        })
        http.interceptors.response.use((config:AxiosResponse)=>{
            return config
        },(error:AxiosError) => {
            return error
        })
    }
    get<T>(url:string,config?:AxiosRequestConfig) {
        return this.http.get(url,config)
    }
    post<T>(url:string,data?:T,config?:AxiosRequestConfig){
        return this.http.post(url,data,config)
    }
    put<T>(url:string,data?:T,config?:AxiosRequestConfig){
        return this.http.put(url,data,config)
    }
    delete<T>(url:string,config?:AxiosRequestConfig){
        return this.http.delete(url,config)
    }
}

export default new HttpRequest()
