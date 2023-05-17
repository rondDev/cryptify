import Base64 from "@/components/base64";
import Hex from "@/components/hex";
import Md5 from "@/components/md5";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import base64 from '../assets/images/base64.svg'
import HEX from '../assets/images/HEX.svg'
import JWT from '../assets/images/JWT.svg'
import MD5 from '../assets/images/MD5.svg'
import SHA1 from '../assets/images/SHA1.svg'
import UppercaseImage from '../assets/images/Uppercase.svg'
import URL from '../assets/images/URL.svg'
import WhitespaceImage from '../assets/images/Whitespace.svg'
import Sha1 from "@/components/sha1";
import Uppercase from "@/components/uppercase";
import Url from "@/components/url";
import Whitespace from "@/components/whitespace";
import useGlobalState, { selectedState } from "@/components/createGlobalState";
import Jwt from "@/components/jwt";


function SelectedModule(props) {
        let selectedObject;
        switch(props.selected) {
            case 'base64':
                selectedObject = <Base64 />
                break;
            case 'hex':
                selectedObject = <Hex />
                break;
            case 'md5':
                selectedObject = <Md5 />
                break;
            case 'sha1':
                selectedObject = <Sha1 />
                break;
            case 'uppercase':
                selectedObject = <Uppercase />
                break;
            case 'url':
                selectedObject = <Url />
                break;
            case 'whitespace':
                selectedObject = <Whitespace />
                break;
            case 'jwt':
                selectedObject = <Jwt />
                break;
            default:
                selectedObject = null
                break;
        }
        return selectedObject;
    }


export const UserContext = React.createContext('');

export default function MainContent(props){
    const [selected, setSelected] = useGlobalState(selectedState);
    
    function select(name) {
        setSelected(name);
    }

    // const handleClick = (event) => {
    //     setSelected(event.target.value);
    // }

    return (
        <div className={props.className}>
            {selected
            ? <SelectedModule selected={selected}/>
            :
            <div className="itemArea">
                <div className="base64 iconContainer pointer"  onClick={() => select('base64')}>
                    <Image className="icons" src={base64} alt="Number 64 icon inside border indicating base64"/>   
                    <div>
                        <h3>Base 64</h3>
                        <p><span>Encode and decode</span>Base64 data</p>
                    </div>
                </div>
                <div className="hex iconContainer pointer"  onClick={() => select('hex')}>
                    <Image className="icons" src={HEX} alt="A hashtag icon inside a border for hex"/>   
                    <div>
                        <h3>Hex</h3>
                        <p><span>Converting value</span>between Hex and text</p>
                    </div>
                </div>
                <div className="md5 iconContainer pointer"  onClick={() => select('md5')}>
                    <Image className="icons" src={MD5} alt="A fingerprint icon inside border for md5"/> 
                    <div>  
                        <h3>MD5</h3>
                        <p><span>Hash and dehash</span>MD5 data</p>
                    </div>
                </div>
                <div className="sha1 iconContainer pointer"  onClick={() => select('sha1')}>
                    <Image className="icons" src={SHA1} alt="Lock icon inside border"/>   
                    <div>
                        <h3>SHA1</h3>
                        <p><span>Hash and dehash</span>SHA1 data</p>
                    </div>
                </div>
                <div className="url iconContainer pointer"  onClick={() => select('url')}>
                    <Image className="icons" src={URL}/> 
                    <div>  
                        <h3>URL</h3>
                        <p><span>Encode and decode</span>URL snippets</p>
                    </div>
                </div>
                <div className="jwt iconContainer pointer"  onClick={() => select('jwt')}>
                    <Image className="icons" src={JWT}/>   
                    <div>
                        <h3>JWT</h3>
                        <p><span>Encode and decode</span>JSON Web Token</p>
                    </div>
                </div>
                <div className="textCase iconContainer pointer"  onClick={() => select('uppercase')}>
                    <Image className="icons" src={UppercaseImage}/> 
                    <div>  
                        <h3>Uppercase</h3>
                        <p><span>Uppercase or</span>lowercase text snippets</p>
                    </div>
                </div>
                <div className="whitespace iconContainer pointer"  onClick={() => select('whitespace')}>
                    <Image className="icons" src={WhitespaceImage}/>  
                    <div> 
                        <h3>Whitespace</h3>
                        <p><span>Removes whitespace</span>from text</p>
                    </div>
                </div>
                
            </div>
            }
            
        </div>
    )
}