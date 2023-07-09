import { classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.css'
import {memo} from "react";

export const Button = memo((props) => {
    const {type, id, children, onClick} = props;
    return (
        <button
            onClick={onClick}
            type={type}
            className={classNames(cls.Button)}
            id={id}
        >
            {children}
        </button>
    );
});
