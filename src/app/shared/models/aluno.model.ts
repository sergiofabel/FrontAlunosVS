export class Aluno{
    public alunoId: number;
    public nome: string;
    public email: string;

    constructor(_alunoId: number, _nome: string, _email:string){
        this.alunoId = _alunoId;
        this.nome = _nome;
        this.email = _email;
    }
}