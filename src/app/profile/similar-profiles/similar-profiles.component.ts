import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeModel} from '../../_models/full-resume-models/resume.model';
import {BASE_API, USERS, RECOMMENDED} from '../../_globals/vars';
import {RecommendedModel} from '../../_models/full-resume-models/recommended.model';

@Component({
  selector: 'app-similar-profiles',
  templateUrl: './similar-profiles.component.html',
  styleUrls: ['./similar-profiles.component.css']
})
export class SimilarProfilesComponent implements OnInit {

  // initial users with id and similarity attributes
  recommendedUsers: RecommendedModel[];
  completeSearch = false;
  constructor(private crudService: CrudService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.getRecommendedProfiles(id);
    });
  }

  private getRecommendedProfiles(id) {
    this.completeSearch = false;
    this.crudService.getAllById(BASE_API + RECOMMENDED, id).subscribe(
      (data: RecommendedModel []) => {
        console.log(data);
        this.recommendedUsers = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
      this.completeSearch = true;
      }
    );
  }

  checkFullResume(userId: string) {
    this.router.navigate(['/one-profile', userId]);

  }

  checkRecommendedProfiles(userId: string) {
    this.router.navigate(['/recommended', userId]);
  }
}
