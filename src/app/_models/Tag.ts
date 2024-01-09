export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#C3002F');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6');
    static readonly JAVA = new Tag('Java', '#5382A1');
    static readonly SPRINGBOOT = new Tag('SpringBoot', '#80EA6E');
    static readonly TDD = new Tag('TDD', 'pink');
    static readonly SQL = new Tag('SQL', 'lightblue');
    static readonly JAVASCRIPT = new Tag('Javascript', '#EFD81D');
    static readonly CSS = new Tag('CSS', '#225BEC');
    static readonly HTML = new Tag('HTML', '#E34E24');
    static readonly DOCKER = new Tag('Docker', '#1D63ED');


    

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}