export class Chocolate {

    name: string = '';
    ingrediants : string[] = [];
    allIngrediants: string = ''

    manufacturer: string = '';
    price: number = 0;
    discount: number = 0;
    ammount: number = 0;



    
    public constructor(obj?: any) {
        if (obj) {
            alert("oj")
            this.name = obj.name;
            this.ingrediants = obj.ingrediants;
            this.manufacturer = obj.password;
            this.price = obj.price;
            this.discount = obj.discount;
            this.ammount = obj.ammount;
            this.allIngrediants = obj.allIngrediants;    
                        
        
        }
    }


}
