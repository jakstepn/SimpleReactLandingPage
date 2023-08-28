import { HeatPump } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class HeatingAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "heating";
    }

    getIcon(key?: string | number) {
        return (
            <HeatPump
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}