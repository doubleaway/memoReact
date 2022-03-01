//Action type
const WRITE = 'MemoFunction/WRITE';
const TOGGLE = 'MemoFunction/TOGGLE';
const REMOVE = 'MemoFunction/REMOVE';
const MODIFY = 'MemoFunction/MODIFY';
const ADD = 'MemoFunction/ADD';
const SORT = 'MemoFunction/SORT';

//action produce func
export const write=(text)=>({
    type:WRITE,

});
export const toggle=()=>({type:TOGGLE});
export const remove=()=>({type:REMOVE});
export const modify=()=>({type:MODIFY});
export const add=()=>({type:ADD});
export const sort=()=>({type:SORT});

//예시값
const exampleValue={
    input:'',
    memoContents:[
        {id:1,
            title:"title",
            content:"\n" +
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
console.log("");

//reducer func
function MemoFunction(state=exampleValue,action){
    switch (action.type) {
        case WRITE:
            console.log(state);
            return {
                ...state,
                memoContents: state.memoContents.concat(action.memoContents)
            };
        case TOGGLE:
            return {
                ...state,
                memoContents: state.memoContents.map(memo=>memo.id===action.id?{...memo,active:!memo.active}:memo)
            };
        case REMOVE:
            return {
                ...state,
                memoContents: state.memoContents.filter(memo=>memo.id!==action.id)
            };
        case MODIFY:
            return {};
        case SORT:
            return {};
        default:
            return state
    }
}


export default MemoFunction;