declare class AutoScroller {
    constructor({ scroller, rate, space, onAutoScroll, reachEdge, }: {
        scroller?: HTMLElement;
        rate?: number;
        space?: number;
        onAutoScroll: (delta: number) => void;
        reachEdge: (position: 'left' | 'right') => boolean;
    });
    rate: number;
    space: number;
    scroller: HTMLElement | null;
    autoScrollPos: number;
    clientX: number | null;
    scrollTimer: number | null;
    onAutoScroll: (delta: number) => void;
    reachEdge: (position: 'left' | 'right') => boolean;
    handleDraggingMouseMove: (event: MouseEvent) => void;
    handleScroll: (position: 'left' | 'right') => void;
    start: () => void;
    stop: () => void;
}
export default AutoScroller;
