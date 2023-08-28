import * as React from 'react';

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import Element from 'react-scroll/modules/components/Element';

import Logo from '../components/Logo';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';

import { Carousel } from 'react-responsive-carousel';

interface LandingSectionProps {
    amenitiesImageUrls: string[],
    scrollTo: (scrollTo: string) => void;
}

const LandingSection: React.FunctionComponent<LandingSectionProps> = (props) => {
    return (
        <Element name='main'>
            <ParallaxBanner style={{ height: '100vh' }}>
                <ParallaxBannerLayer speed={0}>
                    <div style={{
                        height: '100%',
                        padding: 0,
                        display: 'flex',
                        position: 'relative'
                    }}>
                        <Carousel
                            infiniteLoop
                            showThumbs={false}
                            interval={2000}
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            swipeable={false}
                            emulateTouch={false}
                            autoPlay
                        >
                            {props.amenitiesImageUrls.map(img => (
                                <div style={{
                                    height: '100%'
                                }}
                                    key={img}>
                                    <img src={img}
                                        alt=''
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={0}>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.3)'
                    }} />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={-5}>
                    <Container sx={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Container sx={{
                            padding: '50px',
                            userSelect: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Logo fontSize={50} />
                            <Button
                                onClick={() => props.scrollTo("houses")}
                                variant='contained'
                                sx={{
                                    background: 'transparent',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                <span style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 800,
                                    color: 'white'
                                }}>
                                    Zobacz naszą ofertę!
                                </span>
                                <ExpandMoreRounded />
                            </Button>
                        </Container>
                    </Container>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </Element>
    );
}

export default LandingSection;