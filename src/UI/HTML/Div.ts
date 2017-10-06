import {HTML} from "./index";

export class Div extends HTML {

    constructor(idParent: string, className: string) {
        super(idParent, 'div');
        this.class = className;
    }

}