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
                <li className={`pointer ${selected === 'base64' ? 'bold' : null}`} onClick={() => handleClick('base64')}><p>Base64</p></li>
                <li className={`pointer ${selected === 'hex' ? 'bold' : null}`} onClick={() => handleClick('hex')}><p>Hex</p></li>
            </ul>
            <ul>
                <h4>Hash</h4>
                <li className={`pointer ${selected === 'md5' ? 'bold' : null}`} onClick={() => handleClick('md5')}><p>MD5</p></li>
                <li className={`pointer ${selected === 'sha1' ? 'bold' : null}`} onClick={() => handleClick('sha1')}><p>SHA1</p></li>
            </ul>
            <ul>
                <h4>Network</h4>
                <li className={`pointer ${selected === 'url' ? 'bold' : null}`} onClick={() => handleClick('url')}><p>URL</p></li>
                <li className={`pointer ${selected === 'jwt' ? 'bold' : null}`} onClick={() => handleClick('jwt')}><p>JWT</p></li>
            </ul>
            <ul>
                <h4>Utility</h4>
                <li className={`pointer ${selected === 'uppercase' ? 'bold' : null}`} onClick={() => handleClick('uppercase')}><p>Text Case</p></li>
                <li className={`pointer ${selected === 'whitespace' ? 'bold' : null}`} onClick={() => handleClick('whitespace')}><p>Whitespace</p></li>
            </ul>
        </div>
    )
}