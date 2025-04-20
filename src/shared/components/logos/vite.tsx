import {FC} from "react";
import viteLogo from '/vite.svg'

interface ViteProps {
    link?: string
}

const Vite: FC<ViteProps> = ({link}) => {
    const computedLink = link ?? "https://vite.dev";
    return (
        <a href={computedLink} target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
    );
}

export default Vite;