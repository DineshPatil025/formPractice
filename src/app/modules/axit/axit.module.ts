import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxitLayoutComponent } from './axit-layout/axit-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AxitNavbarComponent } from './axit-navbar/axit-navbar.component';
import { AxitFooterComponent } from './axit-footer/axit-footer.component';
import { AxitSocialIconsComponent } from './axit-social-icons/axit-social-icons.component';
import { AxitPriceDetailsComponent } from './axit-price-details/axit-price-details.component';
import { AxitFeedbackComponent } from './axit-feedback/axit-feedback.component';
import { AxitFeaturesComponent } from './axit-features/axit-features.component';
import { AxitHeroSectionComponent } from './axit-hero-section/axit-hero-section.component';


const routes:Routes = [
  {path:"", component:AxitLayoutComponent}
]


@NgModule({
  declarations: [
    AxitLayoutComponent,
    AxitNavbarComponent,
    AxitFooterComponent,
    AxitSocialIconsComponent,
    AxitPriceDetailsComponent,
    AxitFeedbackComponent,
    AxitFeaturesComponent,
    AxitHeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AxitModule { }
