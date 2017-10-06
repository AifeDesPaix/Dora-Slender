// import * as $ from 'jquery';

export abstract class HTML {

    private static idNumber: number = 0;

    private idParent: string;
    private _id: string;
    private _html: any;
    private _class: string;
    private _tagName: string;

    constructor(idParent: string, tagName: string) {
        this.idParent = idParent;
        this._tagName = tagName;

        this._id = "Elem_"+HTML.idNumber++;
        this.pushHtml(this._tagName);
    }

    get id(): string {
        return this._id;
    }

    get html(): any {
        return document.getElementById(this._id);
    }

    set class(value: string) {
        this._class = value;
        this.html.className = this._class;
    }

    private pushHtml(html: string) {
        const tag = document.createElement(html);
        tag.id = this.id;
        document.getElementById(this.idParent).appendChild(tag);
    }


}