import React, {useState, useEffect, useCallback} from "react";
import {IoIosPricetag, IoIosStar,IoMdTrash} from "react-icons/io";
// import MemoBox from "./MemoBox";
import moment from 'moment';
import 'moment/locale/ko';


function List({memoCon,onToggle,onRemove,removeAll,removeAllFunc,concern}){
    const data_con_tent=removeAll?memoCon.data_con.map(max=>onRemove(max.id)):concern?memoCon.data_con.filter(max=>(max.active)):memoCon.data_con;
    // const allRemveTest=
    return(
        
        <article className="list_box_square">

            {
            data_con_tent.map(memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle} onRemove={onRemove} removeAll={removeAll} removeAllFunc={removeAllFunc}  /> ))
            }

        </article>
    )
}

function MemoCon({memoCon,onToggle,onRemove,removeAll,removeAllFunc}){



const {title,content,date,active,id}=memoCon;
const [text,setText]=useState();



// if(removeAll)
// onRemove(id);

// onRemove(id);
return(
    <div className="memo_box" >
        <div className="label_box">
            {/*{label}*/}
            <span onClick={()=>{onRemove(id)}}><IoMdTrash/></span><span onClick={()=>{onToggle(id)}} className={active?"color_point":""}>
                    <IoIosStar size={20}/>
                </span>
        </div>
        <div className="memo_content_box">
         
            <div className="content_txt">{content}</div>
            <div className="color_gray">{date}</div>
        </div>
    </div>
)
}

// function MemoBox({memoCon},onToggle){
//     return(
//         <>
//
//             {
//
//                 memoCon.memoCon.data_con.map(
//                     memoCon=>(<MemoCon memoCon={memoCon} key={memoCon.id} onToggle={onToggle} /> )
//                 )
//             }
//         </>
//         // <div>
//         //     {console.log(memoCon.memoCon.data_con)}
//         // </div>
//     )
// }


export default List;