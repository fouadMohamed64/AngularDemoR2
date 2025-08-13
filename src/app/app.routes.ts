import { Routes } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

export const routes: Routes = [
    // first match first win

    // {path: '' , pathMatch: 'full' , redirectTo: 'home' , title: 'Home'},
    // {path: 'home' , component: OrderComponent , title: 'Home'},
    // {path: 'aboutUs' , component: AboutUsComponent , title: 'AboutUs'},
    // {path: 'contactUs' , component: ContactUsComponent , title: 'ContactUs'},

    // // wild card notfound
    // {path : '**' , component: NotFoundComponent , title: '404'}


    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'home', title: 'Home' },
            { path: 'home', component: OrderComponent, title: 'Home' },
            { path: 'aboutUs', component: AboutUsComponent, title: 'AboutUs' },
            { path: 'contactUs', component: ContactUsComponent, title: 'ContactUs' },
            {path: 'productDetails/:id' , component: ProductDetailsComponent , title: 'ProductDetails'}
        ]
    },
    { path: 'login', component: LoginComponent, title: 'Login' },

    {path : '**' , component: NotFoundComponent , title: '404'}



];
