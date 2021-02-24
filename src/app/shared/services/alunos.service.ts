import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core'
import { Observable, Subject, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators';
import { Aluno } from '../models/aluno.model';


@Injectable()
export class AlunoService {
    private headers: HttpHeaders;
    url = "https://localhost:5001/api/Aluno";


    constructor(private httpclient: HttpClient) 
    {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'});
    }

    // Metodo para retornar todos alunos
    getAlunos():Observable<Aluno[]> {
        return this.httpclient.get<Aluno[]>(this.url + "/GetAllAlunos")
        .pipe(
            retry(2),
            catchError(this.handleError))
    }

    // Metodo para retornar um Aluno
    getAluno(id: string): Observable<Aluno>{
        return this.httpclient.get<Aluno>(this.url + "/GetAluno/"+id)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

    // Metodo para inserir um Aluno
    insertAluno(aluno: Aluno){
        return this.httpclient.post(this.url +"/InsertAluno", aluno, { headers: this.headers })
            .pipe(
                retry(2),
                    catchError(this.handleError))
    }

    // Metodo para atualizar um Aluno
    updateAluno(id:any,aluno){
        return this.httpclient.put(this.url + "/UpdateAluno/" + id, aluno, { headers: this.headers })
            .pipe(
                retry(2),
                    catchError(this.handleError))
    }

    // Metodo para deletar um Aluno
    deleteAluno(id:string){
        return this.httpclient.delete(this.url +"/DeleteAluno/"+id)
            .pipe(
                retry(2),
                    catchError(this.handleError)
            )
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
}