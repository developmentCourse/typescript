//clases abstactas
abstract class Asset {
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    name:string = "";
    getcoords():string{
        return`{"x":${this.x}, "y":${this.y}}`;
    }
    abstract move(): boolean;
}
class Hero extends Asset {
    constructor(name: string){
        super();
        this.name =name;
    }
    move(): boolean{
        return true;
    }
}
const hero: Asset = new Hero("TypeScript");
console.log(hero.move);