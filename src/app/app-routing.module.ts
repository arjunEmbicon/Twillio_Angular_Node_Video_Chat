import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentSurveysComponent } from './document-surveys/document-surveys.component';
import { HomeComponent } from './home/home.component';

import { InformedConsentFormComponent } from './informed-consent-form/informed-consent-form.component';
import { InformedConsentPrintComponent } from './informed-consent-print/informed-consent-print.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'video-chat', component: HomeComponent },
  { path: '', component: DashboardComponent },
  { path: 'informed-consent-form', component: InformedConsentFormComponent },
  { path: 'document-&-surveys', component: DocumentSurveysComponent },
  { path: 'print-informed-consent', component: InformedConsentPrintComponent },
  { path: 'all-media', component: MediaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
