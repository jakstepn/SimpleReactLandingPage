import * as React from 'react';
import { scroller } from 'react-scroll';

import House, { HouseProps } from '../models/houses/House';
import DefaultHouseDetails from '../models/houses/DefaultHouseDetails';
import AmenityUrls from '../models/houses/amenities/AmenityUrls';

import LandingSection from '../assets/sections/LandingSection';
import OfferSection from '../assets/sections/OfferSection';
import AmenitiesSection from '../assets/sections/AmenitiesSection';
import ContactSection from '../assets/sections/ContactSection';

// Images
import boat1 from '../images/boat/boat1.jpg';

import FridgeAmenity from '../models/houses/amenities/FridgeAmenity';
import HeatingAmenity from '../models/houses/amenities/HeatingAmenity';
import ShowerAmenity from '../models/houses/amenities/ShowerAmenity';
import TvAmenity from '../models/houses/amenities/TvAmenity';
import WcAmenity from '../models/houses/amenities/WcAmenity';
import AmenityPicker from '../models/houses/amenities/AmenityPicker';

const house1Urls = [
    boat1,
    boat1,
];

const house2Urls = [
    boat1,
    boat1,
];

const house3Urls = [
    boat1,
    boat1,
];

const quad = [
    boat1,
    boat1,
];

const sauna = [
    boat1,
    boat1,
];

const pool = [
    boat1,
    boat1,
];

const yard = [
    boat1,
    boat1,
];

const boat = [
    boat1,
    boat1,
];

const amenites = [
    new AmenityUrls("Łódki", boat),
    new AmenityUrls("Podwórko", yard),
    new AmenityUrls("Pojazdy", quad),
    new AmenityUrls("Balia ogrodowa", pool),
    new AmenityUrls("Sauna", sauna),
];

let amenitesAll = amenites.map(am => am.urls).flat(1);

