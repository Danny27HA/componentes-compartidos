import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Animal } from './models/animal.model';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AnimalCardComponent {
  @Input() animal!: Animal & { editando?: boolean };
  @Output() eliminar = new EventEmitter<string>();
  @Output() guardar = new EventEmitter<Animal>();
  @Output() editar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit(this.animal.id);
  }

  onEditar() {
    this.animal.editando = true;
    this.editar.emit();
  }

  onGuardar() {
    this.animal.editando = false;
    this.guardar.emit(this.animal);
  }
}
