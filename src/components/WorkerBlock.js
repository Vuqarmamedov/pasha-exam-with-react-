import React from 'react';
import { useHistory } from "react-router-dom";

export default function WorkerBlock(props) {
    let history = useHistory();

    var employee = props.employee;

    function onClick() {
        if (employee.employees.length > 0) {
            props.onOpenWorkers(employee.id, employee.employees);
        }
    }

    return (
        <div className="detailsBlock" data-workers={employee.id} onClick={() => onClick()}>
            <div className="head">
                <div className="image">
                    <img src="/img/user2.png" alt="user" />
                    <span>3A</span>
                </div>
                <div className="userDetails">
                    <p>
                        {employee.name}
                        <span>{employee.email}</span>
                    </p>
                    <div className="stats">
                        {employee.stats?.map((s, index) => (
                            <span key={index} className={s.color}>{s.name}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="position">
                    <p>
                        Struktur
                        <span>{employee.structure}</span>
                    </p>
                    <hr />
                    <p>
                        Vəzifə
                        <span>{employee.position}</span>
                    </p>
                </div>
                <div className="buttons">
                    <a className="openInfo" onClick={() => history.push(`/info/${employee.id}`)}>
                        <img src="/img/btn.png" alt="btn" />
                        Bax
                    </a>
                    <a href="#">
                        <img src="/img/email.png" alt="email" />
                        Mail at
                    </a>
                </div>
            </div>
        </div>
    );
}
