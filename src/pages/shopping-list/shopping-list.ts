import { Component } from '@angular/core';

import { NgForm } from "@angular/forms";
import { ShoppingListService } from './../../services/shopping-list';
import { Ingredient } from './../../models/ingredient';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  listItems: Ingredient[];

constructor(private shoppingListService: ShoppingListService){}

// This will assign values of the items when the page is loaded
ionViewWillEnter() {
  this.loadItems();
}

onAddItem(form: NgForm) {
  this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
  form.reset();
  this.loadItems();
}

onRemoveItem(index: number) {
  this.shoppingListService.removeItem(index);
  this.loadItems();
}

private loadItems() {
  this.listItems = this.shoppingListService.getItems();
}

}
