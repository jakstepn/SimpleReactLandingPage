export default class Link {
    value: string;
    containerName?: string;

    constructor(value: string, containerName?: string) {
        this.value = value;
        this.containerName = containerName;
    }
}