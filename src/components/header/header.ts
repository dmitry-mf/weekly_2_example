import { NodesFactory } from '../../utils';
import template from './header.html';

const list = [
    { className: 'class2', text: 'text 1', id: '1', tag: 'li' },
    { className: 'class1', text: 'text 2', id: '2', tag: 'li' },
];

export class Header {
    nodes: Element | null;

    constructor() {
        this.nodes = null;
    }

    render() {
        const elem = document.createElement('div');
        elem.innerHTML = this.prepareTemplate(template, 'HeLlo World');
        this.nodes = elem.firstElementChild;
        this.nodes && document.body.append(this.nodes);
    }

    renderList() {
        const nodeList = list.map((data) => NodesFactory.create(data));

        nodeList.forEach((node) => {
            if (this.nodes) {
                const menu = document.getElementById('menu');
                menu?.append(node);
            }
        });
    }

    prepareTemplate(template: string, title: string) {
        const result = template.replace('{{ title }}', title);
        return result;
    }
}
