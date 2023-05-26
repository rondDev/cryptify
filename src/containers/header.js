import React from 'react';
import Image from 'next/image';
import logo1 from '../assets/images/logo1.svg';
import useGlobalState, { selectedState } from '@/components/createGlobalState';

export default function Header(props) {
  const [selected, setSelected] = useGlobalState(selectedState);

  function handleClick() {
    setSelected('');
  }

  return (
    <div className={props.className}>
      <Image src={logo1} alt="Cryptify logo (Shield icon)" className="headerIcon pointer" onClick={handleClick} />
      <h1 onClick={handleClick} className="pointer">Cryptify</h1>
    </div>
  );
}
