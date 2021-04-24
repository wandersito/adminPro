import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  public links!: NodeListOf<Element>;

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme( this.links );
  }

  changeTheme( theme: string ){
    this.settingsService.changeTheme( theme, this.links );
  }

}
