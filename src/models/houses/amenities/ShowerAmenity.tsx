import { Shower } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class ShowerAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "shower";
    }

    getIcon(key?: string | number) {
        return (
            <Shower
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}