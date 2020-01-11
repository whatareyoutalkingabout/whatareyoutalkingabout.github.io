import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recipeapp';
  banner = 'My Recipes';
  recipeList = sortRecipes(recipesList);


}

// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "Goodall");

// console.log(greeter(user));

let recipesList = [{
  "_id": {
      "$oid": "5262f870e4b0d8dafb89a499"
  },
  "name": "Horse's Neck",
  "amount": [
      "4",
      "12",
      "1"
  ],
  "amountType": [
      "Parts",
      "Parts",
      "Dash"
  ],
  "glass": "highball",
  "type": "cocktail",
  "ingredient": [
      "Cognac",
      "Ginger Ale",
      "Angostura bitters (optional)"
  ],
  "garnish": "Lemon twist",
  "note": [
      "Build into highball glass with ice cubes.",
      "Stir gently.",
      " If required, add dashes of Angostura bitters."
  ]
},
{
  "_id": {
      "$oid": "5262f82ae4b0d8dafb89a498"
  },
  "name": "Mojito",
  "amount": [
      "4",
      "3",
      "6",
      "2",
      "&nbsp;"
  ],
  "amountType": [
      "Parts",
      "Parts",
      "Sprigs",
      "tsp",
      "&nbsp;"
  ],
  "glass": "collins",
  "type": "cocktail",
  "ingredient": [
      "White rum",
      "Lime juice",
      "Mint",
      "white sugar",
      "Soda water"
  ],
  "garnish": "Mint leaves and lemon slice",
  "note": [
      "Muddle mint springs with sugar and lime juice.",
      "Add splash of soda water",
      "Fill glass with cracked ice.",
      "Pour rum and top with soda water."
  ]
},
{
  "_id": {
      "$oid": "5262f7dae4b0d8dafb89a495"
  },
  "name": "Tuxedo",
  "amount": [
      "3",
      "3",
      "1/2",
      "1/4",
      "3"
  ],
  "amountType": [
      "Parts",
      "Parts",
      "tsp",
      "tsp",
      "Dashes"
  ],
  "glass": "martini",
  "type": "cocktail",
  "ingredient": [
      "Gin",
      "Vermouth",
      "Maraschino",
      "Absinthe",
      "Orange Bitters"
  ],
  "garnish": "Cherry and lemon twist",
  "note": [
      "Stir all ingredient with ice and strain into cocktail glass."
  ]
},
{
  "_id": {
      "$oid": "5262f5fbe4b0d8dafb89a48f"
  },
  "name": "Bacardi",
  "amount": [
      "4 1/2",
      "2",
      "1"
  ],
  "amountType": [
      "Part",
      "Part",
      "Part"
  ],
  "glass": "martini",
  "type": "cocktail",
  "ingredient": [
      "White rum",
      "Lime juice",
      "Grenadine"
  ],
  "note": [
      "Shake with ice cubes. Strain into chilled cocktail glass."
  ]
},
{
  "name": "The Scofflaw",
  "amount": [
      "1.5",
      "1",
      "0.75",
      "0.75"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Rye",
      "Dry Vermouth",
      "Lemon Juice",
      "Grenadine (pomegranate)"
  ],
  "note": [
      "Shake in a iced cocktail shaker, and strain into a cocktail glass.",
      "Garnish with a lemon twist."
  ],
  "garnish": "Lemon twist",
  "type": "cocktail",
  "glass": "Cocktail",
  "_id": {
      "$oid": "5341f3b7f7923a3215000001"
  }
},
{
  "_id": {
      "$oid": "555893c6eb4d161100000001"
  },
  "name": "Blender Hollandaise Sauce",
  "amount": [
      "3",
      " 1/4",
      "1",
      "1",
      " 1/2"
  ],
  "amountType": [
      " ",
      "tsp",
      "Tbls",
      "dash",
      "cup"
  ],
  "ingredient": [
      "egg yolks",
      "Dijon mustard",
      "lemon juice",
      "hot pepper sauce (e.g. Tabasco™)",
      " butter"
  ],
  "note": [
      "In the container of a blender, combine the egg yolks, mustard, lemon juice and hot pepper sauce. Cover, and blend for about 5 seconds.",
      "Place the butter in a glass measuring cup. Heat butter in the microwave for about 1 minute, or until completely melted and hot. Set the blender on high speed, and pour the butter into the egg yolk mixture in a thin stream. It should thicken almost immediately. Keep the sauce warm until serving by placing the blender container in a pan of hot tap water."
  ],
  "garnish": "",
  "type": "food",
  "glass": ""
},
{
  "_id": {
      "$oid": "52a87a29172c3aee29000001"
  },
  "name": "Merry Gentleman",
  "amount": [
      "1 1/2",
      "1/2",
      "2",
      "2"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Crown Royal Whisky",
      "lemon juice",
      "Pomegranate juice",
      "Ginger ale"
  ],
  "note": [
      "Fill rocks glass with ice.",
      "Add whisky, lemon juice, pomegranate juice.",
      "Top with ginger ale.",
      "Garnish with a mint leaf."
  ],
  "garnish": "Mint leaf",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "52a87cba172c3aee29000003"
  },
  "name": "Cinnamon Cosmo",
  "amount": [
      "1 1/2",
      "1/8",
      "1",
      "2",
      "3"
  ],
  "amountType": [
      "oz.",
      "",
      "oz.",
      "oz.",
      "&nbsp;"
  ],
  "ingredient": [
      "Stolichnaya Vodka",
      "Lemon",
      "Cinnamon syrup (recipe found in cocktail list)",
      "Cranberry juice",
      "frozen Cranberries"
  ],
  "note": [
      "Rim a cocktail glass with lemon juice and dip in sugar.",
      "In a shaker filled with ice, add vodka, lemon juice, cinnamon syrup and cranberry juice.",
      "Shake and strain into the cocktail glass and garnish with cranberries."
  ],
  "garnish": "cranberries (frozen) and sugar",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "52a87daa172c3aee29000004"
  },
  "name": "Cinnamon Syrup",
  "amount": [
      "1",
      "1",
      "4"
  ],
  "amountType": [
      "Cup",
      "Cup",
      "&nbsp;"
  ],
  "ingredient": [
      "boiling water",
      "sugar",
      "cinnamon sticks"
  ],
  "note": [
      "Mix sugar and cinnamon sticks to boiling water. ",
      "Let cool.",
      "Refrigerate, covered. Lasts 2 weeks."
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": ""
},
{
  "_id": {
      "$oid": "52a87e88172c3aee29000005"
  },
  "name": "Forty Nights",
  "amount": [
      "1 1/2",
      "1/2",
      "&nbsp;"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "&nbsp;"
  ],
  "ingredient": [
      "Forty Creek Cream Liquor",
      "Peppermint Schnapps",
      "hot chocolate (White or Dark)"
  ],
  "note": [
      "In a heat proof mug, add ingredients in order.",
      "Garnish with whipped cream and crushed candy canes."
  ],
  "garnish": "Whipped cream and crushed candy canes",
  "type": "cocktail",
  "glass": ""
},
{
  "_id": {
      "$oid": "52a87f3f172c3aee29000006"
  },
  "name": "Blizzard Kiss",
  "amount": [
      "1 1/2",
      "1/2",
      "2"
  ],
  "amountType": [
      "oz.",
      "c.",
      "oz."
  ],
  "ingredient": [
      "Baileys",
      "frozen strawberries",
      "cream"
  ],
  "note": [
      "In a shaker filled with ice, add all ingredients.",
      "Shake and strain into a cocktail glass.",
      "Garnish with a fresh sugar coated strawberry."
  ],
  "garnish": "Sugared strawberry",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "52559e1de4b093be090ed971"
  },
  "name": "Gin and Tonic",
  "amount": [
      "1",
      "5"
  ],
  "amountType": [
      "Parts",
      "Parts"
  ],
  "ingredient": [
      "1 pt Gin",
      "5 pt Tonic"
  ],
  "note": [
      "Add to glass with ice and enjoy"
  ],
  "type": "cocktail"
},
{
  "_id": {
      "$oid": "52a886b7172c3aee29000008"
  },
  "name": "Spiced Apple Cocktail",
  "amount": [
      "1 1/2",
      "4"
  ],
  "amountType": [
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Spiced Rum",
      "apple cider, chilled"
  ],
  "note": [
      "Fill glass with ice.",
      "Add spiced rum and top with chilled apple cider.",
      "Garnish with apple slice,"
  ],
  "garnish": "Apple slice",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "5262f771e4b0d8dafb89a493"
  },
  "name": "Rose",
  "amount": [
      "2",
      "4",
      "3"
  ],
  "amountType": [
      "Part",
      "Part",
      "Dashes"
  ],
  "glass": "martini",
  "type": "cocktail",
  "ingredient": [
      "Kirsch",
      "Vermouth",
      "Strawberry syrup"
  ],
  "note": [
      "Stir all ingredient with ice and strain into a cocktail glass."
  ]
},
{
  "_id": {
      "$oid": "5339aeeb40cf550200000001"
  },
  "name": "Moscow Mule",
  "amount": [
      "1/2",
      "4",
      "5"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Lime Juice",
      "Vodka",
      "Ginger Beer"
  ],
  "note": [
      "Squeeze lime juice into a Collins glass (or Moscow Mule mug) and drop in the spent shell. Add 2 or 3 ice cubes, then pour in the vodka and fill with cold ginger beer (not ginger ale, although what the hell). Serve with a stirring rod."
  ],
  "garnish": "Lime",
  "type": "cocktail",
  "glass": ""
},
{
  "_id": {
      "$oid": "52a87b55172c3aee29000002"
  },
  "name": "Reindeer Cafe",
  "amount": [
      "1",
      "1/2",
      "4"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "1 oz Kahlua Coffee Liqueur",
      "1/2 oz cherry brandy",
      "4 oz Hot brewed coffee"
  ],
  "note": [
      "To a heat proof mug, add Kahlua and cherry brandy.",
      "Top with coffee.",
      "Garnish with a dollop of whipped cream. cherry and shaved chocolate."
  ],
  "garnish": "Whipped cream, Chocolate (Shaved) and a cherry",
  "type": "cocktail",
  "glass": "Highball"
},
{
  "_id": {
      "$oid": "528d0248d474736c0a000001"
  },
  "name": "Mojito (the Real deal)",
  "amount": [
      "3",
      "10",
      "1 1/2",
      "2",
      "1/2",
      "&nbsp;"
  ],
  "amountType": [
      "&nbsp;",
      "&nbsp;",
      "oz.",
      "Tbls",
      "oz.",
      "&nbsp;"
  ],
  "ingredient": [
      "lime slices",
      "Mint leaves",
      "White Rum",
      "sugar",
      "Carbonated Water (approx.)",
      "ice"
  ],
  "note": [
      "Place mint leaves into glass with 1 lime slice and crush with a muddler.",
      "Add 2 more Lime slices and sugar to the glass and muddle once more.",
      "Fill glass almost to the top with ice.",
      "Add Rum and fill glass with Carbonated water. (approx. 1/2 cup)."
  ],
  "garnish": "Lime",
  "type": "cocktail",
  "glass": "Highball"
},
{
  "_id": {
      "$oid": "528bc6f45094c9b405000001"
  },
  "name": "Grand Deco",
  "amount": [
      "1 1/2",
      "2",
      "2",
      "3"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      ""
  ],
  "ingredient": [
      "Grand Marnier",
      "cranberry juice",
      "ginger ale or ginger beer.",
      "Kumquats"
  ],
  "note": [
      "Pour Grand Marnier into a tall glass filled with ice.",
      "Add cranberry juice and ginger ale or ginger beer.",
      "Garnish with sliced kumquats and a mint leaf."
  ],
  "garnish": " Mint leaf ",
  "type": "cocktail",
  "glass": "Highball"
},
{
  "_id": {
      "$oid": "5289545229c8146d10000001"
  },
  "name": "Lemon Gingerini",
  "amount": [
      "2 1/2",
      "3/4",
      "1/2oz."
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Hendricks Gin",
      "Lemon Juice",
      "Ginger syrup (how to make below)"
  ],
  "note": [
      "Before you begin - DO NOT put ginger ale in this drink. You need to either make ginger syrup, which is simple syrup (2 parts sugar dissolved into 1 part water) with a few chunks of ginger placed in it - use enough ginger to give a strong ginger flavour. Or just grate about a 3/4 inch chunk of ginger and squeeze the juice from that into the drink with about a tablespoon of sugar. I hope this doesn't prevent anyone from trying this drink, because it is very good!",
      "Once you have everything: Add 0.5 oz of ginger syrup (or whatever you decided on), 0.75 oz of lemon juice, and 2.5-3 oz of gin (I prefer Hendricks) to a large glass.",
      "Add 4-6 ice cubes and stir until cold.",
      "Serve in martini glass.",
      "Garnish with candied ginger and lemon peel.",
      "Make sure to squeeze lemon peel over glass before serving - this releases oils that make the drink taste better.\nIf you don't believe me compare two drinks, one with and the other without lemon oil squeezed on top."
  ],
  "garnish": "Candied Ginger and lemon twist",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "52893df69c30b9120f000001"
  },
  "name": "Whisky Sour",
  "amount": [
      "2",
      "3",
      "2",
      "1"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "2 oz. Blue Curacao",
      "3 oz. Jagermeister",
      "2 oz. Orange Juice",
      "1 oz. Grenadine"
  ],
  "note": [
      "In a chilled martini glass pour the grenadine",
      "Then gently pour the orange juice onto the concave side of a spoon and into the glass",
      "Repeat the pouring process for the blue curacao and then the jagermeister",
      "Should be layered"
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "52892d1e81051a6e0e000001"
  },
  "name": "Strawberry Mint Sangria",
  "amount": [
      "2",
      "1/2",
      "1 1/2",
      "1",
      "12"
  ],
  "amountType": [
      "Cup",
      "Cup",
      "Oz.",
      "Bottle",
      "Oz."
  ],
  "ingredient": [
      "Sliced strawberries",
      "fresh mint leaves",
      "brandy",
      "dry wine(assuming red)",
      "club soda"
  ],
  "note": [
      "In a large glass pitch combine strawberries, mint leaves, brandy and wine. Place into refrigerator to chill",
      "Before serving add club soda.",
      "Serve with a sprig of mint."
  ],
  "garnish": "mint sprig",
  "type": "cocktail",
  "glass": "Wine Glass"
},
{
  "_id": {
      "$oid": "526d8bdde4b0e25391f0464f"
  },
  "name": "Cream of Pablano soup",
  "amount": [
      "1",
      "1",
      "3",
      "2",
      "1/2",
      "4",
      "1",
      "8",
      "&nbsp;",
      "8",
      "1"
  ],
  "amountType": [
      "Tbl",
      "Tbl",
      "&nbsp;",
      "&nbsp;",
      "&nbsp;",
      "Cup",
      "&nbsp;",
      "Oz.",
      "&nbsp;",
      "&nbsp;",
      "Cup"
  ],
  "ingredient": [
      "olive oil",
      "butter",
      "diced poblano peppers, seeds and membranes removed",
      "medium onions, diced",
      "carrot, diced",
      "low sodium vegetable stock",
      "large white potato, diced",
      "Mexican crema fresca (sub. sour cream or creme fraiche)",
      "chopped cilantro for garnish",
      "large tortilla chips",
      "Chihuahua cheese, shredded (or you can use cheddar or monterey jack if you prefer)"
  ],
  "note": [
      "In a soup pot or stock pot heat the oil and butter until the butter starts to sizzle.",
      "Add the peppers, onions, and carrot and sautee 5 minutes, stirring to coat the vegetables with the oil and butter.",
      "Add the potatoes and stock. Bring to a boil, then reduce to a simmer. Cover and cook for 30 minutes until potatoes and carrots are soft.",
      "Using an immersion blender, blend soup thoroughly until uniformly smooth.",
      "Serve in oven-proof bowls. Place two tortilla chips on top of each bowl, sprinkle 1/4 of the cheese on top of the bowl and set under a broiler until the cheese is melted and golden brown.",
      "If you like it spicier, don't get rid of all the seeds and membranes of the poblanos and make the soup a day or two ahead of time. It just gets spicier and more complex as it sits in the refrigerator."
  ],
  "type": "food"
},
{
  "name": "The Boulevardier",
  "amount": [
      "1.5",
      "1",
      "1"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Bourbon",
      "Campari",
      "Sweet Vermount"
  ],
  "note": [
      "Stir long and well with ice in a mixing glass and strain into a cocktail glass.",
      "Garnish with a cherry."
  ],
  "garnish": "Cherry",
  "type": "cocktail",
  "glass": "Cocktail",
  "_id": {
      "$oid": "534198b7347daa5912000001"
  }
},
{
  "_id": {
      "$oid": "533ef72414e7e90200000001"
  },
  "name": "The Corpse Reviver",
  "amount": [
      "1",
      "1",
      "1",
      "1",
      "3"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz.",
      "drops"
  ],
  "ingredient": [
      "Gin",
      "Cointreau",
      "Lillet Blanc",
      "Lemon juice (fresh)",
      "absinth or Pastis"
  ],
  "note": [
      "Shake in an iced cocktail shaker, and strain into a cocktail glass.",
      "Drop a stemless cherry into the bottom of the glass."
  ],
  "garnish": "Stemless Cherry (optional)",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "name": "Margarita",
  "amount": [
      "1.5",
      "1",
      "0.5"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Tequila",
      "Lime Juice",
      "Cointreau"
  ],
  "note": [
      "If using salt, place in a shallow dish. Moisten the rim of a rocks glass with a dampened paper towel, then dip in salt.",
      "Fill the glass with ice; add tequila, lime juice, and Cointreau; and stir a few times until chilled. Serve immediately."
  ],
  "garnish": "Salt",
  "type": "cocktail",
  "glass": "Cocktail",
  "_id": {
      "$oid": "5341f4dcf7923a3215000002"
  }
},
{
  "name": "Hot Artichoke Dip",
  "amount": [
      "1",
      "1",
      "1",
      "14",
      "2"
  ],
  "amountType": [
      "cup",
      "cup",
      "cup",
      "oz.",
      " "
  ],
  "ingredient": [
      "mayonaise",
      "parmesan cheese",
      "mozzarella cheese",
      "chopped artichokes (1 can)",
      "cloves garlc, chopped"
  ],
  "note": [
      "Mix all ingredients then bake, uncovered at 325 degrees for 25 minutes."
  ],
  "garnish": "",
  "type": "food",
  "glass": "",
  "_id": {
      "$oid": "53449681473b840200000001"
  }
},
{
  "name": "Chocolate-mint Martini",
  "amount": [
      "2",
      "1",
      "3/4"
  ],
  "amountType": [
      "parts",
      "part",
      "part"
  ],
  "ingredient": [
      "Vodka",
      "Crème de cacao",
      "Crème de ment"
  ],
  "note": [
      "Mix ingredients in a cocktail shaker. ",
      "Ice ice and stir. ",
      "Pour into cocktail glass and serve. "
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": "Cocktail",
  "_id": {
      "$oid": "534de2468e8da60200000001"
  }
},
{
  "_id": {
      "$oid": "541dbd512148680200000001"
  },
  "name": "Manhattan",
  "amount": [
      "2",
      " 1/2",
      "1",
      "1"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "dash",
      " "
  ],
  "ingredient": [
      "Whiskey",
      "Sweet Vermouth",
      "Bitters",
      "Ice Cube"
  ],
  "note": [
      "Place ice in a mixing glass. Pour in vermouth, then whiskey, and stir. Strain into a cocktail glass. Add a dash of bitters if desired, and garnish with a cherry.",
      "To make a Dry Manhattan\nUse the same recipe, but substitute dry vermouth for the sweet, and garnish with a twist of lemon peel instead of a cherry."
  ],
  "garnish": "maraschino cherry",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "541dcb892148680200000002"
  },
  "name": "The Algonquin Cocktail",
  "amount": [
      "1 1/2",
      "3/4",
      "3/4"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Rye",
      "Dry Vermouth",
      "Pineapple Juice"
  ],
  "note": [
      "Shake in an iced cocktail shaker, and strain into a cocktail glass."
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "541dcc402148680200000003"
  },
  "name": "The Aviation",
  "amount": [
      "2 1/2",
      "3/4",
      "2"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "dashes"
  ],
  "ingredient": [
      "Gin",
      "Lemon Juice (Fresh)",
      "Maraschino Liqueur"
  ],
  "note": [
      "Shake in an iced cocktail shaker, and strain into a cocktail glass.",
      "Garnish with a lemon twist"
  ],
  "garnish": "Lemon twist",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "541ddfe22148680200000004"
  },
  "name": "Alice in Wonderland",
  "amount": [
      "1",
      "1",
      "1"
  ],
  "amountType": [
      "part",
      "part",
      "part"
  ],
  "ingredient": [
      "Amaretto",
      "Grand Marnier",
      "Southern Comfort"
  ],
  "note": [
      "Use an old fashioned glass, and add one part Amaretto, one part Grand Marnier, one part Southern Comfort."
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "541de0bd2148680200000005"
  },
  "name": "Tom Collins",
  "amount": [
      "2",
      " ",
      "1",
      " 1/2"
  ],
  "amountType": [
      "oz.",
      " ",
      "oz.",
      "tsp"
  ],
  "ingredient": [
      "Gin",
      "Fill with Club Soda or Carb Water",
      "Lemon",
      "Sugar"
  ],
  "note": [
      "Shake ingredients in a cocktail shaker with ice. Strain into a collins glass with ice and garnish with an orange slice and a maraschino cherry."
  ],
  "garnish": "Maraschino Cherry and an Orange Wedge",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "547a8b94c0ea870200000001"
  },
  "name": "Grand Old Fashioned",
  "amount": [
      "1 1/2",
      "2",
      "1"
  ],
  "amountType": [
      "oz.",
      "dashes",
      " "
  ],
  "ingredient": [
      "Grand Marnier",
      "Angostura Bitters",
      "Orange Disc"
  ],
  "note": [
      "Muddle the orange disc, add ice and stir. Strain over ice in an old fashioned glass and garnish with an orange rind and cherry"
  ],
  "garnish": "Marachino cherry",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "547a8cae3f267d0b00000001"
  },
  "name": "Grand Julep",
  "amount": [
      "1 3/4",
      "1",
      "5"
  ],
  "amountType": [
      "oz.",
      "dash",
      " "
  ],
  "ingredient": [
      "Grand Marnier",
      "Angostura Bitters",
      "Mint Leaves"
  ],
  "note": [
      "Muddle mint leaves with bitters, fill the glass with crushed ice and add grand marnier."
  ],
  "garnish": "Mint Leaves",
  "type": "cocktail",
  "glass": "Lowball"
},
{
  "_id": {
      "$oid": "554fed9fdde9ee1100000001"
  },
  "name": "Vermouth",
  "amount": [
      "2",
      "1",
      " 1/3",
      " 1/3",
      "3",
      " 1/3",
      "1",
      "1",
      " 1/3",
      " 1/3",
      "2",
      "2"
  ],
  "amountType": [
      "tsp",
      "tsp",
      "tsp",
      "tsp",
      " ",
      "tsp",
      " ",
      " ",
      "tsp",
      "tsp",
      " ",
      "cups"
  ],
  "ingredient": [
      "dried wormwood* (may omit or substitute another herb)(heeping)",
      "dried gentian root (not powder)(heeping)",
      "dried chamomile leaves",
      "juniper berries",
      "cinnamon sticks",
      "dried sage",
      "orange rind",
      "lemon rind",
      "cardamom pods",
      "coriander seeds",
      "750 mL bottles light white wine (Pinot Grigio, Grüner Veltliner or similar)",
      "dry or sweet Sherry"
  ],
  "note": [
      "Place all herbs and spices into a stockpot. Cover with both bottles of white wine. Bring ingredients to a boil, and then remove from the heat. After the mixture has cooled, set the pot in a cool, dark place overnight.\n\nThe next day, fortify the wine by adding 2 cups of Palo Cortado or Fino Sherry for dry Vermouth, or 2 cups of sweet or cream Sherry for sweet Vermouth. Strain mixture before serving. Yields about 2 liters."
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": "Pitcher"
},
{
  "_id": {
      "$oid": "55888887bba06f1100000001"
  },
  "name": "Ground Pork Lo Mein",
  "amount": [
      "9",
      "1",
      "1",
      "1",
      " 1/2",
      " 1/2",
      "2",
      "1",
      "2",
      "2",
      " 1/2",
      "2",
      "3"
  ],
  "amountType": [
      "oz.",
      "Tbls",
      "Tbls",
      "Tbls",
      "tsp",
      "tsp",
      "Tbls",
      "lb",
      "tsp",
      "tsp",
      "cup",
      "cups",
      "Tbls"
  ],
  "ingredient": [
      "Chinese-style fresh egg noodles, linguine or fettuccine",
      "soy sauce",
      "oyster sauce",
      "dry sherry",
      "sugar",
      "salt",
      "vegetable oil",
      "ground pork",
      "chopped fresh ginger",
      "chopped garlic",
      "shredded carrots",
      "bean sprouts or shredded napa cabbage",
      "chopped green onion"
  ],
  "note": [
      "Bring a large pot of salted water to a rolling boil over high heat. Add noodles and stir to separate. Cook until just tender but still firm, 2 to 4 minutes. Quickly drain, rinse with cool water, then drain again. You should have about 31/4 cups cooked noodles.",
      "In a small bowl, combine soy and oyster sauces, sherry, sugar and salt, and stir well to dissolve. Set aside.",
      "Heat a wok or large skillet over medium-high heat. Add oil and swirl to coat pan. Add pork and ginger and cook until meat is no longer pink, about 3 minutes. Add garlic and carrots and toss well. Cook until carrots have wilted, about 1 minute. Add sprouts or cabbage and noodles and toss well to mix ingredients together. Add soy sauce mixture and cook, tossing often, 1 to 2 minutes. Add the green onion and toss again. Transfer to a serving plate and serve hot or warm."
  ],
  "garnish": "",
  "type": "food",
  "glass": ""
},
{
  "_id": {
      "$oid": "52ac9fdb509e155d05000001"
  },
  "name": "Tiramisu",
  "amount": [
      "6",
      "1",
      "1 1/4",
      "1 3/4",
      "2 - 12",
      "1/2",
      "1/4",
      "1"
  ],
  "amountType": [
      "oz.",
      "&nbsp;",
      "c.",
      "c.",
      "oz.",
      "c.",
      "c.",
      "Tbl"
  ],
  "ingredient": [
      "egg yolks",
      "sugar",
      "mascarpone cheese",
      "heavy whipping cream",
      "packages Italian Lady fingers",
      "cold espresso",
      "coffee flavored Liquor (optional)",
      "cocoa for dusting"
  ],
  "note": [
      "Combine egg yolks and sugar in the top of a double boiler, over boiling water. Reduce heat to low, and cook for about 10 minutes, stirring constantly. This is your sabayon, remove from the heat and whip yolks until thick and lemon coloured.",
      "Add Mascarpone to whipped yolks, beat until combined. \nIn a separate bowl, whip cream to stiff peaks. Gently fold the whipped cream in the mascarpone sabayon mixture and set aside.",
      "Mix the cold espresso with the coffee liquor and dip the lady fingers into the mixture just long enough to get them wet, do not soak them!",
      "Arrange the lady fingers in the bottom of a 8 inch square baking dish (or 6×9) \nSpoon half the mascarpone cream filling over the lady fingers.",
      "Repeat process with another layer. \nRefrigerate 4 hours or overnight. \nDust with cocoa before serving"
  ],
  "garnish": "Cocoa",
  "type": "food",
  "glass": "",
},
{
  "_id": {
      "$oid": "5262e856e4b0d8dafb89a472"
  },
  "name": "Vesper",
  "amount": [
      "2",
      "1",
      "1/2"
  ],
  "amountType": [
      "Oz.",
      "Oz.",
      "Oz."
  ],
  "glass": "cocktail",
  "type": "cocktail",
  "ingredient": [
      "Gin",
      "Vodka",
      "Lillet Blonde"
  ],
  "garnish": "Lemon twist",
  "note": [
      "Add ingredients to an iced shaker.",
      "Shake and strain into a chilled cocktail glass.",
      "garnish with a twist"
  ],
},
{
  "_id": {
      "$oid": "533f246ff0d5a9ca06000001"
  },
  "name": "Hanky Panky",
  "amount": [
      "1.5",
      "1.5",
      "2"
  ],
  "amountType": [
      "Ounces",
      "Ounces",
      "Dashes"
  ],
  "ingredient": [
      "Gin",
      "Sweet Vermouth",
      "Fernet Branca"
  ],
  "note": [
      "Stir well with ice in a mixing glass.",
      "Strain into a chilled cocktail glass.",
      "Twist a small swathe of orange peel over the surface of the drink."
  ],
  "garnish": "Orange peel",
  "type": "cocktail",
  "glass": "Cocktail",
},
{
  "_id": {
      "$oid": "53a89c1c96de6b0200000001"
  },
  "name": "Beer Margarita",
  "amount": [
      "12",
      "12",
      "12",
      "12",
      " "
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz.",
      " "
  ],
  "ingredient": [
      "1 can of frozen Limeade concentrate",
      "White Tequila",
      "Water",
      "Beer (Corona)",
      "Ice"
  ],
  "note": [
      "Pour limeade, tequila, water, and beer into a large pitcher. Stir until well-blended, and limeade has melted. Add plenty of ice, and garnish with lime wedges. Adjust with additional water, if needed."
  ],
  "garnish": "Lime wedge",
  "type": "cocktail",
  "glass": "Pitcher",
},
{
  "_id": {
      "$oid": "5262f7bde4b0d8dafb89a494"
  },
  "name": "Old Fashioned",
  "amount": [
      "4 1/2",
      "2",
      "1",
      "3"
  ],
  "amountType": [
      "Part",
      "Dashes",
      "tsp",
      "Dashes"
  ],
  "glass": "old-fashioned",
  "type": "cocktail",
  "ingredient": [
      "Whiskey",
      "Angostura Bitters",
      "sugar",
      "water"
  ],
  "garnish": "Orange slice and cherry",
  "note": [
      "Place sugar cube in old-fashioned glass and saturate with bitters",
      "add a dash of plain water",
      "Muddle until dissolve.",
      "Fill the glass with ice cubes and add whisky."
  ],
},
{
  "_id": {
      "$oid": "52711b2ee4b068bd7185e3c2"
  },
  "name": "Dutch Baby",
  "amount": [
      "3",
      "2/3",
      "2/3",
      "1/4",
      "1/8",
      "3"
  ],
  "amountType": [
      "&nbsp;",
      "Cup",
      "Cup",
      "tsp",
      "tsp",
      "Tbl"
  ],
  "ingredient": [
      "Eggs (warm in hot water)",
      "Milk (room temp)",
      "White Flour",
      "Vanilla",
      "Salt",
      "butter"
  ],
  "note": [
      "Pre heat oven to 450F with rack in middle possition.",
      "Place cast-iron pan in oven for 5 minute to warm.",
      "Set butter aside and place remaining ingredients into blender.",
      "Remove pan from oven and melt butter in pan.",
      "Add remaining ingredients into pan.",
      "Place pan in oven and bake for 18-25 minutes."
  ],
  "type": "food"
},
{
  "_id": {
      "$oid": "5484cc9243982fe420000001"
  },
  "name": "Cosmopolitan",
  "amount": [
      "1 1/2",
      "1",
      " 1/2",
      " 1/4"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "oz."
  ],
  "ingredient": [
      "Vodka",
      "Cointreau",
      "fresh lime juice",
      "Cranberry juice"
  ],
  "note": [
      "Combine ingredients in a shaker over ice and shake."
  ],
  "garnish": "Orange Zest",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "548adb8eb95ab97805000001"
  },
  "name": "Crème Brûlée",
  "amount": [
      "6",
      "6",
      " 1/2",
      "2 1/2",
      "2"
  ],
  "amountType": [
      " ",
      "Tbls",
      "tsp",
      "cups",
      "Tbls"
  ],
  "ingredient": [
      "Egg Yolks",
      "Sugar",
      "Vanilla extract",
      "Heavy Cream",
      "Brown or Raw Sugar"
  ],
  "note": [
      "Preheat oven to 300 degrees F (150 degrees C).",
      "Beat egg yolks, 4 tablespoons white sugar and vanilla extract in a mixing bowl until thick and creamy.",
      "Pour cream into a saucepan and stir over low heat until it almost comes to boil. Remove the cream from heat immediately. Stir cream into the egg yolk mixture; beat until combined.",
      "Pour cream mixture into the top pan of a double boiler. Stir over simmering water until mixture lightly coats the back of a spoon, about 3 minutes. Remove mixture from heat immediately and pour into a shallow heat-proof dish.",
      "Bake in preheated oven for 30 minutes. Remove from oven and cool to room temperature. Refrigerate for at least 1 hour or overnight.",
      "Preheat oven to broil.",
      "In a small bowl combine remaining 2 tablespoons white sugar and brown sugar. Sift this mixture evenly over custard. Place dish under broiler until sugar melts, about 2 minutes. Watch carefully so as not to burn.",
      "Remove from heat and allow to cool. Refrigerate until custard is set again."
  ],
  "garnish": "",
  "type": "food",
  "glass": ""
},
{
  "_id": {
      "$oid": "554fbb1c82575d1100000001"
  },
  "name": "Negroni",
  "amount": [
      "1",
      "1",
      "1",
      "1"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "&nbsp;"
  ],
  "ingredient": [
      "Gin",
      "Campari",
      "Carpano Antics Vermouth",
      "Orange Wedge"
  ],
  "note": [
      "Combine liquids in a mixing glass with several large ice cubes. Stir until chilled. Strain into a cocktail glass. Squeeze the juice from the orange wheel into the drink and drop in the wedge. If using another vermouth, reduce amount."
  ],
  "garnish": "Orange wedge",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "554fef71dde9ee1100000002"
  },
  "name": "The Perfect Manhattan",
  "amount": [
      "1 1/2",
      " 1/2",
      " 1/2",
      "1",
      "1"
  ],
  "amountType": [
      "oz.",
      "oz.",
      "oz.",
      "dash",
      " "
  ],
  "ingredient": [
      "100% rye whiskey",
      "Dolin red vermouth",
      "Dolin white vermouth",
      "Angostura Bitters",
      "preserved cherry"
  ],
  "note": [
      "Shake liquids vigorously in a cocktail shaker with ice. Strain into a chilled Martini glass. Garnish with a cherry."
  ],
  "garnish": "Preserved Cherry",
  "type": "cocktail",
  "glass": "Cocktail"
},
{
  "_id": {
      "$oid": "5550073231dbbc1100000001"
  },
  "name": "Bourbon Cherries (Preserved)",
  "amount": [
      "4",
      "2 1/2",
      "2 1/2",
      "1",
      "1",
      "8"
  ],
  "amountType": [
      "cups",
      "cups",
      "cups",
      " ",
      "tsp",
      "oz."
  ],
  "ingredient": [
      "Fresh Cherries (pitted if possible), washed & well dried.",
      "Water",
      "Organic Cane Sugar.",
      "Lemon for Juice.",
      "Vanilla Extract.",
      "Bourbon"
  ],
  "note": [
      "Place the water and sugar in a medium sized saucepan. Bring to a light boil, stirring constantly, until sugar dissolves.",
      "Add the lemon juice and vanilla extract. Remove from the heat. Tada! Simple syrup!",
      "As you dissolve the sugar, you can bring a water bath canner full of water to the boil. If you have don't have one, just use a very deep wide stock pot with one of those old fashioned metal steamers laid out in the bottom. This will keep the jars off the bottom of the pot so they don't break. Fill the pot with water and bring to a rolling boil.",
      "Now using very clean hands, place the cherries in the jars with 3/4 inch of head space left over. Pour the simple syrup over the cherries (still leaving that 3/4 inch of space at the top and spoon 1 to 2 Oz of bourbon over the entire mixture. This should leave you with 1/2\" of head space.",
      "Secure rims and lids on the jars and place in the boiling water to ensure seal and sanitization for 15 minutes. Carefully remove from the water with a pair of tongs with rubber bands wrapped around the ends to prevent slippage, and allow to set. You may hear a \"ping\" noise coming from the jars - this is an excellent sign. Once cool, check to make sure the rings have in fact sealed and refrigerate any that don't. While you should use unsealed cherries within a couple weeks, the sealed ones will last you a very long time.",
      "Spoon over ice cream, stuff in between cake layers, or even better: Take three and dunk 'em in more bourbon.",
      "Eat. Or drink. Or both.",
      "Yields 4 250ml Jars (small batch canning? Heck yeah!)"
  ],
  "garnish": "",
  "type": "food",
  "glass": ""
},
{
  "_id": {
      "$oid": "55511fa56507991100000001"
  },
  "name": "Orange Bitters",
  "amount": [
      " 1/2",
      "1",
      " 1/2",
      "4",
      "20"
  ],
  "amountType": [
      "lb",
      "tsp",
      "tsp",
      " ",
      "drops"
  ],
  "ingredient": [
      "orange peel pieces",
      "fennel seed",
      "coriander",
      "cardamom pods",
      "gentian extract"
  ],
  "note": [
      "Combine all ingredients in a 2-quart jar with a tight fitting lid. Close and store at room temperature. Let steep 14 days, shaking the jar every other day.",
      "Strain alcohol from spices and store in a jar with a tight fitting lid in a dark place.",
      "Simply straining the alcohol through a fine-mesh strainer will leave a few cloudy particles behind (which aren\u2019t harmful). If you want completely clear bitters, strain through a coffee filter nested in the strainer.",
      "The bitters will last indefinitely when stored in an airtight container in a dark spot."
  ],
  "garnish": "",
  "type": "cocktail",
  "glass": ""
}];


function sortRecipes(recipes){
	return recipes.sort((a, b) => (a.type > b.type) ? 1 : (a.type === b.type) ? ((a.name > b.name) ? 1 : -1) : -1 );
}





