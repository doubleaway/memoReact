import React, {useCallback} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import{add,inputChange,toggle,remove} from "../modules/notes";
import MemoContents from "../component/features/MemoContent";
const NotesContainer=({saveFunc,visible})=>{

    const dispatch=useDispatch();
    const onAdd=useCallback((text,date)=>dispatch(add(text,date)),[dispatch]);


    return(

    <MemoContents onAdd={onAdd} saveFunc={saveFunc}/>
    );
}


export default NotesContainer;