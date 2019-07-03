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
            loadChildren: '../items/item/item.module#ItemPageModule'
          }
        ]
      },
      {
        path: 'basic',
        children: [
          {
            path: '',
            loadChildren: '../items/basic/basic.module#BasicPageModule'
          }
        ]
      },
      {
        path: 'arrows',
        children: [
          {
            path: '',
            loadChildren: '../items/arrows/arrows.module#ArrowsPageModule'
          }
        ]
      },
      {
        path: 'list-items',
        children: [
          {
            path: '',
            loadChildren: '../items/list-items/list-items.module#ListItemsPageModule'
          }
        ]
      },
      {
        path: 'item-lines',
        children: [
          {
            path: '',
            loadChildren: '../items/item-lines/item-lines.module#ItemLinesPageModule'
          }
        ]
      },
      {
        path: 'media-items',
        children: [
          {
            path: '',
            loadChildren: '../items/media-items/media-items.module#MediaItemsPageModule'
          }
        ]
      },
      {
        path: 'buttons-items',
        children: [
          {
            path: '',
            loadChildren: '../items/buttons-items/buttons-items.module#ButtonsItemsPageModule'
          }
        ]
      },
      {
        path: 'icons-items',
        children: [
          {
            path: '',
            loadChildren: '../items/icons-items/icons-items.module#IconsItemsPageModule'
          }
        ]
      },
      {
        path: 'item-inputs',
        children: [
          {
            path: '',
            loadChildren: '../items/item-inputs/item-inputs.module#ItemInputsPageModule'
          }
        ]
      },
      {
        path: 'item-dividers',
        children: [
          {
            path: '',
            loadChildren: '../items/item-dividers/item-dividers.module#ItemDividersPageModule'
          }
        ]
      },
      {
        path: 'item-group',
        children: [
          {
            path: '',
            loadChildren: '../items/item-group/item-group.module#ItemGroupPageModule'
          }
        ]
      },
      {
        path: 'item-sliding',
        children: [
          {
            path: '',
            loadChildren: '../items/item-sliding/item-sliding.module#ItemSlidingPageModule'
          }
        ]
      },
      {
        path: 'label',
        children: [
          {
            path: '',
            loadChildren: '../items/label/label.module#LabelPageModule'
          }
        ]
      },
      {
        path: 'note',
        children: [
          {
            path: '',
            loadChildren: '../items/note/note.module#NotePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/items/item',
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
export class ItemsRoutingModule {}
