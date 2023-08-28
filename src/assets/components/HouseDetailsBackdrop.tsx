import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import House from "../../models/houses/House";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";

interface HouseDetailsBackdropProps {
    open?: boolean,
    handleClose: () => void,
    house: House
}

const HouseDetailsBackdrop: React.FunctionComponent<HouseDetailsBackdropProps> = (props) => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                display: 'flex',
                padding: 4
            }}
            open={props.open ?? false}
            onClick={props.handleClose}
        >
            <Box sx={{
                height: '100%',
                maxWidth: 'lg',
                background: 'white',
                borderRadius: 4,
                padding: 3,
                overflow: 'hidden'
            }}>
                <Grid container sx={{
                    height: '100%',
                    overflowY: 'auto'
                }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{
                            paddingRight: 1
                        }}>
                            <Typography
                                fontFamily="Montserrat"
                                variant="h5"
                                fontWeight={800}
                                sx={{
                                    color: 'black',
                                    marginBottom: 3,
                                }}>
                                {props.house.name}
                            </Typography>
                            <Box sx={{
                                marginBottom: 3
                            }}>
                                {props.house.details?.getDetailsNode() ?? (
                                    <Typography sx={{
                                        color: 'black'
                                    }}>NO DETAILS</Typography>
                                )}
                            </Box>
                            <Typography
                                fontFamily="Montserrat"
                                variant="subtitle1"
                                fontWeight={500}
                                sx={{
                                    color: 'black',
                                    marginBottom: 3
                                }}>
                                Opis:
                            </Typography>
                            <Typography
                                fontFamily="Montserrat"
                                variant="body1"
                                fontWeight={300}
                                sx={{
                                    color: 'black'
                                }}>
                                <span>
                                    {props.house.descriptionDetailsHeader}
                                    <br />
                                    {props.house.descriptionDetails.map(d => <>{d}<br /></>)}
                                </span >
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box>
                            {
                                props.house.images
                                    ?
                                    (
                                        <ImageList
                                            sx={{
                                                padding: 2,
                                                margin: 0,
                                            }}
                                            cols={3}>
                                            {props.house.images.map((image, i) => (
                                                <ImageListItem key={i}>
                                                    <img
                                                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                                                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                        loading="lazy"
                                                        alt={i + ""}
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    )
                                    :
                                    <></>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Backdrop >
    );
}

export default HouseDetailsBackdrop;