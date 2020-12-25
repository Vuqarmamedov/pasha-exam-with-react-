import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import WorkerBlock from './WorkerBlock';

export default function WorkerInfo(props) {
    const [employee, setEmployee] = useState(null);
    const [tab, setTab] = useState(1);

    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        var data = require('../data/employees-info.json');
        let worker = data.find((e) => e.id == id);
        setEmployee(worker);
    }, []);

    return (
        <div className="contentBar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="workerInfo">
                            <div className="head">
                                <a onClick={() => history.push('/')}>
                                    <span>
                                        <img
                                            src="/img/arrLeft.png"
                                            alt="arrow"
                                        />
                                    </span>
                                    Geri qayıt
                                </a>
                            </div>
                            <div className="info">
                                {employee && (
                                    <div className="detailsBlock">
                                    <div className="head">
                                        <div className="image">
                                            <img
                                                src="/img/user2.png"
                                                alt="user"
                                            />
                                            <span>3A</span>
                                        </div>
                                        <div className="userDetails">
                                            <p>
                                                {employee.name}
                                                <span>{employee.email}</span>
                                            </p>
                                            <div className="stats">
                                                {employee.stats?.map((s,index) => (
                                                    <span key={index} className={s.color}>
                                                        {s.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="position">
                                            <p>
                                                Struktur
                                                <span>
                                                    {employee.structure}
                                                </span>
                                            </p>
                                            <hr />
                                            <p>
                                                Vəzifə
                                                <span>{employee.position}</span>
                                            </p>
                                        </div>
                                        <div className="buttons">
                                            <a href="#">
                                                <img
                                                    src="/img/btn.png"
                                                    alt="btn"
                                                />
                                                Bax
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="/img/email.png"
                                                    alt="email"
                                                />
                                                Mail at
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                )}

                                <div className="tabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className={
                                                    'nav-link ' +
                                                    (tab == 1 ? 'active' : '')
                                                }
                                                data-toggle="tab"
                                                onClick={() => setTab(1)}
                                            >
                                                Şəxsi İnformasiya
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={
                                                    'nav-link ' +
                                                    (tab == 2 ? 'active' : '')
                                                }
                                                data-toggle="tab"
                                                onClick={() => setTab(2)}
                                            >
                                                Struktur Əsasnaməsi
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={
                                                    'nav-link ' +
                                                    (tab == 3 ? 'active' : '')
                                                }
                                                data-toggle="tab"
                                                onClick={() => setTab(3)}
                                            >
                                                Vəzifə Təlimatı
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="closeBtn" onClick={() => history.push('/')}>
                                        <img src="/img/close.png" alt="close" />
                                    </div>
                                    <div className="tab-content">
                                        <div
                                            id="tab1"
                                            className={
                                                'tab-pane ' +
                                                (tab == 1 ? 'active' : 'fade')
                                            }
                                        >
                                            <h3>Şəxsi İnformasiya</h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versLorem Ipsum is simply dummy
                                                text of the printing and
                                                typesetting industry. Lorem
                                                Ipsum has been the industry's
                                                standard dummy text ever since
                                                the 1500s, when an unknown
                                                printer took a galley of type
                                                and scrambled it to make a type
                                                specimen book. It has survived
                                                not only five centuries, but
                                                also the leap into electronic
                                                typesetting, remaining
                                                essentially unchanged. It was
                                                popularised in the 1960s with
                                                the release of Letraset sheets
                                                containing Lorem Ipsum passages,
                                                and more recently with desktop
                                                publishing software like Aldus
                                                PageMaker including versions of
                                                Lorem Ipsum. Lorem Ipsum is
                                                simply dummy text of the
                                                printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. Lorem
                                                Ipsum is simply dummy text of
                                                the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. ions of
                                                Lorem Ipsum.
                                            </p>
                                        </div>
                                        <div
                                            id="tab2"
                                            className={
                                                'tab-pane ' +
                                                (tab == 2 ? 'active' : 'fade')
                                            }
                                        >
                                            <h3>Struktur Əsasnaməsi</h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versLorem Ipsum is simply dummy
                                                text of the printing and
                                                typesetting industry. Lorem
                                                Ipsum has been the industry's
                                                standard dummy text ever since
                                                the 1500s, when an unknown
                                                printer took a galley of type
                                                and scrambled it to make a type
                                                specimen book. It has survived
                                                not only five centuries, but
                                                also the leap into electronic
                                                typesetting, remaining
                                                essentially unchanged. It was
                                                popularised in the 1960s with
                                                the release of Letraset sheets
                                                containing Lorem Ipsum passages,
                                                and more recently with desktop
                                                publishing software like Aldus
                                                PageMaker including versions of
                                                Lorem Ipsum. Lorem Ipsum is
                                                simply dummy text of the
                                                printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. Lorem
                                                Ipsum is simply dummy text of
                                                the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. ions of
                                                Lorem Ipsum.
                                            </p>
                                        </div>
                                        <div
                                            id="tab3"
                                            className={
                                                'tab-pane ' +
                                                (tab == 3 ? 'active' : 'fade')
                                            }
                                        >
                                            <h3>Vəzifə Təlimatı</h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versLorem Ipsum is simply dummy
                                                text of the printing and
                                                typesetting industry. Lorem
                                                Ipsum has been the industry's
                                                standard dummy text ever since
                                                the 1500s, when an unknown
                                                printer took a galley of type
                                                and scrambled it to make a type
                                                specimen book. It has survived
                                                not only five centuries, but
                                                also the leap into electronic
                                                typesetting, remaining
                                                essentially unchanged. It was
                                                popularised in the 1960s with
                                                the release of Letraset sheets
                                                containing Lorem Ipsum passages,
                                                and more recently with desktop
                                                publishing software like Aldus
                                                PageMaker including versions of
                                                Lorem Ipsum. Lorem Ipsum is
                                                simply dummy text of the
                                                printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. Lorem
                                                Ipsum is simply dummy text of
                                                the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum. ions of
                                                Lorem Ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
