import { Kitchen } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class FridgeAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "fridge";
    }

    getIcon(key?: string | number) {
        return (
            <Kitchen
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}