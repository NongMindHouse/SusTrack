// ITooltip.tsx
export interface ITooltip {
    content: string;
    children?: JSX.Element;
    disabled: boolean;
    tooltipRef?: React.RefObject<HTMLDivElement>;
}
