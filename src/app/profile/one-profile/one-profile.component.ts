import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {HttpClient} from '@angular/common/http';
import {ResumeModel} from '../../_models/full-resume-models/resume.model';
import {EducationModel} from '../../_models/full-resume-models/education.model';
import {BASE_API, USERS} from '../../_globals/vars';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one-profile',
  templateUrl: './one-profile.component.html',
  styleUrls: ['./one-profile.component.css']
})
export class OneProfileComponent implements OnInit {

  show = [];


  url = 'assets/js/pages/tables/jquery-datatable.js';
  url2 = 'assets/js/table.min.js';
  resume: ResumeModel;
  constructor(private crudService: CrudService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initilizeDataTableScript(this.url);
    this.initilizeDataTableScript(this.url2);
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.getOneResumeByIdTest(id);

    });
  }

  getOneResumeByIdTest(id) {
    this.crudService.getOne(BASE_API + USERS, id).subscribe(
    (data: ResumeModel) => {
      this.resume = data;
      console.log(this.resume)

    }, () => {

    }, () => {
      let i = 0;
        this.resume.experiences.jobs.forEach(() => {
          this.show[i] = false;
          i++;
        });
    }
    );
  }


  initilizeDataTableScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
