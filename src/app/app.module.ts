import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ParticipantsComponent } from './participants/participants.component';
import { CameraComponent } from './camera/camera.component';
import { SettingsComponent } from './settings/settings.component';
import { DeviceSelectComponent } from './settings/device-select.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';

import { VideoChatService } from './services/videochat.service';
import { DeviceService } from './services/device.service';
import { StorageService } from './services/storage.service';
import { InformedConsentFormComponent } from './informed-consent-form/informed-consent-form.component';
import { InformedConsentPrintComponent } from './informed-consent-print/informed-consent-print.component';
import { DocumentSurveysComponent } from './document-surveys/document-surveys.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RoomsComponent,
        ParticipantsComponent,
        CameraComponent,
        SettingsComponent,
        DeviceSelectComponent,
        ActivityIndicatorComponent,
        InformedConsentFormComponent,
        InformedConsentPrintComponent,
        DocumentSurveysComponent,
        DashboardComponent,
        LoginComponent,
        MediaComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        NgbModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [DeviceService, VideoChatService, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
