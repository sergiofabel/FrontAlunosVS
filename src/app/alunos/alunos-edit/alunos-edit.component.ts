import { Aluno } from './../../shared/models/aluno.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription, empty } from 'rxjs';
import { AlunoService } from 'src/app/shared/services/alunos.service';

@Component({
    selector: 'app-alunos-edit',
    templateUrl: './alunos-edit.component.html',
    styleUrls: ['./alunos-edit.component.css']
})
export class AlunosEditComponent implements OnInit {
    id: number;
    editMode = false;
    alunoForm: FormGroup;
    alunoItem = {
        nome: "",
        email: "",
    }

    constructor(private route: ActivatedRoute, private alunoService: AlunoService, private router: Router) 
    { 
        
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params["id"];
            this.editMode = params["id"] != null;
            this.initForm();
        });
    }

    private initForm() {
        let aluno;

        this.OnValidators();

        if (this.editMode) {
            this.GetAluno();
        }else{
            this.alunoItem.nome = "";
            this.alunoItem.email = "";
            this.OnValidators();
        }          
    }


    OnValidators(){
        this.alunoForm = new FormGroup({
            "nome": new FormControl(this.alunoItem.nome, Validators.required),
            "email": new FormControl(this.alunoItem.email, Validators.required),
        });
    }

    onSubmitAluno() {
        const newAluno = new Aluno(null,this.alunoForm.value["nome"], this.alunoForm.value["email"]);

        if (this.editMode) {
            newAluno.alunoId = this.id;
            this.UpdateAluno(this.id, newAluno);
        } else {
            this.InsertAluno(newAluno);
        }
        this.onCancel();
    }

 

    onCancel() {        
        this.router.navigateByUrl("alunos")
    }

    InsertAluno(aluno: Aluno){
        this.alunoService.insertAluno(aluno).subscribe(data =>{
            
        })
    }

    UpdateAluno(id:any,aluno: Aluno){
        this.alunoService.updateAluno(id,aluno).subscribe(data =>{

        })
    }

    GetAluno() {
        this.alunoService.getAluno(this.id.toString()).subscribe((aluno: Aluno) => {
            this.alunoItem.nome = aluno.nome;
            this.alunoItem.email = aluno.email;

            this.alunoForm = new FormGroup({
                "nome": new FormControl(this.alunoItem.nome, Validators.required),
                "email": new FormControl(this.alunoItem.email, Validators.required),
            });
        });
    }

}
