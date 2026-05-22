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
                        <ModalHeader className="flex flex-col gap-1">
                            {selectedPost?.title || "Bejegyzés"}
                        </ModalHeader>

                        <ModalBody>
                            {selectedPost?.image ? (
                                <div className="p-3 h-1/2 flex items-center justify-center ">
                                    {post.image ? (
                                        <Image
                                            removeWrapper
                                            src={post.image}
                                            alt={post.title || "Post image"}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : null}
                                </div>
                            ) : null}

                            <article
                                className="prose prose-sm max-w-none sm:prose"
                                dangerouslySetInnerHTML={{__html: safeHtml}}
                            />
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