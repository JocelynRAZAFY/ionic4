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
            loadChildren: '../reorder/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'reorder',
        children: [
          {
            path: '',
            loadChildren: '../reorder/reorder/reorder.module#ReorderPageModule'
          }
        ]
      },
      {
        path: 'group',
        children: [
          {
            path: '',
            loadChildren: '../reorder/group/group.module#GroupPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/reorder/item',
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
export class ReorderRoutingModule {}
