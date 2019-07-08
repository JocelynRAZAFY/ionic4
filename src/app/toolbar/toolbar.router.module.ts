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
            loadChildren: '../toolbar/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'toolbar',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/toolbar/toolbar.module#ToolbarPageModule'
          }
        ]
      },
      {
        path: 'header',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/header/header.module#HeaderPageModule'
          }
        ]
      },
      {
        path: 'footer',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/footer/footer.module#FooterPageModule'
          }
        ]
      },
      {
        path: 'title',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/title/title.module#TitlePageModule'
          }
        ]
      },
      {
        path: 'buttons',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/buttons/buttons.module#ButtonsPageModule'
          }
        ]
      },
      {
        path: 'back-button',
        children: [
          {
            path: '',
            loadChildren: '../toolbar/back-button/back-button.module#BackButtonPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/toolbar/item',
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
export class ToolbarRoutingModule {}
