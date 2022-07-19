export class Danmaku {
    text: string
    dm_time: number
    send_time: number
    crc32_id: string
    color: string
    weight: number
    id: number
    id_str: string
    action: number
    mode: DmMode|number
    font_size: DmFontSize|number
    is_sub: boolean
    pool: number
    attr: number

    constructor (
        text: string,
        dm_time: number=0,
        send_time: number=0,
        crc32_id: string="",
        color: string="ffffff",
        weight: number=-1,
        id: number=-1,
        id_str: string="",
        action: number=-1,
        mode: DmMode|number=DmMode.FLY,
        font_size: DmFontSize|number=DmFontSize.NORMAL,
        is_sub: boolean=false,
        pool: number=0,
        attr: number=-1,
    ) {
        this.text = text;
        this.dm_time = dm_time;
        this.send_time = send_time;
        this.crc32_id = crc32_id;
        this.color = color;
        this.weight = weight;
        this.id = id;
        this.id_str = id_str; 
        this.action = action;
        this.mode = mode;
        this.font_size = font_size;
        this.is_sub = is_sub;
        this.pool = pool;
        this.attr = attr;
    }
}

export enum DmFontSize {
    EXTREME_SMAL = 12,
    SUPER_SMALL = 16,
    SMALL = 18,
    NORMAL = 25,
    BIG = 36,
    SUPER_BIG = 45,
    EXTREME_BIG = 64
}

export enum DmMode {
    FLY = 1,
    TOP = 5, 
    BOTTOM = 4,
    REVERSE = 6
}
