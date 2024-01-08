export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly JAVASPRINGBOOT = new Tag('JavaSpringBoot', 'greenyellow');
    static readonly TDD = new Tag('Tdd', 'pink');
    static readonly SQL = new Tag('SQL', 'lightblue');
    static readonly GIT = new Tag('Git', 'darkred');
    static readonly JAVASCRIPT = new Tag('Javascript', 'darkyellow');
    static readonly CSS = new Tag('Css', 'blue');
    static readonly HTML = new Tag('Angular', 'darkorange');
    static readonly REACT = new Tag('React', 'lightskyblue');

    

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}