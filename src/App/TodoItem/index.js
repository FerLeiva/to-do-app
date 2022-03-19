import React from 'react';
import { BsCheck2, BsXLg} from "react-icons/bs";

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span
                onClick={props.onComplete}
            >
                <BsCheck2
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <BsXLg/>
            </span>
        </li>
    );
}

export { TodoItem };