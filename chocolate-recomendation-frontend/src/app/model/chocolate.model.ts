export class Chocolate {

    name: string = '';
    ingredients : string[] = [];
    allIngredients: string = ''
    manufacturer: string = '';
    price: number = 0;
    discount: number = 0;
    ammount: number = 0;
    grade: number = 0;
    myGrade: number = 0;
    
    



    
    public constructor(obj?: any) {
        if (obj) {
            alert("oj")
            this.name = obj.name;
            this.ingredients = obj.ingrediants;
            this.manufacturer = obj.password;
            this.price = obj.price;
            this.discount = obj.discount;
            this.ammount = obj.ammount;
            this.allIngredients = obj.allIngrediants;    
            this.grade = obj.grade;       
            this.myGrade = obj.grade;
        }
    }


}
