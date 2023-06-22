export class NodesFactory {
    static create({ className, id, text, tag }: { [key: string]: string }) {
        const elem = document.createElement(tag);
        elem.classList.add(className);
        elem.textContent = text;
        elem.id = id;
        return elem;
    }
}
