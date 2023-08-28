export default interface IAmenity {
    type: string;
    getIcon(key?: string | number): React.ReactNode;
}