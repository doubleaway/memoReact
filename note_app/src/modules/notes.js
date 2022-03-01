





//초기 data
const data={
    input:'',
    data_con:[
        {id:1,
            title:"title",
            content:"메모를 입력해주세요",
            active:true,
            date:"2021.11.11"

        },
        

    ]

}

const ADD='notes/ADD';//추가함
const REMOVE='notes/REMOVE';//삭제
const TOGGLE='notes/TOGGLE';//중요 체크/해제
const INPUT_CHANGE='notes/INPUT_CHANGE';//input값 변경
const VISIBLE='notes/VISIBLE';//보이게하기/않보이게하기
const CONCERN='notes/CONVERN';//중요표시 체크된것만 보이게


let id=7;//add될때마다 1씩 추가



export const add=(memo,date)=>({
    type:ADD,
    memo:{
        id:id++,
        content:memo,
        importance:false,
        date:date
    }
});
export const toggle=(id)=>({
    type:TOGGLE,
    id
});
export const remove=(id)=>({
    type:REMOVE,
    id
});
export const inputChange=input=>({
    type:INPUT_CHANGE,
    input
});
export const visible=()=>({
    type:VISIBLE,
});

export const concern=(concern)=>({
    type:CONCERN,
    concern
})



export default function notes(state=data,action){

    switch (action.type){
        case INPUT_CHANGE:
            return{
                ...state,
                input:action.input
            };
        case TOGGLE:
            return {
                data_con:state.data_con.map( memo => memo.id === action.id ? {...memo, active: !memo.active} : memo)
            }

        case ADD:
            return{
                ...state,
                data_con: state.data_con.concat(action.memo),
            };
        case REMOVE:
            return {
                ...state,
                data_con: state.data_con.filter(memo=>memo.id!==action.id)

            };
        case CONCERN:
            return{
                ...state,
                data_con:state.data_con.filter(concern=>concern.active==false)
            }


        default:return state;

    }
}

