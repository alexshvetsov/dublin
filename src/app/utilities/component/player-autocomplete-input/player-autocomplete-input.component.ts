import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { PlayersService } from '../../services/players.service';
import { SelectOption } from '../../models/select-option';

@Component({
  selector: 'app-player-autocomplete-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './player-autocomplete-input.component.html',
  styleUrls: ['./player-autocomplete-input.component.scss'],
})
export class PlayerAutocompleteInputComponent implements OnInit {
  @Input() control!: FormControl;
  filteredPlayers$: Observable<SelectOption[]> = new Observable<
    SelectOption[]
  >();

  constructor(private playerService: PlayersService) {}

  ngOnInit(): void {
    this.filteredPlayers$ = this.control.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filterPlayers(value || ''))
    );
  }

  private _filterPlayers(value: string): Observable<SelectOption[]> {
    const filterValue = value.toLowerCase();
    return this.playerService.getPlayersForAutocomplete(value);
  }
}
