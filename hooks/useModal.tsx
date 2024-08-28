import Modal from "@/components/ui/Modal";
import { useCallback, useMemo, useState } from "react";


export default function useModal(): [
    JSX.Element | null,
    (title: string, showModal: (onClose: () => void) => JSX.Element) => void,
] {
    const [modalContent, setModalContent] = useState<null | {
        closeOnClickOutside: boolean;
        content: JSX.Element;
        title: string;
    }>(null);

    const onClose = useCallback(() => {
        setModalContent(null);
    }, []);

    const modal = useMemo(() => {
        if (modalContent === null) {
            return null;
        }

        const { title, content, closeOnClickOutside } = modalContent;
        return (
            <Modal
                onClose={onClose}
                title={title}
                closeOnClickOutside={closeOnClickOutside}
            >
                {content}
            </Modal>
        );

    }, [modalContent, onClose])

    const showModal = useCallback(
        (
            title: string,
            getContent: (onClose: () => void) => JSX.Element,
            closeOnClickOutside = false,
        ) => {
            setModalContent({
                closeOnClickOutside,
                content: getContent(onClose),
                title,
            });
        }, [onClose],
    );

    return [modal, showModal];
}