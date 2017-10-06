import {ElementUI} from "./ElementUI/index";
import {Div} from "./HTML/Div";
import {Button} from "./HTML/Button";

export abstract class UI {

    private elements: Array<ElementUI>;
    protected abstract view: Div;

    constructor() {
        this.elements = Array<ElementUI>();
        this.view = new Div("game", "fdpGame");
        this.configView();
        this.addElements();
    }

    protected abstract configView();
    protected abstract addElements();

    protected addButton(label, callBack) {
        const button = new Button(this.view.id, label, callBack);
        this.elements.push(button);

    }
}