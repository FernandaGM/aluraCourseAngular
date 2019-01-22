import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {PhotoDetailsComponent} from './photo-details.component';
import {PhotoModule} from '../photo/photo.module';
import {PhotoCommentsComponent} from './photo-comments/photo-comments.component';
import {VmessageModule} from '../../shared/components/vmessage/vmessage.module';
import {PhotoOwnerOnlyDirective} from './photo-owner-only/photo-owner-only.directive';
import {ShowIfLoggedModule} from '../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    ShowIfLoggedModule
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ]
})
export class PhotoDetailsModule {}

