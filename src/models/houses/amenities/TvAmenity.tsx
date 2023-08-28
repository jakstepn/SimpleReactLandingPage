import { Tv } from "@mui/icons-material";
import IAmenity from "./IAmenity";

export default class TvAmenity implements IAmenity {
    type: string;

    constructor() {
        this.type = "tv";
    }

    getIcon(key?: string | number) {
        return (
            <Tv
                key={key}
                sx={{
                    color: 'black',
                    padding: 0,
                    margin: 0
                }} />
        );
    }
}