import { baseApiSlice } from "./api/baseApiSlice";
import authReducer from "@/lib/redux/features/auth/authSlice"
import userReducer from "@/lib/redux/features/users/userSlice"


export const rootReducer={
    [baseApiSlice.reducerPath]:baseApiSlice.reducer,
    auth:authReducer,
    user:userReducer
}
















