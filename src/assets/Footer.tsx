import { createElement, type JSX } from "react";
export default function Footer(): JSX.Element {
    return (
        createElement('footer', {className: 'footer'}, 
            createElement('div', {className: 'container'}, 
                createElement('p', null, '© 2026 Iterum Sciences. All rights reserved.'),
                createElement('p', null, 'Biological tools for Teaching and Research'),
                createElement('p', null, 'For issues or inquiries, contact us at ', createElement('a', {href: 'mailto:timothywallis@ucmerced.edu'}, 'timothywallis@ucmerced.edu')),
                createElement('p', null, 'Icon images from ', createElement('a', {href: 'https://www.magnific.com/free-vector/atom-symbol-hand-drawn-style_230316599.htm#fromView=keyword&page=1&position=0&uuid=5866469f-d285-4282-9b14-eead1798f9e6&query=Atom+svg', target: '_blank', rel: 'noopener noreferrer'}, 'www.magnific.com')),
                createElement('p', null, 'For seeing latest news and updates, check out our Github ', createElement('a', {href: 'https://github.com/Timothy-Wallis/Iterum-Sciences', target: '_blank', rel: 'noopener noreferrer'}, 'repository'))
            ),
        )
    )
}