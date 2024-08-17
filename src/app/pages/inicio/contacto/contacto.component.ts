import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorreosService } from '../../../services/correos.service';
import { DarkModeService } from '../../../services/dark-mode.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent { 
  isModalActived: boolean = false;

  public contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  constructor(
    protected service: CorreosService,
    protected darkModeService: DarkModeService,
  ) { }

  getColorClass() {
    return this.darkModeService.getDarkMode() ? 'color-dark' : 'color-light';
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
