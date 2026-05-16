import { createElement, type JSX } from "react";
import toolCard from "./ToolCard.tsx";
export default function ToolSelection(): JSX.Element {
    const sectionInfoStr: string = `Start with our live ecosystem simulator,
    then follow upcoming releases as we expand
    the toolkit.`
    return (
        createElement('section', { id: 'tools', className: 'section bg-light' },
            createElement('div', { className: 'container' },
                createElement('h2', null, 'Our Tools'),
                createElement('p', { className: 'section-intro' }, sectionInfoStr),
                createElement('div', { className: 'tools-grid' },
                    toolCard({
                        type: 'launch',
                        toolTitle: 'Teaching Materials',
                        toolDescription: 'Launch the live ecosystem simulator used to teach about biological systems',
                        toolLink: 'https://ecosystemsim.vercel.app/'
                    }),
                    toolCard({
                        'type': 'soon',
                        'toolTitle': 'Genomics Software',
                        'toolDescription': 'Tools for exploring genomic data and concepts are currently in development.'
                    })
                )
            )
        )
    )
}