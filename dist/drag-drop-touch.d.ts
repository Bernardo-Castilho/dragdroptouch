type DragDropTouchConfiguration = {
    allowDragScroll: boolean;
    contextMenuDelayMS: number;
    dragImageOpacity: number;
    dragScrollPercentage: number;
    dragScrollSpeed: number;
    dragThresholdPixels: number;
    isPressHoldMode: boolean;
    forceListen: boolean;
    pressHoldDelayMS: number;
    pressHoldMargin: number;
    pressHoldThresholdPixels: number;
};
declare const DefaultConfiguration: DragDropTouchConfiguration;
/**
 * Offer users a setup function rather than the class itself
 *
 * @param dragRoot
 * @param options
 */
declare function enableDragDropTouch(dragRoot?: Document | Element, dropRoot?: Document | Element, options?: Partial<typeof DefaultConfiguration>): void;

export { enableDragDropTouch };
