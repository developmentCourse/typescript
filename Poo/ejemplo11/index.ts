namespace dev.ejuarez{
    export const URL: string = "http://syscode";
    //en el momento de poner  export  la clase podra ser reutilizada
    export class  Youtube{
        private _name:string
        constructor(name: string){
            this._name = name;
        }
        get name(): string{
            return this._name;
        }
        set name(name: string){
            this._name = name;

        }
    } 
    class Vimeo {
        private _name:string;
        constructor(name: string){
            this._name = name;          
        }
        get name():string{
            return this._name;
        }
        set name(name:string){
            this._name = name;
        }
    }
}
let youtube: dev.ejuarez.Youtube = new dev.ejuarez.Youtube("TypeScript");
console.log(youtube.name);
console.log(dev.ejuarez.Youtube);