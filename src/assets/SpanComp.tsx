import { createElement, type JSX } from "react";

export default function SpanComponent(): JSX.Element {
    return (
        createElement('span', null, ''),
        createElement('span', null, ''),
        createElement('span', null, '')
    )
}