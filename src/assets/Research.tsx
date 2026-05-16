import { createElement, type JSX } from "react";
export default function Research(): JSX.Element {
    const sectionInfoStr: string = `We are actively developing new tools and features to support both teaching and research in the biological scene.`
    return (
        createElement('section', {id: 'research', className: 'section'}, 
            createElement('div', {className: 'container'}, 
                createElement('h2', null, 'Research and Development'),
                createElement('p', {className: 'section-intro' }, sectionInfoStr),
                createElement('ul', {className: 'roadmap-list'}, 
                    createElement('li', null, createElement('strong', {style: {color: 'green'}}, 'Current:'), ' Live ecosystem simulation for classroom use and demonstrations.'),
                    createElement('li', null, createElement('strong', {style: {color: 'yellow'}}, 'Next Release:'), ` Genomics software release with guided teaching workflows.`),
                    createElement('li', null, createElement('strong', {style: {color: 'orange'}}, 'Future Releases:'), ` Public changelog and milestone
                            updates
                            for each tool release.`)
                )
            )
        )
    )
}
