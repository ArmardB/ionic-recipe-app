import { SignUpPage } from './../pages/sign-up/sign-up';
import { SignInPage } from './../pages/sign-in/sign-in';
import { RecipesService } from './../services/recipes';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from './../pages/tabs/tabs';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { RecipesPage } from './../pages/recipes/recipes';
import { RecipePage } from './../pages/recipe/recipe';
import { EditRecipePage } from './../pages/edit-recipe/edit-recipe';
import { ShoppingListService } from './../services/shopping-list';

@NgModule({
  declarations: [
    MyApp,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
    TabsPage,
    SignInPage,
    SignUpPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditRecipePage,
    RecipePage,
    RecipesPage,
    ShoppingListPage,
    TabsPage,
    SignUpPage,
    SignInPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  ShoppingListService, RecipesService
  ]
})
export class AppModule {}
