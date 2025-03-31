import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const portalElement = document.getElementById('overlays')!;

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickAway = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <StyledModal ref={modalRef} onClick={onClickAway}>
      <ModalBody>{children}</ModalBody>
    </StyledModal>,
    portalElement
  );
};

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow: hidden;
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: auto;
  width: 100%;
  min-height: 80%;
  padding: 2rem;
  background: var(--color-primary-bg);
  border-radius: 0.75rem;
  border: 2px solid var(--color-outline);
  transform: translate(-50%, -50%);
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 24.375rem) {
    width: 24.375rem;
  }
`;
