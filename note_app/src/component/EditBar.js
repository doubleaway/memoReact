import React, {useState} from "react";
import { IoIosCreate,IoIosPricetag,IoIosTrash,IoMdSwap,IoIosSearch } from "react-icons/io";
import Button from "./button";
import NotesContainer from "../containers/memoContainer";
import { GoPencil,GoTrashcan,GoStar } from "react-icons/go";
function EditBar({saveFunc,visible,notificationVisibleFunc,resetNotification,concernFunc,concern}){

    const onWrite=()=>{
        saveFunc(true);
        resetNotification();
    }

    return(
        <>
            <ul className="edit_bar">
                <li onClick={onWrite}><Button  contents={<GoPencil size={30}/>}  color="light_gray" classN="edit" contentsText="Write"></Button></li>
                <li onClick={()=>notificationVisibleFunc(false)} ><Button  contents={<GoTrashcan size={30}/>}  color="light_gray" classN="edit" contentsText="Delete all"></Button></li>
                <li className={concern?"axent":""} onClick={concernFunc} ><Button  contents={<GoStar size={30}/>}  color="light_gray" classN="edit" contentsText="concern"></Button></li>
                {/* <li><Button contents={<IoIosPricetag size={30}/>} color="light_gray" classN="edit" contentsText="태그"></Button></li>
                <li><Button contents={<IoIosTrash size={30}/>} color="light_gray" classN="edit" contentsText="삭제"></Button></li>
                <li><Button contents={<IoMdSwap size={30}/>} color="light_gray" classN="edit" contentsText="정렬"></Button></li> */}
            </ul>
            {/* <div className="search_bar">
                <input type="text" placeholder="제목을 입력해주세요"/>
                <Button contents={<IoIosSearch size={35}/>}  color="light_gray" classN="edit" />
                 <button className="edit_btn" onClick={onWrite} ><IoIosSearch size={35}/>글쓰기</button> </div> */}


            {/*글쓰기*/}
            { visible? <NotesContainer saveFunc={saveFunc} visible={visible}/>:''}
        </>
    )
}

export default EditBar;