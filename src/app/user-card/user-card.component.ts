import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserCard } from '../model/user-card';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  morty: UserCard = new UserCard(
    1,
    'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90069/97748/Rick-and-Morty-Rick-Morty-Smith-Lifesize-Cardboard-Cutout-buy-now-at-starstills__63410.1678789939.jpg?c=2&imbypass=on',
    'Morty',
    14
  );

  rick: UserCard = new UserCard(
    2,
    'https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png',
    'Rick',
    56
  );

  users: UserCard[] = [this.morty, this.rick];
}
