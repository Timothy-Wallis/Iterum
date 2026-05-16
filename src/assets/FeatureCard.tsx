import { createElement, type JSX } from "react";

interface featureProps {
    featureIcon: string,
    featureTitle: string,
    featureDescription: string
}

export default function featureCard(props: featureProps): JSX.Element {
    return (
        createElement('div', { className: 'feature-card' },
            createElement('div', { className: 'feature-icon' }, props.featureIcon),
            createElement('h3', null, props.featureTitle),
            createElement('p', null, props.featureDescription)
        )
    )
}