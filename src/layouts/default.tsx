import Header from "@widgets/header/index.tsx";
import { Outlet } from "react-router-dom";

function Default() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Default;