import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosListComponent } from './alunos/alunos-list/alunos-list.component';
import { AlunosEditComponent } from './alunos/alunos-edit/alunos-edit.component';

// Services
import { AlunoService } from './shared/services/alunos.service';

import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    AlunosComponent,
    AlunosListComponent,
    AlunosEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
