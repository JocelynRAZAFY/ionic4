import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule' },
  { path: 'datetime', loadChildren: './datetime/datetime.module#DatetimePageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'infinite', loadChildren: './infinite/infinite.module#InfinitePageModule' },
  { path: 'input', loadChildren: './input/input.module#InputPageModule' },
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'media', loadChildren: './media/media.module#MediaModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'spinner', loadChildren: './spinner/spinner.module#SpinnerPageModule' },
  { path: 'radio', loadChildren: './radio/radio.module#RadioModule' },
  { path: 'item', loadChildren: './radio/item/item.module#ItemPageModule' },
  { path: 'range', loadChildren: './range/range.module#RangePageModule' },
  { path: 'refresher', loadChildren: './refresher/refresher.module#RefresherPageModule' },
  { path: 'reorder', loadChildren: './reorder/reorder.module#ReorderModule' },
  { path: 'searchbar', loadChildren: './search/search.module#SearchModule' },
  { path: 'segment', loadChildren: './segment/segment.module#SegmentModule' },
  { path: 'select', loadChildren: './select/select.module#SelectPageModule' },
  { path: 'slide', loadChildren: './slide/slide.module#SlidePageModule' },
  { path: 'tab', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' },
  { path: 'toggle', loadChildren: './toggle/toggle.module#TogglePageModule' },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarModule' },
  { path: 'text', loadChildren: './text/text.module#TextPageModule' },
  { path: 'nats', loadChildren: './nats/nats.module#NatsModule' },
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
  { path: 'developer/:id', loadChildren: './pages/developer/developer.module#DeveloperPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
