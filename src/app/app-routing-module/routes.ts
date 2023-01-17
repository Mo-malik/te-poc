import { Route } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { OffersComponent } from "../components/offers/offers.component";
import { ProductDetailsComponent } from "../components/product-details/product-details.component";
import { ProductsComponent } from "../components/products/products.component";

export const Routes :Route[]=[

    {path:'login',component:LoginComponent},
    {path:'product', component: ProductsComponent}, 
    {path:'order', component: OffersComponent}, 
    {path:'productdetail/:id', component: ProductDetailsComponent}, 
    {path:' ', component: ProductsComponent}, 
    {path:'**', component: ProductsComponent}, 
]