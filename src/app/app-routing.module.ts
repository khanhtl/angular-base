import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes, withPreloading } from '@angular/router';
import { FlagBasedPreloadingStrategy } from './shared/utils/flag-based-preloading-strategy';

const routes: Routes=[
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: withPreloading(FlagBasedPreloadingStrategy)
  })],
  providers: [{
    provide: PreloadingStrategy,
    useClass: FlagBasedPreloadingStrategy
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
