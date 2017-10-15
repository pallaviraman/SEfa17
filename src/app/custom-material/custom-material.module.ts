import { NgModule } from '@angular/core';

import {
  CompatibilityModule,
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
  MatInputModule,
  MatNativeDateModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CompatibilityModule,
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
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [
    CompatibilityModule,
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
    MatInputModule,
    MatNativeDateModule,
    MatChipsModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export     class MaterialModule {}
