import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function CustomButton( props ) {
    const classes = useStyles();
    let btn = null;
    let btnTask = null;
    if(props.buttonType){
        if(props.buttonType==="Previous"){
            btn = <NavigateBeforeIcon color="primary" style={{ fontSize: 50 }} />;
            btnTask = "prev";
        }
        else if(props.buttonType==="Next"){
            btn = <NavigateNextIcon color="primary" style={{ fontSize: 50 }} />;
            btnTask = "next";
        }
    }
  
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={btn}
          style={{borderRadius:'50%'}}
          onClick={() => props.navigate(btnTask)}
          disabled={props.disabled}
        >
        </Button>
      </div>
    );
  }