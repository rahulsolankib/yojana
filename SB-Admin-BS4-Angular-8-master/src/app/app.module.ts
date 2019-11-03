import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire//firestore';
import { environment } from 'src/environments/environment';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        MatButtonModule
    ],
    declarations:
     [AppComponent,
     
     ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
