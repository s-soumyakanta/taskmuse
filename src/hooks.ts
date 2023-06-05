import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState,AppDispatch } from "./store/Slices/store";

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = ()=>useDispatch<AppDispatch>()