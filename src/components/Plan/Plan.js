import { Button, colors, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import './Plan.css';

const useStyle = makeStyles(theme =>({
    planList:{
        width: '100%',
        position: 'relative',
        margin: '1rem auto',
    },
    planItem:{
        maxWidth: '80%',
        background: 'rgb(32, 32, 32)',
        padding: '2rem',
        margin: '2rem auto',
        borderRadius: '10px',
        border: '2px solid #fff',
        color: 'rgb(212, 203, 203)',
    },
    header:{
        margin: '1rem 1.6rem',
        textAlign: 'center',
    },
    headerText:{
        fontSize: '38px',
        fontFamily: "Roboto",
        fontStyle: 'oblique',
        fontWeight: 800,
        overflowWrap: 'break-word',
        letterSpacing: '2px',
    },
    detail:{
        margin: '1rem 0',
    },
    detailList:{
        width: '50%',
        margin: '0 auto',
        fontFamily: 'Roboto',
        letterSpacing: '1.5px',
        fontWeight: 500,
        textAlign: 'center',
    },
    detailLi:{
        margin: '0.5rem 0',
        
    },
    price:{
        width: '100%',
        margin: '2rem auto 1rem auto',
        /* position: relative; */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buyButton:{
        fontSize: '24px',
        borderRadius: '20px',
        color:'#fff',
        fontWeight: 600
    },
    '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        span:{
            color:'#fff'
        }
    },
    priceText:{
        fontSize: '40px',
        color: '#EEE'
    }

}))

function Plan() {
    const classes = useStyle()
    return (
        <main>
            <Grid container className={classes.planList}>
                <Grid item md={4} xs={12}>
                   <div className={classes.planItem}>
                    <div className={classes.header}>
                            <h2><span className={classes.priceText}>129&#8377;</span>/Month</h2>
                        </div>
                        <div className={classes.detail}>
                            <ul className={classes.detailList}>
                                <li className={classes.detailLi}>Unlimited Movies</li>
                                <li className={classes.detailLi}>Unlimited Webseries</li>
                                <li className={classes.detailLi}>30 days</li>
                            </ul>
                        </div>
                        <div className={classes.price}>
                            <Button className={classes.buyButton} variant="contained" color="secondary">
                                Buynow
                            </Button>
                        </div>
                   </div>
                </Grid>
                <Grid item md={4} xs={12} >
                     <div className={classes.planItem}>
                    <div className={classes.header}>
                            <h2><span className={classes.priceText}>629&#8377;</span>/6Month</h2>
                        </div>
                        <div className={classes.detail}>
                            <ul className={classes.detailList}>
                                <li className={classes.detailLi}>Unlimited Movies</li>
                                <li className={classes.detailLi}>Unlimited Webseries</li>
                                <li className={classes.detailLi}>180 days</li>
                            </ul>
                        </div>
                        <div className={classes.price}>
                            <Button className={classes.buyButton} variant="contained" color="secondary">
                                Buynow
                            </Button>
                        </div>
                   </div>
                </Grid>
                <Grid item md={4} xs={12} >
                <div className={classes.planItem}>
                    <div className={classes.header}>
                            <h2><span className={classes.priceText}>1290&#8377;</span>/Year</h2>
                        </div>
                        <div className={classes.detail}>
                            <ul className={classes.detailList}>
                                <li className={classes.detailLi}>Unlimited Movies</li>
                                <li className={classes.detailLi}>Unlimited Webseries</li>
                                <li className={classes.detailLi}>366 days</li>
                            </ul>
                        </div>
                        <div className={classes.price}>
                            <Button className={classes.buyButton} variant="contained" color="secondary">
                                Buynow
                            </Button>
                        </div>
                   </div>
                </Grid>
                
            </Grid>
        </main>
    )
}

export default Plan
