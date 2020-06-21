import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {BASE_API, USERS} from '../../_globals/vars';
import {ResumeModel} from '../../_models/full-resume-models/resume.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LabeledUserModel} from '../../_models/full-resume-models/labeled.user.model';
import {UserInfoModel} from '../../_models/full-resume-models/user.info.model';
import {SearchResultModel} from '../../_models/full-resume-models/search.result.model';
declare var $: any;
@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {


  @ViewChild('experience', { static: false }) public experience: ElementRef;

  url1 = 'assets/js/pages/ui/range-sliders.js';
  url2 = 'assets/js/pages/forms/form-data.js';
  url3 = 'assets/js/bundles/multiselect/js/jquery.multi-select.js';
  loading;
  searchResult: SearchResultModel;
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
    this.initilizeSelectScript(this.url3);
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
        max_experience: ['', Validators.compose([
          Validators.required
        ])]
      }
    );
  }

  getAllUsersPaginateWithoutFilters(offset, limit) {
    this.actualOffset = 0;
    this.loading = true;
    this.crudService.getAllPaginate(BASE_API + USERS , offset , limit ).subscribe(
      (data: SearchResultModel) => {
        console.log('labled db result');
        console.log(data);
        this.searchResult = data;
      }, (error) => {
        this.loading = false;
        console.log('error on getting all users paginate without filters');
        console.log(error);
      }, () => {
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
    this.filteringQuery ? this.navigateSearch(false) : this.getAllUsersPaginateWithoutFilters(this.actualOffset , this.limit);
  }
  navigate_prev() {
    this.actualOffset -= 5;
    this.filteringQuery ? this.navigateSearch(false) : this.getAllUsersPaginateWithoutFilters(this.actualOffset , this.limit);
  }

  checkFullResume(userId: any) {
    this.router.navigate(['/one-profile', userId]);
  }

  filterProfiles() {

  }

  navigateSearch(isNewRequest: boolean) {
    if (isNewRequest) {
      this.actualOffset = 0;
      this.onSubmitSearch();
    } else {
      this.onSubmitSearch();
    }
  }

  onSubmitSearch() {
    this.loading = true;
    this.filteringQuery = true;
    const min_experience = this.experience.nativeElement.firstElementChild.children[0].firstElementChild.children[1].firstElementChild.innerHTML;
    const max_experiencee = this.experience.nativeElement.firstElementChild.children[2].firstElementChild.children[1].firstElementChild.innerHTML;
    this.crudService.postPaginate(BASE_API + USERS , this.actualOffset , this.limit , { school : this.f.school.value,
    location : this.f.location.value, profile: this.f.profile.value, min_experience: min_experience ,
      max_experience: max_experiencee }).subscribe(
      (data: SearchResultModel) => {
        console.log('labled db result');
        console.log(data);
        this.searchResult = data;
      }, (error) => {
        this.loading = false;
        console.log('error on getting all users paginate without filters');
        console.log(error);
      }, () => {
        this.loading = false;
      }

    );
  }

  checkRecommendedProfiles(userId: string) {
    this.router.navigate(['/recommended', userId]);
  }
}
