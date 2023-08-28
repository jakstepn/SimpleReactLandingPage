import FireplaceAmenity from "./FireplaceAmenity";
import FridgeAmenity from "./FridgeAmenity";
import HeatingAmenity from "./HeatingAmenity";
import IAmenity from "./IAmenity";
import ShowerAmenity from "./ShowerAmenity";
import TvAmenity from "./TvAmenity";
import WcAmenity from "./WcAmenity";

export default class AmenityPicker {
    public static getAmenity(amenityType: string): IAmenity {
        switch (amenityType) {
            case "fireplace":
                return new FireplaceAmenity();
            case "fridge":
                return new FridgeAmenity();
            case "heating":
                return new HeatingAmenity();
            case "shower":
                return new ShowerAmenity();
            case "tv":
                return new TvAmenity();
            case "wc":
                return new WcAmenity();
            default:
                return new FireplaceAmenity();
        }
    }
}