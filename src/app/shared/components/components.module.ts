import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PageComponent } from './page/page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        IonicModule,
    ],
    declarations: [
        PageComponent,
    ],
    exports: [
        PageComponent,
    ],
})
export class ComponentsModule { }
