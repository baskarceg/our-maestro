import React from 'react';
import classes from './DetailsPage.module.css';
import BirthdayQuote from '../BirthdayQuote/BirthdayQuote';
import Image from '../Image/Image';
import Spinner from '../Spinner/Spinner';

const detailsPage = (props) => {
    let showQuote = null;
    if (props.type === "friends") {
        showQuote = true;
    }
    else {
        showQuote = false;
    }
    let images = <Spinner />;

    if(props.friend.pics){
        let imagesArray = props.friend.pics.split(',');
        images = imagesArray.map(image =>{
            return <Image photoSrc={image} />
        })
    }
    else{
        images = (
            <div>
                <Image photoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg" />
                    <Image photoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg" />
                    <Image photoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg" />
                    <Image photoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg" />
                    <Image photoSrc="https://i.ibb.co/d2gtH4z/mathini.jpg" />
            </div>
        );
    }

    return (
        <div className={classes.DetailsPage}>
            <div hidden={!showQuote}>
                <div className={classes.Heading}>
                    <div className="d-flex justify-content-between">
                    <h4 >{props.testimonial.name}'s Message</h4>
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
                    <BirthdayQuote content={props.testimonial.content} />
                </div>
            </div>
            <div className={classes.Content}>
            <div className={classes.Heading}>
                    <h4 >Whos's {props.testimonial.name}?</h4>
                    <hr />
                </div>
                Some Content
            </div>
            <div className={classes.More}>
                <div className={classes.Heading}>
                    <h4 >More Pictures</h4>
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