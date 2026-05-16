import { createElement, type JSX } from "react";
import featureCard from "./FeatureCard.tsx";
export default function About(): JSX.Element {
    const aboutString: string = ` Iterum Sciences is deticated to developing tools for teaching and leading research in biological
                        sciences. Our mission is to allow for teaching and research to be done easier on the web, with a
                        focus on performace, and optimizations for workflows in this space.`;
    return (
        createElement('section', { className: 'section', id: 'about' },
            createElement('div', { className: 'container' },
                createElement('h2', null, 'About Iterum Sciences'),
                createElement('p', null, aboutString),
                createElement('div', { className: 'features' },
                    featureCard({
                        'featureIcon': '🔬',
                        'featureTitle': 'New Research Tools',
                        'featureDescription': 'Tools designed for cutting-edge biological research and analysis'
                    })),
                featureCard({
                    'featureIcon': '⚡',
                    'featureTitle': 'High Performance',
                    'featureDescription': 'Optimized solutions for both teaching and research'
                }),
                featureCard({
                    'featureIcon': '🤝',
                    'featureTitle': 'Collaborative',
                    'featureDescription': 'Built in collaboration features for seamless teamwork'
                })
            )
        )
    )
}