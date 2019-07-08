import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'item',
        children: [
          {
            path: '',
            loadChildren: '../search/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: '../search/searchbar/searchbar.module#SearchbarPageModule'
          }
        ]
      },
      {
        path: 'data',
        children: [
          {
            path: '',
            loadChildren: '../search/data/data.module#DataPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/searchbar/item',
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
export class SearchRoutingModule {}
