export class Point {

    constructor(private m_x?: number, private m_y?: number) {
    }

    public draw() {
        console.log("X: " + this.m_x + ", Y: " + this.m_y);
    }

    public set x(value: number) {
        this.m_x = value;
    }

    public get x() {
        return this.m_x;
    }
}
