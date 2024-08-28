import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./button";

type ModalProps = {
    onClose: () => void;
    children: ReactNode;
    title: string,
    closeOnClickOutside?: boolean;
};

export default function Modal({
    onClose,
    children,
    title,
    closeOnClickOutside = false,
}: ModalProps) {
    return createPortal(
        <PortalImpl
            onClose={onClose}
            title={title}
            closeOnClickOutside={closeOnClickOutside}
        >
            {children}
        </PortalImpl>,
        document.body,
    );
}

function PortalImpl({
    onClose,
    children,
    title,
    closeOnClickOutside = true,
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current !== null) {
            modalRef.current.focus();
        }
    }, []);

    useEffect(() => {
        let modalOverlyElement: HTMLElement | null = null;

        const handler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        const clickOutsideHander = (event: MouseEvent) => {
            const target = event.target;
            if (
                modalRef.current !== null &&
                !modalRef.current.contains(target as Node) &&
                closeOnClickOutside
            ) {
                onClose();
            }
        };

        const modalElement = modalRef.current;
        if (modalElement !== null) {
            modalOverlyElement = modalElement.parentElement;
            if (modalOverlyElement !== null) {
                modalOverlyElement.addEventListener('click', clickOutsideHander);
            }
        }

        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
            if (modalOverlyElement !== null) {
                modalOverlyElement?.removeEventListener('click', clickOutsideHander);
            }
        };
    }, [closeOnClickOutside, onClose]);

    return (
        <div role="dialog">
            <div tabIndex={-1} ref={modalRef}>
                <h2 className="texl-xl">{title}</h2>
                <Button
                    className=""
                    aria-label="Close modal"
                    type="button"
                    onClick={onClose}
                >
                    X
                </Button>
                <div className="text-sm">{children}</div>
            </div>
        </div>
    );
}