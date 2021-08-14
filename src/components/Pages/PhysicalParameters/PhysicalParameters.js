import React, {useState} from "react";
import Header from "../../Elements/Header/Header";
import CustomInput from "../../Elements/CustomInput/CustomInput";
import CustomSelect from "../../Elements/CustomSelect/CustomSelect";
import './PhysicalParameters-style.scss';



const weightPurposesList = [
    'Быстрая скорость набора',
    'Средняя скорость набора',
    'Поддержка',
    'Быстрая скорость похудения',
    'Средняя скорость похудения'
];

function PhysicalParameters({setupParams}) {
    const [params, setParams] = useState({purpose: 'Выбрать'});

    return (
        <div className="container">
            <Header backPath="/gender" title="Физические показатели"/>
            <div className="container__content">
                <form>
                    <CustomInput title="Ваш возраст" units="год(-а)/лет"
                                 setupInput={res => setParams({...params, age: res})} />

                    <CustomInput title="Рост" units="см"
                                 setupInput={res => setParams({...params, height: res})} />

                    <CustomInput title="Текущий вес" units="кг"
                                 setupInput={res => setParams({...params, curWeight: res})} />

                    <p className="input__title">Цель</p>
                    <CustomSelect list={weightPurposesList}
                                  setupPurpose={(res) => setParams({...params, purpose: res})}/>


                    <CustomInput title="Целевой вес" units="кг"
                                 setupInput={res => setParams({...params, targetWeight: res})} />
                </form>
            </div>
            <button className="btn__next" onClick={() => setupParams(params)}>Далее</button>
        </div>
    );
}

export default PhysicalParameters;