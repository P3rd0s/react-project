import React, {useState} from "react";
import './CustomSelect-style.scss';

function CustomSelect({list, setupPurpose}) {
    if (!list) return;

    const [isOpened, setOpened] = useState(false);
    const [selectedItem, setSelected] = useState('Выбрать');
    const [closeAnimation, setAnimation] = useState(false);

    const manageDropdown = (newOpenedState) => {
        if (newOpenedState === false) {
            setAnimation(true);
            setTimeout(() => {
                setOpened(newOpenedState);
                setAnimation(false);
            }, 300);
        } else {
            setAnimation(false);
            setOpened(newOpenedState);
        }
    }

    const manageSelection = (item) => {
        setSelected(item);
        setupPurpose(item);
    }

    return (
        <div className={"input__wrapper select-wrapper" + (isOpened ? ' opened' : '')}>
            <div className="select-wrapper__selector" onClick={() => manageDropdown(!isOpened)}>
                <p>{selectedItem}</p>
                <div className="arrow"/>
            </div>
            {isOpened &&
            list.map((item, idx) => (
                item !== 'Выбрать' &&
                <div className={"select-wrapper__item"
                + (selectedItem === item ? ' checked' : '')
                + (idx === list.length - 1 ? ' last-item' : '')
                + (closeAnimation ? ' close-animation' : '')}
                     key={item}
                     onClick={() => {
                         manageSelection(item);
                         manageDropdown(false);
                     }}>{item}</div>
            ))
            }
        </div>
    );
}

export default CustomSelect;