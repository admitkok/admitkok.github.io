// Toggle.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const ToggleWrapper = styled.div`
  width: 500px;
  height: 80px;
  background-color: ${props => (props.active ? '#4caf50' : '#ccc')};
  border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 40px;
    color: #171819;
  position: relative;
  cursor: pointer;
  user-select: none; /* Prevent text selection */
`;

const ToggleHandle = styled.div`
  width: 150px;
  height: 70px;
  background-color: #fff;
  color: #171819;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
    padding: 0 25px;
  border-radius: 50px;
  position: absolute;
  top: 5px;
  left: ${props => props.position};
  transition: left 0.2s;
  cursor: pointer;
`;


const Toggle = ({ redirectUrl }) => {
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState('5px');
    const handleRef = useRef(null);
    const isDragging = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging.current) return;

            const toggleWidth = 500; // Width of the ToggleWrapper
            const handleWidth = 150;  // Width of the ToggleHandle
            const toggleLeft = handleRef.current.parentElement.getBoundingClientRect().left;
            const newLeft = e.clientX - toggleLeft - handleWidth / 2;

            const clampedLeft = Math.max(5, Math.min(newLeft, toggleWidth - handleWidth - 5));
            setPosition(`${clampedLeft}px`);
        };

        const handleMouseUp = () => {
            if (!isDragging.current) return;

            const toggleWidth = 500; // Width of the ToggleWrapper
            const handleWidth = 150;  // Width of the ToggleHandle
            const maxLeft = toggleWidth - handleWidth - 5; // Maximum left position
            const currentLeft = parseInt(position);

            if (currentLeft > maxLeft / 2) {
                setActive(true);
                setPosition(`${maxLeft}px`);
            } else {
                setActive(false);
                setPosition('5px');
            }

            isDragging.current = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [position]);

    useEffect(() => {
        if (active && redirectUrl) {
            navigate(redirectUrl);
        }
    }, [active, redirectUrl, navigate]);

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
    };

    return (
        <ToggleWrapper active={active}>
            <ToggleHandle
                position={position}
                ref={handleRef}
                onMouseDown={handleMouseDown}
            >NEXT</ToggleHandle>
            <p1>Drag to reveal next project</p1>
        </ToggleWrapper>
    );
};

export default Toggle;
