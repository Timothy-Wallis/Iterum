import { type JSX } from "react";
import HeaderComponent from "./Header.tsx";
import MobileOverlay from "./MobileOverlay.tsx";
import SidebarNav from "./SideBarNav.tsx";
export default function FullHeader(): JSX.Element {
    return (
        <>
            <HeaderComponent />
            <MobileOverlay />
            <SidebarNav />
        </>
    )
}