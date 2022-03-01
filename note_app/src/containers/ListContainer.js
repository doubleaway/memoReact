import React, {useCallback} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {toggle,remove,concern} from "../modules/notes";
import List from "../component/List";
const ListContainer=({removeAll,removeAllFunc,concern})=>{
    const dispatch=useDispatch();
    const onToggle=useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove=useCallback(id=>dispatch(remove(id)),[dispatch]);
    const memoCon=useSelector(state=>state.notes);

    return(

      <List memoCon={memoCon} onToggle={onToggle} onRemove={onRemove} removeAll={removeAll} removeAllFunc={removeAllFunc} concern={concern}/>
    );
}


export default ListContainer;