import { Component, inject, signal } from '@angular/core';
import { DragonballCharacterComponent } from "../../components/dragonball/dragonball-character-component/dragonball-character-component";
import { DragonBallCharacterAdd } from "../../components/dragonball/dragon-ball-character-add/dragon-ball-character-add";
import { DragonBallService } from '../../services/dragonball-service';

@Component({
  templateUrl: './dragonball-super-page-component.html',
  imports: [DragonballCharacterComponent, DragonBallCharacterAdd],
})

export class DragonballSuperPageComponent
{
  public dragonballService = inject(DragonBallService);

}
