import { Wc } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class WcAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "wc";
    }

    getIcon(key?: string | number) {
        return (
            <Wc
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}