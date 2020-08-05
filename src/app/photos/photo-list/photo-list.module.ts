import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ]
})

export class PhotoListModule {}