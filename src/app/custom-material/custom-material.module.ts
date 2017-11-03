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
  MatGridListModule,
  MatFormFieldModule,
  MatStepperModule,
  MatRadioModule
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
    MatGridListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatRadioModule
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
    MatGridListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export     class MaterialModule {}
