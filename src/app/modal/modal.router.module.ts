import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'modal',
        children: [
          {
            path: '',
            loadChildren: '../modal/modal/modal.module#ModalPageModule'
          }
        ]
      },
      {
        path: 'push',
        children: [
          {
            path: '',
            loadChildren: '../modal/push/push.module#PushPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/modal/modal',
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
export class ModalRoutingModule {}
