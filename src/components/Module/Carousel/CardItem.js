import React, { useEffect } from 'react';
import {
    Card,
    CardActionArea,
    // CardActions,
    CardContent,
    CardMedia,
    // Button,
    Typography,
    // Icon,
} from '@material-ui/core';
import Logo from './logo.svg'
import { loadCSS } from 'fg-loadcss';
import './CardItem.css'
import {CaroStyles} from './Styles'



function CardItem(props) {
    const classes = CaroStyles();
    useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    const data = props.Data
    return (

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.mname}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {data.discription}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    );
}

export default CardItem
