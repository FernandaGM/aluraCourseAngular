import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoFormComponent} from './photo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VmessageModule} from '../../shared/components/vmessage/vmessage.module';
import {PhotoModule} from '../photo/photo.module';
import {ImmediateClickModule} from '../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule {}
