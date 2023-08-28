import { Fireplace } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class FireplaceAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "fireplace";
    }

    getIcon(key?: string | number) {
        return (
            <Fireplace
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}