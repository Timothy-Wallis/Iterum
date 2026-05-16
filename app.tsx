import { createElement, JSX } from 'react';

let SpanComponent = () => {
    return (
        createElement('span', null, ''),
        createElement('span', null, ''),
        createElement('span', null, '')
    )
}

let HeaderComponent = () => {
    return (
        createElement('header', { className: 'site-header', id: 'siteHeader' },
            createElement('button', { className: 'menu-btn', id: 'menuBtn', "aria-label": "Toggle navigation menu", "aria-expanded": false, "aria-controls": "sidebar" },
                SpanComponent()
            ),
            createElement('a', { href: '#home', className: 'brand-name' }, 'Iterum Sciences'),
            createElement('button', { className: 'theme-btn', id: 'themeBtn', "aria-label": "Switch to dark mode" },
                createElement('span', { className: 'theme-icon-light', "aria-hidden": true }, '🌙'),
                createElement('span', { className: 'theme-icon-dark', "aria-hidden": true }, '☀️')
            ),
            createElement('a', { href: 'workspace/account.html', className: 'btn btn-login' }, 'Login')
        )
    )
}

let mobileOverlay = () => {
    return (
        createElement('div', { className: 'sidebar-overlay', id: 'sidebarOverlay' }, '')
    )
}

let sidebarNav = () => {
    return (
        createElement('nav', { className: 'sidebar', id: 'sidebar' },
            createElement('ul', { className: 'nav-links' },
                createElement('li', null, createElement('a', { href: '#home' }, 'Home')),
                createElement('li', null, createElement('a', { href: '#about' }, 'About')),
                createElement('li', null, createElement('a', { href: '#tools' }, 'Our Tools')),
                createElement('li', null, createElement('a', { href: '#research' }, 'Research'))
            )
        )
    )
}

let Hero = () => {
    return (
        createElement('section', { className: 'hero', id: 'home' },
            createElement('div', { className: 'hero-content' },
                createElement('h1', null, 'Welcome to Iterum Sciences'),
                createElement('p', { className: "hero-subtitle" }, 'Biology Tools & Solutions for Teaching and Research'),
                createElement('p', { className: "hero-description" }, "  Providing Teachers and Researchers with cutting-edge tools for any workflow in biological sciences. Explore our suite of solutions designed to enhance your research and teaching capabilities."),
                createElement('div', { className: "cta-buttons" },
                    createElement('a', { className: "btn btn-primary", href: '#tools' }, "Explore Tools")
                )
            )
        )
    )
}

interface featureProps {
    featureIcon: string,
    featureTitle: string,
    featureDescription: string
}

let featureCard = (props: featureProps) => {
    return (
        createElement('div', { className: 'feature-card' },
            createElement('div', { className: 'feature-icon' }, props.featureIcon),
            createElement('h3', null, props.featureTitle),
            createElement('p', null, props.featureDescription)
        )
    )
}

let AboutSection = () => {
    let aboutString: string = ` Iterum Sciences is deticated to developing tools for teaching and leading research in biological
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

interface toolCardProps {
    toolTitle: string,
    toolDescription: string,
    type: string,
    toolLink?: string,
    launchText?: string

}

let toolCard = (props: toolCardProps) => {
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

let ToolSection = () => {
    let sectionInfoStr: string = `Start with our live ecosystem simulator,
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

let ResearchSection = () => {
    let sectionInfoStr: string = `We are actively developing new tools and features to support both teaching and research in the biological scene.`
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

let FullHeader = () => {
    return (
        HeaderComponent(), // Header of index page
        mobileOverlay(), // Mobile overlay for sidebar menu
        sidebarNav() // Sidebar navigation
    )
}

let Footer = () => {
    return (
        createElement('footer', {className: 'footer'}, 
            createElement('div', {className: 'container'}, 
                createElement('p', null, '© 2024 Iterum Sciences. All rights reserved.'),
                createElement('p', null, 'Biological tools for Teaching and Research'),
                createElement('p', null, 'For issues or inquiries, contact us at:', createElement('a', {href: 'mailto:timothywallis@ucmerced.edu'}, 'timothywallis@ucmerced.edu'))
            ),
        )
    )
}

let scripts = () => {
    return (
        createElement('script', {src: 'script.js'}, null),
        createElement('script', {src: 'app.js'}, null)
    )
}

let App = () => {
    return (
        FullHeader(),
        createElement('main', { className: 'main-content', id: 'mainContent' },
            Hero(),
            AboutSection(),
            ToolSection(),
            ResearchSection(),
            Footer()
        ),
        scripts()
    )
}