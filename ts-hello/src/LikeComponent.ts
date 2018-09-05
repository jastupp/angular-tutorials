export class LikeComponent {

    constructor(private m_count: number,
                private m_selected: boolean) {

    }

    onClick() {
        this.m_count += this.m_selected ? -1 : 1;
        this.m_selected = !this.m_selected;
    }

    public get count() {
        return this.m_count;
    }

    public get selected() {
        return this.m_selected;
    }
}