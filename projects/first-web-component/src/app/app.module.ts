import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UIButtonComponent } from './uibutton/uibutton.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  entryComponents: [UIButtonComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UIButtonComponent, { injector });
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap() {}
}
