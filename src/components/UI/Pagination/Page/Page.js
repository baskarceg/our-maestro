import React from 'react';

const page = (props) => {
    let design = [];
    design.push("page-item");
    if(props.active){
        design.push("active")
    }
    return (
        <li className={design.join(' ')}><a className="page-link" href={props.id} >{props.value}</a></li>
    );
}

export default page;