export class Question{
    public question:string;
    public description:string;
    public answers:string[];

    constructor(question:string, description:string, answers:string[]){
        this.question = question;
        this.description = description;
        this.answers = answers
    }

}