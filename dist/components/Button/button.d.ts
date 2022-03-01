import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
    /**
     * 设置 Button 自定义类名
     */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
     * 设置 Button 的类型
     */
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
    onClick?: () => void;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Primary UI component for user interaction --
 */
export declare const Button: FC<ButtonProps>;
export default Button;
