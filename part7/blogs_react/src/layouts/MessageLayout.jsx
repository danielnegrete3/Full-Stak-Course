import { Outlet } from "react-router"
import { Notification } from "../components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { shiftMessage } from "../features/messages/messageSlice";
import { useEffect } from "react";

export const MessageLayout = () => {
    const dispatch = useDispatch();
    const currentSelector = createSelector([(state) => state.message.queue],
        (queue) => {
            return queue.length> 0? queue[0] : null
        }
    )

    const current = useSelector(currentSelector);
    const time = useSelector(state=>state.message.time)

    useEffect(()=>{
        setTimeout(()=>dispatch(shiftMessage()),time)
    },[current,time])

    return(
        <div> 

            < Notification content={current?.message??''} type={current?.messageType??''} show={current}/>
            
            <br />

            <Outlet/>
        </div>
    )
}