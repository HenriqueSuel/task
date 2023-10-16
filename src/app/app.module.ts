import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    CurrencyFormatPipe,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
