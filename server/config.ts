const dev:boolean = process.env.NODE_ENV !== "production";
let ReqUrl:string=dev?"https://api-test.amoeba-inc.com":"https://api.amoeba-inc.com";
let appid:string=dev?"testID":"";
let appsecret:string = dev?"testSecret":"";
export default {
    ReqUrl,
    appid,
    appsecret
}
