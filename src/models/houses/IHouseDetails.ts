import IAmenity from "./amenities/IAmenity";

export default interface IHouseDetails {
    amenities: IAmenity[],
    capacity: number,
    getDetailsNode: () => React.ReactNode
}