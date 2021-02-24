
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AlunosComponent } from './alunos/alunos.component';
import { AlunosEditComponent } from './alunos/alunos-edit/alunos-edit.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [        
    // {path: "alunos",component: AlunosComponent, children: [      
        
    //     { path: "new", component: AlunosEditComponent},
    //      { path: ":id/edit", component: AlunosEditComponent},
    //      { path: "", component: AlunosComponent }
    // ]}
     {path: "alunos",component: AlunosComponent},     
    { path: "alunos/new", component: AlunosEditComponent},
    { path: "alunos/:id/edit", component: AlunosEditComponent}   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}