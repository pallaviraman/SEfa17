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
  MdInputModule
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
    // MdDialog,
    // MdDialogRef,
    MatDialogModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MdInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    // MdDialog,
    // MdDialogRef,
    MatDialogModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MdInputModule
  ]
})
export class MaterialModule {}
