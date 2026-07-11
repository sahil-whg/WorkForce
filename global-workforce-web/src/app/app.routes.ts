import { AboutComponent } from './pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CandidateApplicationComponent } from './pages/candidate-application/candidate-application.component';
import { ClientInquiryComponent } from './pages/client-inquiry/client-inquiry.component'
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'apply',
    component: CandidateApplicationComponent
  },
  {
    path: 'request-talent',
    component:
      ClientInquiryComponent
  },
  {
    path: 'about',
    component: AboutComponent
   },
   {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
];