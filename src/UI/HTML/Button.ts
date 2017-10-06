import {HTML} from "./index";

export class Button extends HTML {

    private label: string;
    private callBack: any;

    constructor(idParent: string, label: string, callBack: string) {
        super(idParent, 'button');

        this.label = label;
        this.callBack = callBack;

        this.addEvent();
    }

    private addEvent() {
        this.html.addEventListener("click", this.callBack, false);
    }

}