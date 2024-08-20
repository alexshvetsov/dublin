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
import {
  AdminPlayerView,
  PlayerView,
} from '../../../../utilities/models/player-view-interfaces';
import { UserType } from '../../../constants/user-type';
import { AuthService } from '../../../../utilities/services/auth.service';

@Component({
  selector: 'app-player-form',
  standalone: false,
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss',
})
export class PlayerFormComponent implements OnInit, OnChanges {
  adminName: string = 'admin1';
  playerFormGroup: FormGroup = this.createPlayerFormGroup();
  @Input() player?: AdminPlayerView;

  @Output() playerFormSubmitted: EventEmitter<AdminPlayerView> =
    new EventEmitter<AdminPlayerView>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.player) {
      this.assignFormValues();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player'].currentValue) {
      this.player = changes['player'].currentValue as AdminPlayerView;
      if (this.authService.userType === UserType.Admin) {
        this.assignFormValues();
      }
    }
  }

  get adminIdControl(): FormControl {
    return this.playerFormGroup.get('adminId') as FormControl;
  }

  get agentIdControl(): FormControl {
    return this.playerFormGroup.get('agentId') as FormControl;
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
      name: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      agentPhoneNumber: new FormControl(''),
      agentName: new FormControl(''),
      weeklyBalance: new FormControl(0, [
        Validators.required,
        Validators.min(0),
      ]),
      totalBalance: new FormControl(0, [
        Validators.required,
        Validators.min(0),
      ]),
      weeklyRake: new FormControl(0, [Validators.required, Validators.min(0)]),
      userType: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      familyName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      phoneId: new FormControl('', Validators.required),
      agentId: new FormControl('', Validators.required),
      adminId: new FormControl('', Validators.required),
      createdDate: new FormControl(
        { value: new Date(), disabled: true },
        Validators.required
      ),
      updatedDate: new FormControl(
        { value: new Date(), disabled: true },
        Validators.required
      ),
    });
  }

  onSubmit(): void {
    const player: AdminPlayerView = this.createNewPlayer();
    if (player) {
      this.playerFormSubmitted.emit(player);
      console.log('Player data submitted:', player);
    }
  }

  createNewPlayer(): AdminPlayerView {
    const defaultPlayer = {
      id: '-1',
      weeklyBalance: 0,
      weeklyRake: 0,
      totalBalance: 0,
      games: [],
      createdDate: new Date(),
      updatedDate: new Date(),
    };

    const playerData = this.playerFormGroup.getRawValue();

    return this.player
      ? { ...this.player, ...playerData }
      : { ...defaultPlayer, ...playerData };
  }
}
