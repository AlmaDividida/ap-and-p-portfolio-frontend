import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorreosService } from '../../../services/correos.service';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterModule } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LottieComponent,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactoComponent { 
  isModalActived: boolean = false;
  optionsContacto: AnimationOptions;
  optionsMessageSuccessfully: AnimationOptions;
  styles: Partial<CSSStyleDeclaration>;

  public contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  constructor(
    protected service: CorreosService,
    protected darkModeService: DarkModeService,
  ) {
    this.optionsContacto = {
      path: 'https://lottie.host/a87e1156-4f20-4ab1-82c0-94bd61e9a929/Lc4RHRkdhi.json',
    };

    this.optionsMessageSuccessfully = {
      path: 'https://lottie.host/d61bcda6-9c46-4d2c-a341-012f4a131ef5/czfPl2VYxm.json',
      loop: false,
    };


    this.styles = {
      width: '100%',
      height: '100%',
    };
  }

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
  }
  
  getDarkMode() {
    return this.darkModeService.getDarkMode();
  }

  sendContactForm() : void {
    this.openModal();
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.service.sendEmail(this.contactForm.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  openModal() {
    this.isModalActived = true;
  }

  closeModal() {
    this.contactForm.reset();
    this.isModalActived = false;
  }

}
