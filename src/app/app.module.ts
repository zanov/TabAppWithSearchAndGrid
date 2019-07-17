import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { AssetItemComponent } from './components/asset-item/asset-item.component';
import { AssetsService } from './services/assets.service';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContainerComponent,
    AssetItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpParams, AssetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
