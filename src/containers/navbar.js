import useGlobalState, { selectedState } from "@/components/createGlobalState";
import React from "react";

export default function NavBar(props){
    const [selected, setSelected] = useGlobalState(selectedState);

    function handleClick(name) {
        setSelected(name);
    }

    return (
        <div className={props.className}>
            <ul>
                <h4>Encoding</h4>
                <li className={`${selected === 'base64' ? 'bold' : null}`} onClick={() => handleClick('base64')}>Base64</li>
                <li className={`${selected === 'hex' ? 'bold' : null}`} onClick={() => handleClick('hex')}>Hex</li>
            </ul>
            <ul>
                <h4>Hash</h4>
                <li className={`${selected === 'md5' ? 'bold' : null}`} onClick={() => handleClick('md5')}>MD5</li>
                <li className={`${selected === 'sha1' ? 'bold' : null}`} onClick={() => handleClick('sha1')}>SHA1</li>
            </ul>
            <ul>
                <h4>Network</h4>
                <li className={`${selected === 'url' ? 'bold' : null}`} onClick={() => handleClick('url')}>URL</li>
                <li className={`${selected === 'jwt' ? 'bold' : null}`} onClick={() => handleClick('jwt')}>JWT</li>
            </ul>
            <ul>
                <h4>Utility</h4>
                <li className={`${selected === 'uppercase' ? 'bold' : null}`} onClick={() => handleClick('uppercase')}>Text Case</li>
                <li className={`${selected === 'whitespace' ? 'bold' : null}`} onClick={() => handleClick('whitespace')}>Whitespace</li>
            </ul>
        </div>
    )
}