import React, {useState} from "react";
import Header from "../../Elements/Header/Header";
import {Link} from "react-router-dom";
import './Gender-style.scss';

function Gender({curGender, setupGender}) {
    const [isMale, setMale] = useState(curGender);

    return (
        <div className="container">
            <Header title="Выберите пол"/>
            <div className="container__content">
                <div className={"card " + (!isMale ? "checked" : "unchecked")} onClick={() => setMale(false)}>
                    <div className="female-image"/>
                    Женский
                </div>
                <div className={"card " + (isMale ? "checked" : "unchecked")} onClick={() => setMale(true)}>
                    <div className="male-image"/>
                    Мужской
                </div>
            </div>
            <Link to="/phys">
                <button className="btn__next" onClick={() => setupGender(isMale)}>Далее</button>
            </Link>
        </div>
    );
}

export default Gender;