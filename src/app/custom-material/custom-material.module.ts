import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MdInputModule,
  MdNativeDateModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
