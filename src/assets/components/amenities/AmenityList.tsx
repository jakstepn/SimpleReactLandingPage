import ImageListItem from "@mui/material/ImageListItem";
import AmenityUrls from "../../../models/houses/amenities/AmenityUrls";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

interface AmenityListProps {
    amenityUrls: AmenityUrls,
}

const AmenityList: React.FunctionComponent<AmenityListProps> = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 'md',
        }}>
            <Typography
                fontFamily='Pacifico'
                variant="h4"
                sx={{
                    padding: 2,
                }}>
                {props.amenityUrls.name}
            </Typography>
            <div style={{
                width: '100%',
                maxHeight: 500,
                display: 'flex',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '1px 1px 3px #aaaaaa'
            }}>
                <Carousel
                    infiniteLoop
                    showThumbs={false}
                >
                    {props.amenityUrls.urls.map(img => (
                        <div style={{
                            height: '100%'
                        }}
                            key={img}>
                            <img
                                src={img}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </Box>
    );
}

export default AmenityList;