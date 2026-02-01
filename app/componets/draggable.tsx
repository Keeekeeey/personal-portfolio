"use client"

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function App( {onClose}: {onClose: () => void}) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="border" ref={nodeRef}>
        <button onClick={onClose}>Close</button>
        Drag me!
        </div>
    </Draggable>
  );
}