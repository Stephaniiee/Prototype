import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDiagramModule, DxPopupModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { CevaComponent } from './ceva/ceva.component';
import { Service } from './ceva/ceva.service';
import { ButtonComponent } from './ceva/button/button.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CevaComponent,
    ButtonComponent,
  ],
  imports: [
        BrowserModule,
        DxDiagramModule,
        DxPopupModule,
        DxTextBoxModule,
        DxButtonModule,
        DxTemplateModule,
  ],
  bootstrap: [AppComponent]
})
    export class AppModule { }
    
