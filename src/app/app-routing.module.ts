import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './shared/components/components.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'offsite', loadChildren: './pages/offsite/offsite-routing.module#OffsiteRoutingModule', data: { title: 'Offsite' } },
];

@NgModule({
  imports: [
    // tslint:disable-next-line: max-line-length
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'}),
    ComponentsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
