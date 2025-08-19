import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss'
})
export class EmptyState {

  title = input<string>('No hay datos disponibles');
  description = input<string>('Intenta crear un nuevo registro o modificar los filtros.');
  actionLabel = input<string | null>(null);

}
