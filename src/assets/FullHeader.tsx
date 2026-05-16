import {type JSX } from "react";
import HeaderComponent from "./Header.tsx";
import mobileOverlay from "./MobileOverlay.tsx";
import sidebarNav from "./SideBarNav.tsx";
export default function FullHeader(): JSX.Element {
    return (
        HeaderComponent(), // Header of index page
        mobileOverlay(), // Mobile overlay for sidebar menu
        sidebarNav() // Sidebar navigation
    )
}