function shuffle(array: string[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const handleScrollTo = (scrollTo: string) => {
    scroller.scrollTo(scrollTo, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -150
    });
};

interface MainPageProps {

}

const MainPage: React.FunctionComponent<MainPageProps> = () => {

    amenitesAll = [amenitesAll[0], ...shuffle(amenitesAll.slice(1))];

    const [landingImageUrl, setLandingImageUrl] = React.useState<string>("");
    const [houses, setHouses] = React.useState<House[]>([]);
    const [amenitiesUrls, setAmenitiesUrls] = React.useState<AmenityUrls[]>([]);

    function downloadImages() {
        function downloadHouseImages(newHouseDetails: House) {
            setHouses(
                houses => {
                    return [
                        ...(houses.filter(h => h.name !== newHouseDetails.name)),
                        newHouseDetails
                    ];
                }
            );
        }

        downloadHouseImages(
            new House({
                shortDesc: "Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 6 osób.",
                details: new DefaultHouseDetails({
                    amenities: [
                        new FridgeAmenity(),
                        new HeatingAmenity(),
                        new ShowerAmenity(),
                        new TvAmenity(),
                        new WcAmenity(),
                    ],
                    capacity: 6
                }),
                images: house1Urls,
                descriptionDetails: [
                    "- salon z kanapą (można dodatkowo rozłożyć do spania), telewizor z tv naziemną, stolik, kominek gazowy",
                    "- aneks kuchenny z lodówką, kuchenką, piekarnikiem, zlewem, czajnikiem oraz niezbędnymi akcesoriami do gotowania i spożywania posiłków",
                    "- jadalnia ze stołem i 4 krzesłami  ",
                    "- sypialnia z łóżkiem małżeńskim i pościelą, garderoba  ",
                    "- sypialnia z 2 łóżkami pojedynczymi i pościelą  ",
                    "- łazienka z prysznicem i wc (wejście do łazienki z przedpokoju i głównej sypialni)",
                ],
                descriptionDetailsHeader: 'Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 6 osób. Domek posiada:',
                name: "Domek nr 1"
            })
        );

        downloadHouseImages(
            new House({
                shortDesc: "Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 8 osób.",
                details: new DefaultHouseDetails({
                    amenities: [
                        new FridgeAmenity(),
                        new HeatingAmenity(),
                        new ShowerAmenity(),
                        new TvAmenity(),
                        new WcAmenity(),
                    ],
                    capacity: 8
                }),
                images: house2Urls,
                descriptionDetails: [
                    "- salon z kanapą(można dodatkowo rozłożyć do spania), telewizor z tv naziemną, kominek gazowy",
                    "- aneks kuchenny z lodówką, kuchenką, piekarnikiem, zlewem, czajnikiem oraz niezbędnymi akcesoriami do gotowania i spożywania posiłków",
                    "- jadalnia ze stołem i 4 krzesłami",
                    "- sypialnia z łóżkiem małżeńskim i pościelą",
                    "- sypialnia z 2 łóżkami pojedynczymi i pościelą",
                    "- sypialnia z 2 łóżkami pojedynczymi i pościelą",
                    "- łazienka z prysznicem(wejście do łazienki z przedpokoju i głównej sypialni)",
                    "- wc",
                ],
                descriptionDetailsHeader: 'Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 8 osób. Domek posiada:',
                name: "Domek nr 2"
            })
        );

        downloadHouseImages(
            new House({
                shortDesc: "Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 6 osób.",
                details: new DefaultHouseDetails({
                    amenities: [
                        new FridgeAmenity(),
                        new HeatingAmenity(),
                        new ShowerAmenity(),
                        new TvAmenity(),
                        new WcAmenity(),
                    ],
                    capacity: 6
                }),
                images: house3Urls,
                descriptionDetails: [
                    "- salon z kanapą(można dodatkowo rozłożyć do spania), telewizor z tv naziemną, stolik",
                    "- aneks kuchenny z lodówką, kuchenką, piekarnikiem, zlewem, czajnikiem oraz niezbędnymi akcesoriami do gotowania i spożywania posiłków",
                    "- jadalnia ze stołem i 4 krzesłami",
                    "- sypialnia z łóżkiem małżeńskim i pościelą",
                    "- sypialnia z 2 łóżkami pojedynczymi i pościelą",
                    "- łazienka z prysznicem i wc(wejście do łazienki z przedpokoju i głównej sypialni)",
                ],
                descriptionDetailsHeader: 'Domek o powierzchni 40 \u33A1, wielosezonowy, z ogrzewaniem, pomieści 6 osób. Domek posiada:',
                name: "Domek nr 3"
            })
        );

        setAmenitiesUrls(amenites);
        setLandingImageUrl(boat1);
    }

    const houseImgs = "houseImgs";
    const landingImg = "landingImg";
    const amenityImgs = "amenityImgs";

    React.useEffect(() => {

        const localStoredHouseImages = sessionStorage.getItem(houseImgs);
        const localStoredLandingImage = sessionStorage.getItem(landingImg);
        const localStoredAmenitiesImages = sessionStorage.getItem(amenityImgs);

        // When no data is stored download it!
        if (!localStoredHouseImages ||
            !localStoredLandingImage ||
            !localStoredAmenitiesImages) {
            console.log("No local storage");
            downloadImages();
            return;
        }

        try {

            const houseList: House[] | null = JSON.parse(localStoredHouseImages)?.map((elem: HouseProps) => {
                elem.details = new DefaultHouseDetails({
                    amenities: elem.details?.amenities.map(amenity => AmenityPicker.getAmenity(amenity.type)) ?? [],
                    capacity: elem.details?.capacity ?? 0
                });
                return new House(elem)
            });
            const landingImageUrl: string | null = JSON.parse(localStoredLandingImage);
            const amenityList: AmenityUrls[] | null = JSON.parse(localStoredAmenitiesImages);

            if (!houseList || !landingImageUrl || !amenityList) throw Error("Stored session data is missing!");

            console.log("found session storage");
            setAmenitiesUrls(amenityList);
            setHouses(houseList);
            setLandingImageUrl(landingImageUrl);

        } catch (e) {
            console.log("SessionStorage parse exception!");
            console.error(e);
        }

    }, []);

    // Save session storage
    React.useEffect(() => {
        console.log("value change");
        if (!sessionStorage.getItem(houseImgs) && houses.length > 0) {
            console.log("set houses");
            sessionStorage.setItem(houseImgs, JSON.stringify(houses));
        }
        if (!sessionStorage.getItem(landingImg) && landingImageUrl) {
            console.log("set landing");
            sessionStorage.setItem(landingImg, JSON.stringify(landingImageUrl));
        }
        if (!sessionStorage.getItem(amenityImgs) && amenitiesUrls.length > 0) {
            console.log("set amenities");
            sessionStorage.setItem(amenityImgs, JSON.stringify(amenitiesUrls));
        }
    }, [landingImageUrl, houses, amenitiesUrls]);

    return (
        <>
            <LandingSection amenitiesImageUrls={amenitesAll} scrollTo={handleScrollTo} />
            <AmenitiesSection amenitiesUrls={amenitiesUrls} />
            <OfferSection houses={houses} />
            <ContactSection />
        </>
    );
}

export default MainPage;