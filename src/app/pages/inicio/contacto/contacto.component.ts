import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorreosService } from '../../../services/correos.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent {

  public contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });

  constructor(
    protected service: CorreosService,
  ) { }
  

  sendContactForm() : void {
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

}
