export class GrammarRule {
    constructor(
        public id: number,
        public left: string,
        public right: string,
        public userAnswer: string,
        public goodAnswer: string,
        public url: string,
        public hintId: number) { }
}
