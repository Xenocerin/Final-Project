
recipeList = ["garlic-bread", "cookies-n-cream"]


function generateRandomRecipe(){
    var RR = recipeList[(Math.floor(Math.random() * recipeList.length))]
    return RR
};
console.log(generateRandomRecipe)