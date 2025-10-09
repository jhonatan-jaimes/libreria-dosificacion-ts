
export class Areas {
    private areaOne: number;
    private areaAll: number;

    constructor(areaOne: number, areaAll: number) {
        this.areaOne = areaOne;
        this.areaAll = areaAll;
    }

    public getAreaOne(): number {
        return this.areaOne;
    }
    public setAreaOne(areaOne: number): void {
        this.areaOne = areaOne;
    }

    public getAreaAll(): number {
        return this.areaAll;
    }

    public setAreaAll(areaAll: number): void {
        this.areaAll = areaAll;
    }
}
