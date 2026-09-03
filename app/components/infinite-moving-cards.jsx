"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                        imagePath, // optional fallback image path
                                    }) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "100s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative py-8 z-20 max-w-7xl overflow-hidden rounded-2xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 items-center flex-nowrap gap-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, index) => {
                    const imgSrc = item.image || imagePath || null;

                    return (
                        <li
                            key={item.name ?? index}
                            className="relative overflow-visible shadow-xl max-h-[40vh] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                        >
                            <blockquote>
                                {imgSrc ? (
                                    <img
                                        src={imgSrc}
                                        alt={item.name ? `${item.name} profile` : "profile"}
                                        className="float-left mr-4 h-20 w-20 shrink-0 rounded-full object-cover border border-zinc-300 dark:border-zinc-600"
                                    />
                                ) : null}
                                <div className="relative z-20">
                  <span className="text-md font-semibold leading-[1] text-neutral-700 dark:text-gray-200">
                    {item.name}
                  </span>
                                </div>
                                <div className="relative z-20 text-sm leading-[1.6] font-normal text-justify text-neutral-800 dark:text-gray-100">
                                    {item.quote}
                                </div>
                            </blockquote>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};