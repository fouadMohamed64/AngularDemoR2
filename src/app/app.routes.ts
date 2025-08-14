import { Routes } from '@angular/router';
import { OrderComponent } from './Components/order/order.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { TodosComponent } from './Components/todos/todos.component';
import { PostsComponent } from './Components/posts/posts.component';
import { TemplateDrivenFormComponent } from './Components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { authGuard } from './Guards/auth.guard';

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
            {path: 'productDetails/:id' , component: ProductDetailsComponent , title: 'ProductDetails'},
            {path: 'todos' , component: TodosComponent , title: 'todos' , canActivate: [authGuard]},
            {path: 'posts' , component: PostsComponent , title: 'posts'},
            {path: 'templateForm' , component: TemplateDrivenFormComponent , title: 'templateForm'},
            {path: 'reactiveForm' , component: ReactiveFormComponent , title: 'reactiveForm'},
        ]
    },
    { path: 'login', component: LoginComponent, title: 'Login' },

    {path : '**' , component: NotFoundComponent , title: '404'}



];
