


export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    //we add a constructor so we can instantiate with "new" keyword and pass the arguments right to the constructor
    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}