import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


class CardDisplay extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
          "http://localhost:3000/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> marche pas ^^</h1> </div> ;
   
        return (
        <div className = "CardDisplay"> 
          
          <Grid 
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                marginTop={3}
                >
        {items.map((item) => ( 
                      <Grid item>
                      <Card sx={{ maxWidth: 400 }}>
                        <CardMedia
                          component="img"
                          height="130"
                          length="100"
                          image={item.picture}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          { item.productName }
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Prix : { item.price} 
                          </Typography >
                          <Typography variant="body2" color="text.secondary">
                          Stock : {item.inStock}
                          </Typography>
                        </CardContent>
                      </Card>
                      </Grid>
                ))
            }
        </Grid>
        </div>

    );
}
}
   
export default CardDisplay;