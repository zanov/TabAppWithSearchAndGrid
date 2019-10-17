import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { AssetItemComponent } from './components/asset-item/asset-item.component';
import { AssetModalComponent } from './components/asset-modal/asset-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContainerComponent,
    AssetItemComponent,
    AssetModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [AssetModalComponent],
  providers: [HttpParams],
  bootstrap: [AppComponent]
})
export class AppModule {}
