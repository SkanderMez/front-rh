import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeModel} from '../../_models/full-resume-models/resume.model';
import {BASE_API, USERS, RECOMMENDED} from '../../_globals/vars';

@Component({
  selector: 'app-similar-profiles',
  templateUrl: './similar-profiles.component.html',
  styleUrls: ['./similar-profiles.component.css']
})
export class SimilarProfilesComponent implements OnInit {

  // initial users with id and similarity attributes
  recommendedUsers = [];
  // full user profile
  recommendedUsersProfiles = [];
  // labeled users
  recommendedUsersLabeledProfiles = [];
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
      (data: any) => {
        console.log(data);
        this.recommendedUsers = data;
      },
      () => {},
      () => {
        this.recommendedUsersProfiles = [];
        this.recommendedUsers.forEach((user) => {
          this.crudService.getOne(BASE_API + USERS , user.id).subscribe(
            (data: ResumeModel) => {
              this.recommendedUsersProfiles.push(data);
              console.log(data);
            }, (error) => {
              console.log('error on getting one full user by its id');
              console.log(error);
            }, () => {
              this.completeSearch = true;

              // this.recommendedUsers.forEach((recommendedUser) => {
              //     this.crudService.getOne(BASE_API + USERS, recommendedUser.id).subscribe(
              //       (data: any) => {
              //         console.log('***************')
              //         console.log(data)
              //         console.log('***************')
              //         this.recommendedUsersLabeledProfiles.push(data);
              //       },
              //       (error) => {
              //         console.log(error);
              //       },
              //       () => {
              //       }
              //     );
              // });
            }
          );
        });
      }
    );
  }

  checkFullResume(userId: any) {
    this.router.navigate(['/one-profile', userId]);

  }
}
