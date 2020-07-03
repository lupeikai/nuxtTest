const request = require('request')
import config from '../config'
function getAccessToken() {
    return new Promise<string>(async (resolve, reject) => {
        let options: object = {
            method: 'get',
            url: `${config.ReqUrl}/v4/gettoken?appid=${config.appid}&appsecret=${config.appsecret}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        request(options,function(err:any,res:any,body:any){
            if(err){
                reject('getAccessToken error')
            }else{
                if (JSON.parse(res.body).code === 0) {
                    resolve(JSON.parse(res.body).data.access_token)
                } 
            }
        })    
    })
}
interface URLQuery{
    goms_action:string,
    goms_user?:string
}
export function getServer(URLQuery:URLQuery,req:object){
    return new Promise<Object>(async(resolve,reject)=>{
         const access_token = await getAccessToken()
         let ReqUrl = `${config.ReqUrl}/v4?access_token=${access_token}&goms_action=${URLQuery.goms_action}&goms_user=${URLQuery.goms_user?URLQuery.goms_user:''}`
         console.log(ReqUrl)

    })
}