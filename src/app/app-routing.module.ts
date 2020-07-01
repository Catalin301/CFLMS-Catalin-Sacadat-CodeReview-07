
import { NgModule } from '@angular/core';

import  { Routes, RouterModule } from '@angular/router' ;

import { HomePageComponent} from './home-page/home-page.component';

import { BlogComponent } from'./blog/blog.component';

import { TravelsComponent } from './travels/travels.component';

import { FooterComponent} from './footer/footer.component';

import { ListComponent} from './list/list.component';

import { CartComponent} from './cart/cart.component';


const routes: Routes = [

{

        path: "",component: HomePageComponent

},

{

        path: "blog",component: BlogComponent

},

{

        path: "travels",component: TravelsComponent

},

{		

		path:"footer",component: FooterComponent

},

{

		path:"list",component: ListComponent
},

{
		path:"cart",component: CartComponent
}


];


@ NgModule({

 imports: [RouterModule.forRoot(routes)

         ],

 exports: [RouterModule]

})

export class AppRoutingModule { }

