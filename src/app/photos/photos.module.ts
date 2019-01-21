import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PhotoListModule} from './photo-list/photo-list.module';
import {PhotoModule} from './photo/photo.module';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoDetailsModule} from './photo-details/photo-details.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    PhotoListModule,
    PhotoModule,
    PhotoFormModule,
    PhotoDetailsModule
  ]
})
export class PhotosModule {}

