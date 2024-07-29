'use client';

import Typewriter from 'typewriter-effect';

export default function TypewritingEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ['Full-stack developer', 'Mechanical engineer'],
          // @ts-ignore
          pauseFor: 2000,
          autoStart: true,
          loop: true,
          delay: 'natural',
          deleteSpeed: 50,
          cursor: '',
        }}
      />
      <div className="h-[7px] w-[12px] -translate-y-[1px] animate-blink -ml-[10px] bg-zinc-100 self-end" />
    </>
  );
}
