export class Chocolate {

    name: string = '';
    ingredients : string[] = [];
    allIngredients: string = ''
    manufacturer: string = '';
    price: number = 0;
    discount: number = 0;
    amount: number = 0;
    grade: number = 0;
    myGrade: number = 0;
    weight: number = 0;
    sugarContent: number = 0;
    nutriScore: number = 0;
    score: number = 0;
    calories: number = 0;
    stars: number[] = [];
    emptyStars: number[] = [];



    
    public constructor(obj?: any) {
        if (obj) {
            this.name = obj.name;
            this.ingredients = obj.ingrediants;
            this.manufacturer = obj.password;
            this.price = obj.price;
            this.discount = obj.discount;
            this.amount = obj.amount;
            this.allIngredients = obj.allIngrediants;    
            this.grade = obj.grade;       
            this.myGrade = obj.grade;
            this.weight = obj.weight;
            this.sugarContent = obj.sugarContent;
            this.nutriScore = obj.nutriScore;
            this.score = obj.score;
            this.calories = obj.calories;
            this.stars = obj.stars;
            this.emptyStars = obj.stars;

        }
    }


}
