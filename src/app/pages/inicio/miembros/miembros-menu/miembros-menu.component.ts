import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Miembro } from '../../../../models/Miembro';

@Component({
  selector: 'app-miembros-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miembros-menu.component.html',
  styleUrl: './miembros-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiembrosMenuComponent implements OnInit {
  @Input()
  miembros: Miembro[] = [];

  @Output()
  miembroSeleccionadoEmitter: EventEmitter<Miembro> = new EventEmitter<Miembro>();

  miembroSeleccionado?: Miembro;

  ngOnInit(): void {
    this.miembroSeleccionado = this.miembros[0];
  }

  seleccionarMiembro(miembro: Miembro) {
    this.miembroSeleccionado = miembro;
    this.miembroSeleccionadoEmitter.emit(miembro);
  }

  isMiembroSeleccionado(miembro: Miembro): boolean {
    return this.miembroSeleccionado === miembro;
  }
}
