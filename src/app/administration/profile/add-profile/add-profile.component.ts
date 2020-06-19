import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../../_services/crud.service';
import {BASE_API, PROFILE} from '../../../_globals/vars';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {


  addProfileForm: FormGroup;
  skills: FormArray;


  constructor(private formBuilder: FormBuilder, private crudService: CrudService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.addProfileForm = this.formBuilder.group({
      profile_name: [null, Validators.compose([Validators.required])],
      skills: this.formBuilder.array([this.createSkill()])
    });

    this.skills = this.addProfileForm.get('skills') as FormArray;
  }
  addSkill(): void {
    this.skills.push(this.createSkill());
  }
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  getSkillsFormGroup(index): FormGroup {
    this.skills = this.addProfileForm.get('skills') as FormArray;
    return this.skills.controls[index] as FormGroup;
  }

  getSkillFormGroup() {
    return this.addProfileForm.get('skills') as FormArray;
  }

  private createSkill() {
    return this.formBuilder.group({
      skill_name: ['', Validators.compose([Validators.required])],
      skill_coeff: ['', Validators.compose([Validators.required])]
    });
  }

  getSkillName(index: number) {
    return this.getSkillsFormGroup(index).controls.skill_name.value;
  }

  getSkillCoeff(index: number) {
    return this.getSkillsFormGroup(index).controls.skill_coeff.value;
  }

  getProfileName() {
    return this.addProfileForm.get('profile_name').value;
  }
  onSubmit() {
    this.skills = this.addProfileForm.get('skills') as FormArray;
    const skillList = [];
    for (let i = 0 ; i < this.skills.length; i++) {
      skillList.push({name: this.getSkillName(i),
      coeff: this.getSkillCoeff(i)

    });
      console.log(skillList)

      const profile = {name: this.getProfileName(), skills: skillList};
      console.log(profile)
      this.crudService.post(BASE_API + PROFILE, profile).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {

      }
    );

  }
}}
