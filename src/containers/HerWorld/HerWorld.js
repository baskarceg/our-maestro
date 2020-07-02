import React, { Component } from 'react';
import classes from './HerWorld.module.css';

class HerWorld extends Component {
    render() {
        return (
            <div className={classes.HerWorld}>
                <h3>Roshini's World</h3>
                <hr></hr>
                <div className={classes.Content}>
                    <img src="https://i.ibb.co/vw4hC7x/Dancer-Big.png" alt="Amma"></img>
                    <div className={classes.Paragraph}>
                        <p>
                            I can bet you anything , go and ask anyone who know's Rosh that "Who is the most important person to her?" , the
                            answer will definitely be "Ammma".
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HerWorld;