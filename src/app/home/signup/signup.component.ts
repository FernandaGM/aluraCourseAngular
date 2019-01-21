import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import {PlataformDetectorService} from '../../core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [
    UserNotTakenValidatorService
  ]
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private plataformDetectorService: PlataformDetectorService,
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
    this.plataformDetectorService.isPlataformBrowser() && this.emailInput.nativeElement.focus();
  }

  signup() {

    const newUser = this.signupForm.getRawValue() as NewUser;

    this.signupService.signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        error => console.log(error.message)
      );
  }
}
