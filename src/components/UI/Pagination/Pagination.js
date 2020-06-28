import React from 'react';

import Page from '../../UI/Pagination/Page/Page';

const pagination = (props) => {
    let pages = [];
    let noOfPages = Math.ceil(props.size / 6);

    console.log(noOfPages);
    console.log(props.currentPage);

    if (noOfPages !== null && props.currentPage !== null) {
        if (props.currentPage !== 1) {
            pages.push(<Page key="prev" id={props.currentPage-1} value="Previous" />)
        }
        for (let i = props.currentPage; i <= noOfPages; i++) {
            if (i === props.currentPage + 3) {
                break;
            }
            let link = "/videos/"+i ;
            pages.push(<Page key={i} id={link} value={i} />)
        }
        if (props.currentPage !== noOfPages) {
            pages.push(<Page key="next" id={props.currentPage+1} value="Next" />)
        }
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pages}
            </ul>
        </nav>

    );
}

export default pagination;