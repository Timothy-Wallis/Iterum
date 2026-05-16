import { createElement, type JSX } from "react";

export default function Scripts(): JSX.Element {
    return (
        createElement('script', {src: 'script.js'}, null),
        createElement('script', {src: 'app.js'}, null)
    )
}