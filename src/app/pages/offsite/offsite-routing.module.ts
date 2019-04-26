import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StyleguidePage } from './styleguide/styleguide.page';

import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'styleguide',
    component: StyleguidePage,
    data: { title: 'Styleguide' }
  }
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  declarations: [
    StyleguidePage,
  ],
  providers: [
    StyleguidePage,
  ],
})
export class OffsiteRoutingModule { }
