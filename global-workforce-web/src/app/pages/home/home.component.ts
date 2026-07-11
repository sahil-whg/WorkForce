import { Component } from '@angular/core';

import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FooterComponent } from '../../core/footer/footer.component';

import { HeroComponent } from '../../features/home/hero/hero.component';
import { ServicesComponent } from '../../features/home/services/services.component';
import { IndustriesComponent } from '../../features/home/industries/industries.component';
import { LanguagesComponent } from '../../features/home/languages/languages.component';
import { ProcessComponent } from '../../features/home/process/process.component';
import { WhyUsComponent } from '../../features/home/why-us/why-us.component';
import { TestimonialsComponent } from '../../features/home/testimonials/testimonials.component';
import { CtaComponent } from '../../features/home/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    IndustriesComponent,
    LanguagesComponent,
    ProcessComponent,
    WhyUsComponent,
    TestimonialsComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}