import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookComponent } from './components/cook/cook.component';
import { FormeComponent } from './components/forme/forme.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenupageComponent } from './components/menupage/menupage.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'menu/:id',component:MenupageComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'forme',component:FormeComponent},
{path:'log',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'cook',component:CookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
