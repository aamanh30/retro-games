import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageComponent } from './shared/layouts/full-page/full-page.component';

const routes: Routes = [
  {
    path: '',
    component: FullPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            ({ DashboardModule }) => DashboardModule
          ),
      },
      {
        path: 'vanishing-dots',
        loadChildren: () =>
          import('./features/vanishing-dots/vanishing-dots.module').then(
            ({ VanishingDotsModule }) => VanishingDotsModule
          ),
      },
      {
        path: 'fast-maths',
        loadChildren: () =>
          import('./features/fast-maths/fast-maths.module').then(
            ({ FastMathsModule }) => FastMathsModule
          ),
      },
      {
        path: 'battleship',
        loadChildren: () =>
          import('./features/battleship/battleship.module').then(
            ({ BattleshipModule }) => BattleshipModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
