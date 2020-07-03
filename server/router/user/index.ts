import {userinfo} from "../../controller/user";
export const UserAppRoutes = [
    {
        path: "/userinfo",
        method: "post",
        action: userinfo
    }
];