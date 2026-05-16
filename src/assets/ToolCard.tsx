import { createElement, type JSX } from "react";
interface toolCardProps {
    toolTitle: string,
    toolDescription: string,
    type: string,
    toolLink?: string,
    launchText?: string

}

export default function toolCard(props: toolCardProps): JSX.Element {
    let component: JSX.Element;
    if (props.type === 'launch') {
        component = createElement('div', { className: 'tool-card' },
            createElement('h3', null, props.toolTitle),
            createElement('p', null, props.toolDescription),
            createElement('a', { className: 'tool-launch-btn', href: props.toolLink, target: '_blank', rel: 'noopener noreferrer' }, props.launchText || 'Launch ↗')
        )
    }else if(props.type === 'soon'){
        component = createElement('div', {className: 'tool-card coming-soon'}, 
            createElement('h3', null, props.toolTitle),
            createElement('p', null, props.toolDescription),
            createElement('span', {className: 'tool-badge'}, 'Coming Soon')
        )
    }else{
        console.error('Invalid tool card type provided. Must be "launch" or "soon".');
        component = createElement('div', null, 'Invalid tool card type')
    }
    return component;
}