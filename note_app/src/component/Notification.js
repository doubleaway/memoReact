import React,{useState} from "react";
import Button from "./button";
import {IoIosCreate} from "react-icons/io";
import { AiFillCloseCircle,AiFillAlert } from "react-icons/ai";
import { GrTrash } from "react-icons/gr";

const Notification=({notificationVisibleFunc})=>{

    

    return(
        <div className="notification_box">

            <aside >
                <span onClick={()=>{notificationVisibleFunc(false)}}><Button contents={<AiFillCloseCircle color="white" size="60px"/>} color="light_gray" classN="notification" contentsText=""></Button></span>
                <div className="notification_icon">
                    <AiFillAlert color="white"/>
                    <h1>메모가 전체 삭제됩니다.</h1>
                </div>
                <div className="notification_content"><p>다시 복구할 수 없습니다.</p><p>정말 삭제하시겠습니까? </p></div>
                <div className="notification_btn">
                    <div onClick={()=>{notificationVisibleFunc(false)}}><Button contents={""} color="light_gray" classN="notification" contentsText="닫기"></Button></div>
                    <div onClick={()=>{notificationVisibleFunc(true)}}><Button  contents={""} color="light_gray" classN="notification" contentsText="삭제"></Button></div>
                </div>
            </aside>
        </div>
    )
}

export default Notification