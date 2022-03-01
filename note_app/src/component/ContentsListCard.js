//콘텐츠 카드
import React from "react";

const ContentsListCard=({listCon})=>{
    var {name, id, date, title,contents}=listCon;
    return(
        <div className="list_card contents_list_card">
            <p className="contents_title">
                <span>{name}</span>
                <span>{id}</span>
            </p>
            <p className="contents_sub_title">
                <span className="green_txt">
                    {id}
                </span>
                <span className="light_green_txt">
                |
                </span>
                <span>
                    created_at({date})
                </span>
            </p>
            <h1>{title}</h1>
            <p className="content">{contents}</p>
        </div>
    )


}

export default ContentsListCard;