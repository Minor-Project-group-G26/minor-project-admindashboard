import { makeStyles } from "@material-ui/core";

export const CaroStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        padding: '1rem',
        transition: 'all0 650ms ease',
        '&:hover':{
            opacity: '0.7'
        },
        margin: '0 auto'
    },
    '& > .fa': {
        margin: theme.spacing(2),
    },
    media: {
        height: '140px',
    },
    button: {
        margin: theme.spacing(1),
        paddingRight: '1rem',
    },
    slider:{
        textAlign: 'center',
        margin: '2rem',
        padding: '2rem' , 
        background: 'transparent',
        ['@media(max-width: 425px)']:{
            margin: '2rem 0rem',
        }
    },
    detail:{
        diplay: 'none',
        
        padding: '1rem',
        transition: 'all 650m ease',
    }

}));