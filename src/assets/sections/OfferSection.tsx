import * as React from 'react';

import { Parallax } from 'react-scroll-parallax';

import Element from 'react-scroll/modules/components/Element';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CardContainer from '../../main_page/containers/CardContainer';
import House from '../../models/houses/House';

interface OfferSectionProps {
    houses: House[]
}

const OfferSection: React.FunctionComponent<OfferSectionProps> = (props) => {
    return (
        <Box>
            <Parallax
                translateY={[-10, 0]}
                style={{
                    height: 100,
                    maxWidth: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1010
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
                        Domki
                    </Typography>
                </Box>
            </Parallax>
            <Element
                name="houses"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 20
                }}>
                <Grid container spacing={2}>
                    {props.houses.map((house, i) => (
                        <Grid item xs={12} md={(i + 1) % 3 === 0 ? true : 6} key={house.name}>
                            <CardContainer house={house} key={house.name} />
                        </Grid>
                    ))}
                </Grid>
            </Element>
        </Box>
    );
}

export default OfferSection;