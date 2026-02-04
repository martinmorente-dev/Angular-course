import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page.component';
import { HeroComponent } from './pages/hero/hero-component/hero-component';
import { DragonballPageComponent } from './pages/dragonball-page-component/dragonball-page-component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page-component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'dragon-ball',
    component: DragonballPageComponent
  },
  {
    path: 'dragon-ball-super',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
