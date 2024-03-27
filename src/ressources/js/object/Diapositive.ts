class Diapositive {
    private readonly elementHTML : HTMLHtmlElement;

    private tabDiapo : ArrayLike<HTMLHtmlElement>

    private numDiapoCourante : number

    public constructor(tabDiapo : ArrayLike<HTMLHtmlElement>) {
        this.tabDiapo = tabDiapo
        this.numDiapoCourante = 0;
    }

    public diapoSuivante() : void {

    }

    private suivantPossible() : boolean {
        return this.numDiapoCourante == this.tabDiapo.length - 1;
    }

    public diapoPrecedante() : void {

    }

    private precedante
}