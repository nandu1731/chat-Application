import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { ChannelsModule } from '../channels/channels.module';
//import { ChannelMembersComponent } from './channel-members/channel-members.component';
import { AppModule } from 'src/app/app.module';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
//import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
//import { EmojiPickerComponent } from 'src/app/emoji-picker/emoji-picker.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ChannelMembersComponent } from './channel-members/channel-members.component';


@NgModule({
  declarations: [
    ChatPageComponent,
    EmojiPickerComponent,
    //ChannelMembersComponent,
    EmojiPickerComponent,
    ChannelMembersComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule.forChild(),
    StreamChatModule,
    StreamAutocompleteTextareaModule,
    ChannelsModule,
    PickerModule
  ]
})
export class ChatModule { }
