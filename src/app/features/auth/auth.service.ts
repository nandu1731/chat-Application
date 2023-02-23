import { Injectable } from '@angular/core';
import { ChannelService } from 'stream-chat-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false;
  activeChannel=this.channelService.activeChannel$;
  result:any;
  userId="";
  userToken="";
  members:any=[];
  currentChannel:string='';
  lastId=2;
  /*users:{id:number,email:string,password:string;userId:string;token:string}[]=[
    {"id":0,"email":"tldb@gmail.com","password":"bhavani123","userId":"Bhavani","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQmhhdmFuaSJ9.gUtRaN4Nw4r_Hm-hiS1I6ZUivTAD_q3erger44WcQUI"},
    {"id":1,"email":"susmi@gmail.com","password":"susmi123","userId":"susmitha","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3VzbWl0aGEifQ.fWrD9pEHwPCJCbuFXtfstss42UOOCplWGJlo15cSH5c"},
    {"id":2,"email":"teja@gmail.com","password":"teja123","userId":"teja","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVqYSJ9.qrE_GcKIRZo43NakSIoOcKUUMARYYgu3LXdE09o0veQ"},
  ]
  users:{id:number,email:string,password:string;userId:string;token:string}[]=[
    {"id":0,"email":"tldb@gmail.com","password":"bhavani123","userId":"Bhavani","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQmhhdmFuaSJ9.ZToZpx-I1V9ZfjL1vIMv6lK8e2afkx9cJHzszjCzcSc"},
    {"id":1,"email":"susmi@gmail.com","password":"susmi123","userId":"susmitha","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3VzbWl0aGEifQ.HHNv9nQwDorYTUjp13avnvt2NwryoaK3mtHzrAPuMwE"},
    {"id":2,"email":"teja@gmail.com","password":"teja123","userId":"teja","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVqYSJ9.TOnZ2FwvyZKVRVXEYZvEi1mF8ZL52kDX-BuwrhY6Dv4"},
    {"id":3,"email":"rgukt@gmail.com","password":"rgukt123","userId":"umesh","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidW1lc2gifQ.1opsL_8R-uW-pueIkVN7sx71_1iFvUyrTQxUqjoiWAg"},
    {"id":4,"email":"sai@gmail.com","password":"sai123","userId":"saiTeja","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2FpVGVqYSJ9.h8uRz06XWl3I-dhMeV5S8wi-vIBxjaqyqOn1f9CsU-E"},
  ]*/
  users:{id:number,email:string,password:string,userId:string,token:string}[]=[
    {'id':0,"email":'bhavani@gmail.com',"password":'bhavani123',userId:"bhavani",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmhhdmFuaSJ9.rfw6O3PUDsZkwKmQSOuZei6xHwmw7wvFZpqajia-xJc"},
    {'id':1,"email":'susmitha@gmail.com',"password":'susmi123',userId:"susmitha",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3VzbWl0aGEifQ.meGTua1Of_Z0lmYXRmDMOQKNwK1ieKnk_SmEckVZxW8"},
    {'id':2,"email":'teja@gmail.com',"password":'teja123',userId:"teja",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGVqYSJ9.vo9wQ9assgjWCMJ8ke-lxpqv44_8lYLcTemBrpykgGQ"},
    {'id':3,"email":'nandu@gmail.com',"password":'nandu123',userId:"nandu",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibmFuZHUifQ.wpAKoM1tGweaPy4DeyHUsFAkN4AUYfJrYSEnFGMk_zo"},
    {'id':4,"email":'pavan@gmail.com',"password":'pavan123',userId:"pavan",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicGF2YW4ifQ.K_1Fbwsoz0AkvAOx43PwwbR96Sb52xNDLFb85cU_QIM"},
    
  ]


  constructor(private channelService:ChannelService) { }
  showUsers(){
    this.activeChannel.subscribe(val=>{
      this.result=val
    })
    this.currentChannel=this.result?.data.id;
    let keys=Object.keys(this.result?.state?.members)
    console.log(keys)
    this.members=[]
    keys.map((k:any)=>{
      this.members.push(k)
    })
    console.log(this.members)
  }
}
