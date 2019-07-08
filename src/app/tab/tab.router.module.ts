import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab.page'

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'music',
        children: [
          {
            path: '',
            loadChildren: '../tab/music/music.module#MusicPageModule'
          }
        ]
      },
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: '../tab/movies/movies.module#MoviesPageModule'
          }
        ]
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: '../tab/games/games.module#GamesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tab/music',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class TabRoutingModule {}
