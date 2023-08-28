import IHouseDetails from "./IHouseDetails";
import IAmenity from "./amenities/IAmenity";
import { Box, Grid, Typography } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';

export interface DefaultHouseDetailsProps {
    amenities: IAmenity[],
    capacity: number
}

export default class DefaultHouseDetails implements IHouseDetails {

    amenities: IAmenity[];
    capacity: number;

    constructor(props: DefaultHouseDetailsProps) {
        this.amenities = props.amenities;
        this.capacity = props.capacity;
    }

    getDetailsNode() {
        return (
            <Grid container sx={{
                border: '1px solid black',
                borderRadius: 2,
                padding: 2,
            }}>
                <Grid item xs={12} >
                    <Typography
                        fontFamily="Montserrat"
                        variant="subtitle1"
                        fontWeight={500}
                        sx={{
                            color: 'black'
                        }}>
                        Szczegóły
                    </Typography>
                </Grid>
                <Grid item xs={12} paddingY={1}>
                    <Grid container spacing={2} display='flex' direction='row' alignItems='center'>
                        <Grid item xs="auto">
                            <Typography
                                fontFamily="Montserrat"
                                variant="body1"
                                fontWeight={400}
                                sx={{
                                    wordBreak: 'break-word',
                                    color: 'black',
                                    mr: 1
                                }}>
                                Udogodnienia:
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}>
                                {this.amenities.map((amenity, i) => amenity.getIcon(i))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} paddingY={1}>
                    <Grid container spacing={2} display='flex' direction='row' alignItems='center' flexWrap='wrap'>
                        <Grid item xs="auto">
                            <Typography
                                fontFamily="Montserrat"
                                variant="body1"
                                fontWeight={400}
                                sx={{
                                    wordBreak: 'break-word',
                                    color: 'black',
                                }}>
                                Pojemność:
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}>
                                {[...Array(this.capacity).keys()].map((_, i) => <BoyIcon sx={{ color: "black" }} key={i} />)}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        );
    }
}