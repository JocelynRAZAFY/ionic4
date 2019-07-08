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
            loadChildren: '../nats/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'file-chooser',
        children: [
          {
            path: '',
            loadChildren: '../nats/file-chooser/file-chooser.module#FileChooserPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/nats/item',
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
export class NatsRoutingModule {}
