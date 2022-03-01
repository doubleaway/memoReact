





//초기 data
const data={
    input:'',
    data_con:[
        {id:1,
            title:"title",
            content:"\n" +
                "1. 가장 사용률이 높은 상태관리 라이브러리\n" +
                "2. 사용 시 상태관리 로직을 다른파일에서 관리 할 수 있음 \n" +
                "3. 글로벌 상태관리도 할수있음\n" +
                "4. context api+ useReducer를 사용한것과 유사함\n" +
                "\t개선되기전에 useReducer라는 hook이 만들어지기전에 사용\n" +
                "5.ntm twends? trend?에서 통계확인가능\n" +
                "6. 단순히 글로벌상태관리를 위해서거나 글로벌상태가 많이없다면 context쓰는것이 좀더 효율적",
            active:true,
            date:"2021.11.11"

        },
        {id:2,
            title:"title0",
            content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.11"

        },
        {id:3,title:"title1",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.11"

        },
        {id:4,title:"title2",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:true,
            date:"2021.11.11"

        },
        {id:5,title:"title3",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:false,
            date:"2021.11.13"

        },
        {id:6,title:"title4",content:"\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 변경하기\n" +
                "input:focus {outline:2px solid #d50000;}\n" +
                "\n" +
                "\n" +
                "\n" +
                "input 박스를 클릭 했을떄 나오는 테두리 색상 없애기\n" +
                "input:focus {outline:none;}",
            active:true,
            date:"2021.11.14"

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

