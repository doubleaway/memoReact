import React, {useState,useEffect} from "react";
import {IoIosCreate, IoIosPricetag, IoIosStar,IoMdCloseCircleOutline} from "react-icons/io";
//
import moment from 'moment';
import 'moment/locale/ko';
import Button from "../button";

function MemoContents({onAdd,saveFunc}){
        const [time,setTime]=useState('');
    useEffect(()=>{
    setTime(moment().format('YYYY.MM.DD'));
    },[]);
    const [memo,setMemo]=useState('');
    const onChange=e=>{
        e.preventDefault();
        setMemo(e.target.value);
    };

    const onSubmit=e=>{

        onAdd(memo,time);
        setMemo('');//등록후 초기화
        saveFunc(false);
        e.preventDefault();
    }
    const onCancel=()=>{
        saveFunc(false);
    }
    // console.log(nowTime);
    return (
        <div className="inputs_box">
            <div className="memo_box">
                <div className="title_box">
                    <h1 className="content_title"></h1>
                    <p>
                        {/* <IoIosStar size={20}/> */}
                    </p>
                </div>

                <div className="content_txt">
                    <form onSubmit={onSubmit}>
                        <textarea placeholder="메모를 입력해주세요"
                               type="text"
                               className="contents_inputs"
                               name="memo_contents"
                                  value={memo}
                                  onChange={onChange}
                        />
                      
                         { memo==''? <div className="btn_edit"><IoIosCreate size={30}/>저장</div>:<button  className="btn_edit active"><IoIosCreate size={30}/>저장</button>}
                         <div onClick={onCancel} className="btn_edit"><IoMdCloseCircleOutline size={30}/>취소</div>
           
                    
                     
                    </form>
                    <p className="color_gray">{time}</p>
                </div>
           
            </div>
        </div>
    )
}

export default MemoContents;