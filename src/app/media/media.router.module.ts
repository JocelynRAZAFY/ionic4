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
            loadChildren: '../media/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'avatar',
        children: [
          {
            path: '',
            loadChildren: '../media/avatar/avatar.module#AvatarPageModule'
          }
        ]
      },
      {
        path: 'img',
        children: [
          {
            path: '',
            loadChildren: '../media/img/img.module#ImgPageModule'
          }
        ]
      },
      {
        path: 'thumbnail',
        children: [
          {
            path: '',
            loadChildren: '../media/thumbnail/thumbnail.module#ThumbnailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/media/item',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MediaRoutingModule {}
