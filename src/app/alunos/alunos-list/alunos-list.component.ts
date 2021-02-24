import { AlunoService } from './../../shared/services/alunos.service';
import { Aluno } from './../../shared/models/aluno.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: "app-alunoList",
    templateUrl: "./alunos-list.component.html",
})
export class AlunosListComponent implements OnInit, OnDestroy {
    alunos: Aluno[];
    @Output() alunoWasSelected = new EventEmitter<Aluno>();
    
    constructor(private AlunoService: AlunoService,private router: Router) { }

    ngOnInit() {
        this.GetAllAlunos();
        
    }

    ngOnDestroy(): void {
        
    }

    onAlunoSelected(aluno:Aluno) {
        this.router.navigate(['./alunos/'+aluno.alunoId+'/edit']);
    }

    // Chama o serviço para obtém todos os carros
    GetAllAlunos() {
        this.AlunoService.getAlunos().subscribe((alunos: Aluno[]) => {
            this.alunos = alunos;
            
        });
    }

    onAlunoDeleted(id:number){             
        this.AlunoService.deleteAluno(id.toString()).subscribe(aluno =>{
        },error=>{
            throw error
        });
    }
}
