import { NgModule } from '@angular/core';

import {
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
  MatSlideToggleModule
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
    MatSlideToggleModule
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
    MatSlideToggleModule
  ]
})
export class MaterialModule {}
