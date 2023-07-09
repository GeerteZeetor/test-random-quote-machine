import {classNames} from '../../lib/classNames/classNames';
import cls from './Quote.module.css';
import {memo} from "react";


export const Quote = memo((props) => {
    const {text, author} = props
    return (
        <div className={classNames(cls.Quote)}>
            <p className="quote-text">{text}</p>
            <p className="author-text">{author}</p>
        </div>
    );
});
