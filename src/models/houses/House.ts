import IHouseDetails from "./IHouseDetails";

export interface HouseProps {
    images?: string[],
    shortDesc: string,
    descriptionDetailsHeader?: string,
    descriptionDetails: string[],
    details?: IHouseDetails,
    name?: string
}

export default class House {
    images?: string[];
    shortDesc: string;
    descriptionDetailsHeader: string;
    descriptionDetails: string[];
    details?: IHouseDetails;
    name: string;

    constructor(props: HouseProps) {
        this.images = props.images;
        this.shortDesc = props.shortDesc ?? "";
        this.descriptionDetailsHeader = props.descriptionDetailsHeader ?? "";
        this.descriptionDetails = props.descriptionDetails
        this.details = props.details;
        this.name = props.name ?? "No name!";
    }
}