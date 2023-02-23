import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './features/auth/auth.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ChatModule } from './features/chat/chat.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { environment } from '../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
//import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
//import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { StreamChatModule } from 'stream-chat-angular';


@NgModule({
  declarations: [
    AppComponent,
    //EmojiPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MatToolbarModule,
    MatButtonModule,
    ChatModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    TranslateModule.forRoot(),
    //PickerModule,
    StreamChatModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    }
  ],
  bootstrap: [AppComponent],
  //exports:[EmojiPickerComponent]
})
export class AppModule { }
