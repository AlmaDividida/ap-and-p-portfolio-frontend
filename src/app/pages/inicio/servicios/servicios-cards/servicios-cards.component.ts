import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LottieLazyComponent } from '../../../../shared/LottieLazyComponent/LottieLazyComponent.component';
import { Subservicio } from '../../../../models/Subservicio';

@Component({
  selector: 'app-servicios-cards',
  standalone: true,
  imports: [
    CommonModule,
    LottieLazyComponent,
  ],
  templateUrl: './servicios-cards.component.html',
  styleUrl: './servicios-cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosCardsComponent {
  @Input()
  servicios: Subservicio[] = [];
  constructor() {}
}
