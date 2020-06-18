import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {BASE_API, USERS} from '../../_globals/vars';
import {ResumeModel} from '../../_models/full-resume-models/resume.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LabeledUserModel} from '../../_models/full-resume-models/labeled.user.model';
declare var $: any;
@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {


  @ViewChild('experience', { static: false }) public experience: ElementRef;
  @ViewChild('stability', { static: false }) public stability: ElementRef;

  url1 = 'assets/js/pages/ui/range-sliders.js';
  url2 = 'assets/js/pages/forms/form-data.js';
  loading;
  users_ids = [];
  labeled_users: LabeledUserModel[];
  users: ResumeModel[];
  actualOffset = 0;
  limit = 5;
  searchForm: FormGroup;

  filteringQuery = false;
  get f() {
    return this.searchForm.controls;
  }
  constructor(private crudService: CrudService,
              private router: Router,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.filteringQuery = false;
    this.loading = true;
    this.actualOffset = 0;
    this.getAllUsersPaginateWithoutFilters(this.actualOffset, this.limit);
    this.initilizeRangeSliderScript(this.url1);
    this.initilizeSelectScript(this.url2);
    this.initilizeForm();
  }

  initilizeForm() {
    this.searchForm = this.formBuilder.group(
      {
        profile: ['', Validators.compose([
          Validators.required
        ])],
        location: ['', Validators.compose([
          Validators.required
        ])],
        school: ['', Validators.compose([
          Validators.required
        ])],
        min_experience: ['', Validators.compose([
          Validators.required
        ])],
        min_stability: ['', Validators.compose([
          Validators.required
        ])],
        max_stability: ['', Validators.compose([
          Validators.required
        ])],
        max_experience: ['', Validators.compose([
          Validators.required
        ])]
      }
    );
  }

  getAllUsersPaginateWithoutFilters(offset, limit) {
    this.loading = true;
    this.users = [];
    this.labeled_users = [];
    this.users_ids = [];
    this.crudService.getAllPaginate(BASE_API + USERS , offset , limit ).subscribe(
      (data: any) => {
        console.log('labled db result');
        console.log(data)
        this.labeled_users = data;
        data.labeled_users.forEach((labeled_user) => {
          this.users_ids.push(labeled_user.id);
        });
      }, (error) => {
        this.loading = false;
        console.log('error on getting all users paginate');
        console.log(error);
      }, () => {
        this.users = [];
        this.users_ids.forEach((id) => {
            this.crudService.getOne(BASE_API + USERS , id).subscribe(
              (data: ResumeModel) => {
                  this.users.push(data);
                  console.log(data);
              }, (error) => {
                this.loading = false;
                console.log('error on getting one full user by its id');
                console.log(error);
              }, () => {
              }
            );
        });
        this.loading = false;
      }
    );
  }

  initilizeRangeSliderScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }
  initilizeSelectScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  navigate_next() {
    this.actualOffset += 5;
    this.filteringQuery ? this.onSubmitSearch() : this.getAllUsersPaginateWithoutFilters(this.actualOffset, this.limit);
  }
  navigate_prev() {
    this.actualOffset -= 5;
    this.filteringQuery ? this.onSubmitSearch() : this.getAllUsersPaginateWithoutFilters(this.actualOffset, this.limit);
  }

  checkFullResume(userId: any) {
    this.router.navigate(['/one-profile', userId]);
  }

  filterProfiles() {

  }

  onSubmitSearch() {
    this.loading = true;
    this.filteringQuery = true;
    this.users = [];
    this.labeled_users = [];
    this.users_ids = [];
    const min_experience = this.experience.nativeElement.firstElementChild.children[0].firstElementChild.children[1].firstElementChild.innerHTML;
    const max_experiencee = this.experience.nativeElement.firstElementChild.children[2].firstElementChild.children[1].firstElementChild.innerHTML;
    const min_stability = this.stability.nativeElement.firstElementChild.children[2].firstElementChild.children[1].firstElementChild.innerHTML;
    const max_stability = this.stability.nativeElement.firstElementChild.children[2].firstElementChild.children[1].firstElementChild.innerHTML;
    this.crudService.postPaginate(BASE_API + USERS , this.actualOffset , this.limit , { school : this.f.school.value,
    location : this.f.location.value, profile: this.f.profile.value, min_experience: min_experience ,
      max_experience: max_experiencee , min_stability: 1, max_stability: 3 }).subscribe(
      (data: any) => {
        console.log('search result');
        console.log(data)
        this.labeled_users = data;
        data.labeled_users.forEach((labeled_user) => {
          this.users_ids.push(labeled_user.id);
        });
      },
      (error) => {
        this.loading = false;
        console.log(error);
      },
      () => {
        this.loading = false;
        this.users = [];
        this.users_ids.forEach((id) => {
          this.crudService.getOne(BASE_API + USERS , id).subscribe(
            (data: ResumeModel) => {
              this.users.push(data);
              console.log(data);
            }, (error) => {
              this.loading = false;
              console.log('error on getting one full user by its id');
              console.log(error);
            }, () => {
              this.loading = false;
            }
          );
        });
      }
    );
  }

  checkRecommendedProfiles(userId: number) {
    this.router.navigate(['/recommended', userId]);
  }
}
