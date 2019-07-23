import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
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
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpParams, AssetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
