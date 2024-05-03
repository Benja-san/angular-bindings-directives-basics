import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: UserCardComponent },
  { path: 'catalog', component: CatalogComponent },
];
