'use strict';

var mockRecipes = [
    {
        name: 'Carbonara',
        ingredients: [{name: 'Spaghetti', amount: '360', unit:'g'}, {name:'Ägg', amount: '4', unit: 'st'}, {name: 'Vispgrädde', amount: '1', unit:'dl'}, {name:'Sidfläsk', amount: '100', unit: 'g'}, {name:'Riven permesanost', amount: '100', unit: 'g'}],
        instructions: 'Gör så här: Börja med att skära sidfläsk i strimlor. Koka sedan upp vatten med 10 g salt/l och häll i pasta. Stek därefter fläsket gyllenbrunt, knäck äggen, blanda med vispgrädde, parmesanost, en nypa salt och svartpeppar. Häll av pastan när den är färdigkokt och häll den i stekpannan med fläsket, därefter äggblandningen och rör om försiktigt över svag värme 30 sek. Fördela din pasta carbonara på fyra tallrikar och avsluta med lite nymalen svartpeppar.',
        numberOfServings: '4'
    },
    {
        name: 'Vardagslyxig laxsås till pasta',
        ingredients: [{name: 'kallrökt lax', amount: '250', unit:'g'}, {name:'Milda mat extra 4%', amount: '2.5', unit: 'dl'}, {name: 'spenat', amount: '150', unit:'g'}, {name:'Knorr fiskbuljongtärning', amount: '1', unit: 'st'}, {name:'vitlöksklyfta', amount: '1', unit: 'st'}, {name:'pasta', amount: '150', unit: 'g'}],
        instructions: 'Skär laxen i bitar eller strimlor 2. Häll Milda mat extra i en kastrull, tillsätt spenat, buljongtärning och pressa i vitlök efter smak. 3. Låt koka upp under omrörning. 4. Tillsätt laxen. 5. Häll såsen över nykokt pasta.',
        numberOfServings: '2'
    },
    {
        name: 'Citrongräskyckling med nötter',
        ingredients: [{name: 'kycklingfiléer', amount: '4', unit:'st'}, {name:'vitlöksklyftor', amount: '3', unit: 'st'}, {name: 'citrongräs i lag, à 110 g', amount: '0.5', unit:'burk '}, {name:'thailändsk fisksås', amount: '2', unit: 'msk'}, {name:'purjolök', amount: '1', unit: 'st'}, {name:'röd chilifrukt', amount: '1', unit: 'st'},{name:'kokosmjölk', amount: '2.5', unit: 'dl'},{name:'thaibasilika eller koriander, strimlad', amount: '1', unit: 'dl'}, {name:'jordnötter', amount: '1', unit: 'dl'}],
        instructions: 'Skär kycklingfiléerna i små bitar. Skala och hacka vitlöken. Banka lätt på citrongräset. Blanda kyckling, vitlök, citrongräs och fisksås. Strimla purjolöken. Kärna ur och strimla chilin. Bryn kycklingen med marinad i smör-&rapsolja i en wok eller stor stekpanna. Tillsätt purjolök och chili. Rör i kokosmjölk. Låt allt koka några minuter. Ta upp citrongräset. Blanda i jordnötter och thaibasilika. Servera med ris.',
        numberOfServings: '4'
    },
    {
        name: 'Korv Stroganoff',
        ingredients: [{name: 'persilja, finhackad', amount: '1', unit:'msk'}, {name:'matlagningsgrädde', amount: '2.5', unit: 'dl'}, {name: 'tomatpuré', amount: '3', unit:'msk'}, {name:'gul lök(ar)', amount: '2', unit: 'st'}, {name:'falukorv', amount: '400', unit: 'g'}],
        instructions: 'Skär korven i strimlor. Hacka löken och bryn i smöret. Låt korven bryna med en stund. Tillsätt tomatpurén och rör om. Späd med grädden. Koka ett par minuter. Smaka av med salt och peppar. Strö över persilja. Servera med ris eller pasta.',
        numberOfServings: '4'
    }
]

/* Controllers */

angular.module('grocerylist.controllers', []).
  controller('MyCtrl1', function($scope,$rootScope) {
  		this.recipes = mockRecipes;
  		$scope.grocerylist = [];
  		console.log($scope);	
  		$scope.addToGrocerylist = function(ingredient) {
  			$scope.grocerylist.push(ingredient);
  		}

  		$scope.updateNrOfPortions = function(recipe,nrOfServings) {
  			var oldNrOfServings = recipe.numberOfServings;
  			recipe.numberOfServings = nrOfServings;
  			angular.forEach(recipe.ingredients, function(ingredient, key){
  				ingredient.amount = (ingredient.amount/oldNrOfServings)*nrOfServings;
			});
  		}

  });