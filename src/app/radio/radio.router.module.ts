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
            loadChildren: '../radio/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'radio',
        children: [
          {
            path: '',
            loadChildren: '../radio/radio/radio.module#RadioPageModule'
          }
        ]
      },
      {
        path: 'group',
        children: [
          {
            path: '',
            loadChildren: '../radio/group/group.module#GroupPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/radio/item',
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
export class RadioRoutingModule {}
