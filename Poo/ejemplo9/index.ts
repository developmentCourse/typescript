interface Asset {
    x: number;
    y: number;
    whidth: number;
    height: number;
    name: string;

    getCoords(): string;
}
class Hero implements Asset{
    x: number = 0;
    y: number =0;
    whidth: number = 0;
    height: number = 0;
    name: string;
    constructor(name: string){
        this.name = name;
    }
    getCoords(): string{
        return "coords Hero"
    }
}
class Bullet implements Asset {
    x: number = 0;
    y: number = 0;
    whidth: number = 0;
    height: number = 0;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getCoords(): string {
        return "coords Bullet"
    }
}
class Enemy implements Asset{
    x: number;
    y: number;
    whidth: number;
    height: number;
    name: string;
    constructor(name: string, x: number = 0, y: number = 0, whidth: number = 0, height: number = 0) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.whidth = whidth;
        this.height = height;
    }
    getCoords():string{
        return "coords Enemy"
    }
}
 class Collisions {
     static check(asset1: Asset, asset2: Asset){
        console.log(`${asset1.name} x1= ${asset1.x}, x2= ${asset1.y}`);
        console.log(`${asset2.name} x1= ${asset2.x}, x2= ${asset2.y}`);

     }
 }
const hero: Asset = new Hero("TypeScript");
const bullet: Asset = new Bullet("Bala");
const enemy: Asset = new Enemy("ViaualB", 2, 5);
Collisions.check(hero,enemy);
