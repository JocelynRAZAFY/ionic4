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
            loadChildren: '../segment/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'segment',
        children: [
          {
            path: '',
            loadChildren: '../segment/segment/segment.module#SegmentPageModule'
          }
        ]
      },
      {
        path: 'button',
        children: [
          {
            path: '',
            loadChildren: '../segment/button/button.module#ButtonPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/segment/item',
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
export class SegmentRoutingModule {}
