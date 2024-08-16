import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player } from '../../../../utilities/models/player';

@Component({
  selector: 'app-player-form',
  standalone: false,
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent implements OnInit, OnChanges {
  adminName: string = 'admin1';
  playerFormGroup: FormGroup = this.createPlayerFormGroup();
  @Input() player?: Player;

  @Output() playerFormSubmitted: EventEmitter<Player> =
    new EventEmitter<Player>();

  constructor() {}

  ngOnInit(): void {
    if (this.player) {
      this.assignFormValues();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('asdad', this.player);
    console.log('asdad', changes['player']);
    if (changes['player'].currentValue) {
      this.player = changes['player'].currentValue as Player;
      this.assignFormValues();
    }
  }
  assignFormValues(): void {
    if (this.player) {
      this.playerFormGroup.patchValue({
        ...this.player,
        updatedDated: new Date(),
      });
    }
  }

  createPlayerFormGroup(): FormGroup {
    return new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),

      inGameName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.maxLength(10),
      ]),
      agentId: new FormControl('', [Validators.required]),
      createDate: new FormControl({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      updatedDated: new FormControl({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      adminName: new FormControl({ value: this.adminName, disabled: true }, [
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    const player: Player = this.createNewPlayer();
    if (player) {
      this.playerFormSubmitted.emit(player);
      console.log('Player data submitted:', player);
    }
  }

  createNewPlayer(): Player {
    const defaultPlayer = {
      id: '-1',
      weeklyBalance: 0,
      weeklyRake: 0,
      totalBalance: 0,
      games: [],
    };

    const playerData = this.playerFormGroup.getRawValue();

    return this.player
      ? { ...this.player, ...playerData }
      : { ...defaultPlayer, ...playerData };
  }
}
