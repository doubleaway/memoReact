import React from "react";
import "../assets/style/style.css";
function EditBox(){
return (
    <div className="edit_box">
        <div className="edit_head">
            <input type="text" placeholder="제목"/>
            <p className="border_line"/>
        </div>
        <textarea></textarea>
    </div>
)

}

export default EditBox;