"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Image
} from "@heroui/react";

/**
 * @param {{ id?: number, title?: string|null, content?: string|null, image?: string|null, date?: string|Date } | null} props.post
 * @param {boolean} props.isOpen
 * @param {() => void} props.onClose
 * @param {(html: string) => string} [props.sanitizeHtml]
 */
export default function SitePostModal({post, isOpen, onClose, sanitizeHtml}) {
    const selectedPost = post ?? null;
    console.log("selectedPost", selectedPost);

    const html = selectedPost?.content ?? "";
    const safeHtml = sanitizeHtml ? sanitizeHtml(html) : html;

    return (
        <Modal
            isOpen={Boolean(isOpen)}
            onOpenChange={(open) => {
                if (!open) onClose?.();
            }}
            size="3xl"
            scrollBehavior="inside"
            placement="center"
        >
            <ModalContent>
                {(modalOnClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl">
                            {selectedPost?.title || "Bejegyzés"}
                        </ModalHeader>

                        <ModalBody>
                            <div className="flex flex-col gap-4">
                            {selectedPost?.image ? (
                                <div className="flex justify-center">
                                    <Image
                                        src={selectedPost?.image}
                                        alt={selectedPost?.title || "Post image"}
                                        className="max-h-[40vh] w-auto object-contain"
                                    />
                                </div>
                            ) : null}

                            <article
                                className="text-lg"
                                dangerouslySetInnerHTML={{__html: safeHtml}}
                            />
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                variant="flat"
                                onPress={() => {
                                    modalOnClose();
                                    onClose?.();
                                }}
                            >
                                Bezárás
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}