import * as React from 'react';

import { Parallax } from 'react-scroll-parallax';

import Element from 'react-scroll/modules/components/Element';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface ContactSectionProps {

}

const ContactSection: React.FunctionComponent<ContactSectionProps> = () => {
    return (
        <Parallax
            translateY={[10, 0]}
            style={{
                maxWidth: '100%',
                width: '100%',
                boxShadow: '0 0px 2px #36454F'
            }}>
            <Element
                name='contact'
                style={{
                }}>
                <Grid container spacing={2} sx={{
                    minHeight: 250
                }}>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2
                    }}
                        xs={12}
                        md={6}
                    >
                        <Typography
                            fontSize={40}
                            fontFamily="Pacifico"
                            color='#36454F'
                        >
                            Lokalizacja:
                        </Typography>
                        <Typography
                            fontSize={20}
                            fontFamily="Montserrat"
                            color='#36454F'
                            fontWeight={400}
                        >
                            Lorem
                        </Typography>

                        <Typography
                            fontSize={20}
                            fontFamily="Montserrat"
                            color='#36454F'
                            fontWeight={300}
                        >
                            Ipsum
                        </Typography>
                    </Grid>
                    <Grid item sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2
                    }}
                        xs={12}
                        md={6}
                    >
                        <Typography
                            fontSize={40}
                            fontFamily="Pacifico"
                            color='#36454F'
                        >
                            Kontakt:
                        </Typography>
                        <Typography
                            fontSize={20}
                            fontFamily="Montserrat"
                            color='#36454F'
                            fontWeight={300}
                        >
                            Lorem
                            <br></br>
                            Ipsum
                        </Typography>
                    </Grid>
                </Grid>
            </Element>
        </Parallax >
    );
}

export default ContactSection;