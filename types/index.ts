// 组件属性
export interface ICustomComponentProps {
    key?: React.Key;
    className?: string;
    [propName: string]: any;
}

declare const window: Window & typeof globalThis;
