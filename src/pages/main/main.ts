/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Header } from '../../components/header/header';
import authrozation from '../../services/authrozation';

class Page {
    header: Header;

    constructor() {
        this.header = new Header();
    }

    init() {
        this.renderPage();
        this.subscribeOnHeaderClick(this.header.nodes);
    }

    renderPage() {
        this.header.render();
        this.header.renderList();
    }

    subscribeOnHeaderClick(header: Element | null) {
        header &&
            header.addEventListener('click', (e) => {
                // @ts-ignore
                if (e.target.nodeName === 'LI') {
                    console.log('li clicked');
                }
            });
    }

    async getToken() {
        const token = await authrozation.getToken();
        console.log(token);
    }
}

export const page = new Page();
