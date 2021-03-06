import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from "classnames";

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

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

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * Primary UI component for user interaction --
 */
export const Button:FC<ButtonProps> = (props) => {
    const {
        disabled,
        className,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: (btnType === 'link') && disabled
    })
    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                { ...restProps }
            >
                {children}
            </a>
        )
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                { ...restProps }
            >
                {children}
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button;
