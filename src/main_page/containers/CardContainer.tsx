import Box from '@mui/material/Box';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { Carousel } from 'react-responsive-carousel';
import HouseDetailsBackdrop from '../../assets/components/HouseDetailsBackdrop';
import House from '../../models/houses/House';

interface CardContainerProps {
    house: House
}

const CardContainer: React.FunctionComponent<CardContainerProps> = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <Card sx={{
                borderRadius: 2,
                boxShadow: '-2px 2px 8px #ddddd',
                maxWidth: 'lg'
            }}>
                <CardContent sx={{
                    padding: 0
                }}>
                    <div style={{
                        aspectRatio: '2/1',
                        padding: 0,
                        display: 'flex'
                    }}>
                        {
                            props.house.images
                                ?
                                <Carousel
                                    swipeable
                                    infiniteLoop
                                    emulateTouch
                                    showThumbs={false}
                                >
                                    {props.house.images.map(house => (
                                        <div style={{
                                            height: '100%'
                                        }}
                                            key={house}>
                                            <img src={house} style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }} />
                                        </div>
                                    ))}
                                </Carousel>
                                :
                                <></>
                        }
                    </div>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily="Pacifico" fontWeight={800}>
                        {props.house.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily="Montserrat" fontWeight={500}>
                        {props.house.shortDesc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 500
                        }}
                        size="small"
                        onClick={handleOpen}>
                        Szczegóły
                    </Button>
                </CardActions>
            </Card>
            <HouseDetailsBackdrop
                key={props.house.name}
                house={props.house}
                open={open}
                handleClose={handleClose} />
        </Box>
    );
}

export default CardContainer;