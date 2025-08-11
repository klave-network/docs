'use client';
import { FC, PropsWithChildren, useRef } from 'react';
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform
} from 'motion/react';
import { cn } from '~/lib/utils';

export const MovingBorderButton: FC<
    PropsWithChildren<{
        borderRadius?: string;
        as?: any;
        containerClassName?: string;
        borderClassName?: string;
        duration?: number;
        className?: string;
    }>
> = ({
    borderRadius = '1.75rem',
    children,
    as: Component = 'button',
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}) => {
    return (
        <Component
            className={cn(
                'bg-transparent relative font-bold h-12 w-40 p-[1px] overflow-hidden ',
                containerClassName
            )}
            style={{
                borderRadius: borderRadius
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            'h-20 w-20 opacity-[0.8] bg-[radial-gradient(#00BFFF_40%,transparent_60%)]',
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    'hover:cursor-pointer relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl flex items-center justify-center w-full h-full antialiased hover:border-klave-blue',
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`
                }}
            >
                {children}
            </div>
        </Component>
    );
};

export const MovingBorder: FC<
    PropsWithChildren<{
        duration?: number;
        rx?: string;
        ry?: string;
    }>
> = ({ children, duration = 3500, rx, ry, ...otherProps }) => {
    const pathRef = useRef<SVGRectElement>(null);
    const progress = useMotionValue<number>(0);

    useAnimationFrame((time: number) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(
        progress,
        (val: number) => pathRef.current?.getPointAtLength(val).x
    );
    const y = useTransform(
        progress,
        (val: number) => pathRef.current?.getPointAtLength(val).y
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'inline-block',
                    transform
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
