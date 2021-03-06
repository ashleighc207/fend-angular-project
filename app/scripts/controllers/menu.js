'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
	.controller('MenuCtrl', ['orderManager', function (menu, orderManager) {

	this.chooseItem = function(menuCategory, menuItemName){
	};
	this.increment = function(item){
	item.rating = ((item.rating * 10) + 1) / 10;
	};
	this.decrement = function(item){
	item.rating = ((item.rating * 10) - 1) / 10;
	};
	this.items = [
	{
		id : 'chicken-pomegranate-salad',
		name : 'Chicken Pomegranate Salad',
		img : 'chicken-pomegranate-salad.jpg',
		calories: 430,
		rating : 4.1
		},
		{
		id : 'strawberry-pudding',
		name : 'Strawberry Pudding',
		img : 'Strawberry-Pudding.jpg',
		calories: 280,
		rating : 5
		},
		{
		id : 'ham-goat-cheese-croissant',
		name : 'Ham Goat Cheese Croissant',
		img : 'ham-goat-cheese-croissant.jpg',
		calories: 670,
		rating : 3.9
	}
	];

	}]);

