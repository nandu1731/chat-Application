import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-channel-members',
  templateUrl: './channel-members.component.html',
  styleUrls: ['./channel-members.component.scss']
})
export class ChannelMembersComponent implements OnInit {
  members:any=this.auth.members;
  channelName:string=this.auth.currentChannel;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
