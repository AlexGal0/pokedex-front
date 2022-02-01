

export class Pokemon {
    public id      : number;
    public name    : string;
    public height  : number;
    public weight  : number;
    public sprites : Sprite;
    public abilities: Ability[];
}


export class Sprite {
    public front_default : string;
    public back_default : string;
}

export class Ability{
    public name     : string;
    public url      : string;
    public ability  : Ability;
}
