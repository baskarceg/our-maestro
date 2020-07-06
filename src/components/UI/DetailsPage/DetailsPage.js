import React from 'react';
import classes from './DetailsPage.module.css';
import BirthdayQuote from '../BirthdayQuote/BirthdayQuote';
import Image from '../Image/Image';

const detailsPage = (props) => {
    console.log(props);
    let showQuote = null;
    let quote =null;
    if (props.type === "friends" && props.testimonial) {
        if(props.testimonial.content){
            showQuote = true;
            quote= <BirthdayQuote content={props.testimonial.content} />;
        }   
    }
    else {
        showQuote = false;
    }
    let images = null;

    let showImage = null;

    if (props.friend.name === "Rayani"|| props.friend.name==="Amma") {
        showImage = true;
    }

    let extra =null;
    if(props.friend.name === "Rayani"){
        extra = <img className="img-fluid" src="https://i.ibb.co/QdY1shH/IMG-20200702-WA0019.jpg" alt="" />;
    }
    else if(props.friend.name ==="Amma"){
        extra = <img className="img-fluid" src="https://i.ibb.co/HFRNWFq/amma.jpg" alt="" />;
    }

    if (props.friend.pics) {
        let imagesArray = props.friend.pics.split(',');
        images = imagesArray.map((image,index) => {
            return <Image key={index} photoSrc={image} />
        })
    }

    return (
        <div className={classes.DetailsPage}>
            <div hidden={!showQuote}>
                <div className={classes.Heading}>
                    <div className="d-flex justify-content-between">
                        <h4 >{props.friend.name}'s Message</h4>
                        <div className={classes.WebButton}>
                            <button
                                type="button"
                                onClick={props.goBack}
                                className="btn btn-outline-dark">
                                Back
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={classes.Quote} >
                    {quote}
                </div>
                <div hidden={!showImage} className={classes.Flashback}>
                    <div className="card bg-dark text-white" >
                        {extra}
                    </div>
                </div>
            </div>
            <div className={classes.More} hidden={!images}>
                <div className={classes.Heading}>
                    <div className="d-flex justify-content-between">
                        <h4 >More Pictures</h4>
                        <div className={classes.WebButton} hidden={showQuote}>
                            <button
                                type="button"
                                onClick={props.goBack}
                                className="btn btn-outline-dark">
                                Back
                            </button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={classes.Pics}>
                    {images}
                </div>
            </div>
        </div>
    );
}

export default detailsPage;