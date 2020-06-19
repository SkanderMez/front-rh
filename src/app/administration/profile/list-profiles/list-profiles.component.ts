import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../_services/crud.service';
import {BASE_API, PROFILE} from '../../../_globals/vars';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {

  url = 'assets/js/pages/ui/collapse.js';
  profiles = [];
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getAllProfiles();
    this.initilizeSelectScript(this.url);
  }

  initilizeSelectScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  getAllProfiles() {
    this.crudService.getAll(BASE_API + PROFILE).subscribe(
      (data: any) => {
        this.profiles = data;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
