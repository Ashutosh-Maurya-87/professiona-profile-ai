"use client";

import { MessageCircle, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingChatButtonProps {
    open: boolean;
    onClick: () => void;
}

export default function FloatingChatButton({
    open,
    onClick,
}: FloatingChatButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{
                scale: 1.08,
            }}
            whileTap={{
                scale: 0.95,
            }}
            className="
        fixed
        bottom-8
        right-8
        z-9999
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-linear-to-r
        from-amber-500
        to-orange-500
        text-white
        shadow-2xl
        transition-all
      "
        >
            <AnimatePresence mode="wait">
                {open ? (
                    <motion.div
                        key="close"
                        initial={{
                            rotate: -180,
                            opacity: 0,
                        }}
                        animate={{
                            rotate: 0,
                            opacity: 1,
                        }}
                        exit={{
                            rotate: 180,
                            opacity: 0,
                        }}
                    >
                        <X size={28} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="chat"
                        initial={{
                            rotate: 180,
                            opacity: 0,
                        }}
                        animate={{
                            rotate: 0,
                            opacity: 1,
                        }}
                        exit={{
                            rotate: -180,
                            opacity: 0,
                        }}
                        className="relative"
                    >
                        <MessageCircle size={28} />

                        <Sparkles
                            className="
                absolute
                -right-2
                -top-2
                text-yellow-300
              "
                            size={16}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}