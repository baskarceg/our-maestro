import React from 'react';

const page = ( props ) => (
    <li className="page-item"><a className="page-link" href={props.id} >{props.value}</a></li>
)

export default page;