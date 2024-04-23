import { Outlet } from "react-router-dom";
import { ComponenteNavegacion } from "../partials/ComponenteNavegacion";

export function Plantilla() {
    return <>
        <ComponenteNavegacion />
        <div className="container max-w-screen-lg mx-auto py-5">
            <Outlet />
        </div>
    </>
}