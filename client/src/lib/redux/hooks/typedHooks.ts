import type { AppStore,AppDispatch,RootState } from "../store";
import type {TypedUseSelectorHook} from "react-redux"
import { useDispatch, UseDispatch,useSelector,useStore,UseStore } from "react-redux";


export const useAppDispatch:()=>AppDispatch=useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector
export const useAppStore:()=>AppStore=useStore





