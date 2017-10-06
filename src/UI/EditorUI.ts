import {UI} from "./index";
import {Div} from "./HTML/Div";

export class EditorUI extends UI {

    protected view: Div;

    constructor() {
        super();
    }

    protected configView() {
        this.view.class = "fdpEditorUI";
    }

    protected addElements() {
        this.addButton("Add Flour", function () {
            console.log("salut");
        });
    }
}