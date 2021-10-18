import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teammeeting Facilitator';
  links = [
    {name: 'Dashboard', link: '/dashboard'},
    {name: 'Meetings', link: '/meetings'},
    {name: 'Members', link: '/members'},
    {name: 'Rooms', link: '/rooms'},
    {name: 'Games', link: '/games'},
    {name: 'Topics', link: '/topics'}];
  activeLink = this.links[0].name;


  constructor() {
  }

}
