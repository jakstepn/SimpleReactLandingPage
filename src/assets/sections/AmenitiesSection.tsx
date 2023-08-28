import * as React from 'react';

import Element from 'react-scroll/modules/components/Element';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import AmenityList from '../components/amenities/AmenityList';
import AmenityUrls from '../../models/houses/amenities/AmenityUrls';

interface AmenitiesSectionProps {
    amenitiesUrls: AmenityUrls[]
}

const AmenitiesSection: React.FunctionComponent<AmenitiesSectionProps> = (props) => {
    return (
        <Box>
            <Box
                style={{
                    height: 100,
                    maxWidth: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Box sx={{
                    height: '100%',
                    background: '#fdfdfd',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0px 2px #36454F',
                }}>
                    <Typography
                        fontSize={40}
                        fontFamily="Pacifico"
                        color='#36454F'
                    >
                        Atrakcje
                    </Typography>
                </Box>
            </Box>
            <Element name='entertainment' style={{
                padding: 30
            }}>
                <Grid container spacing={2} >
                    {
                        props.amenitiesUrls.map((amenityUrls, i, arr) => (
                            <Grid item xs={12} lg={(arr.length % 2 === 1 && i === arr.length - 1) ? true : 6} key={amenityUrls.name} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'start'
                            }}>
                                <AmenityList amenityUrls={amenityUrls} />
                            </Grid>
                        ))
                    }

                </Grid>
            </Element>
        </Box>
    );
}

export default AmenitiesSection;