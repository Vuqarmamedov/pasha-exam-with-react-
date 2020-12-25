import React, { useEffect, useState } from 'react';
import Structure from './Structure';
import WorkerBlock from './WorkerBlock';

export default function Dashboard() {

    const [parent, setParent] = useState([]);
    const [tree, setTree] = useState([]);

    useEffect(() => {
        var data = require('../data/employees.json');
        setParent(data);
    }, []);

    function openWorkers(parentId, employees) {
        if (tree.some(t => t.parentId === parentId)) {
            return;
        }

        setTree([
            ...tree,
            {
                parentId,
                workers: employees
            }
        ]);
    }

    return (
        <div className="contentBar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="mainContent">
                            <div className="searchBar">
                                <p>Axtarış</p>
                                <form className="searchPanel">
                                    <div className="group">
                                        <div className="form-group">
                                            <input type="text" placeholder="Ad, Soyad" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Struktur" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Vəzifə" />
                                        </div>
                                    </div>
                                    <button type="submit">Axtar</button>
                                </form>
                            </div>
                            <div className="info">
                                <Structure />

                                <div className="userInfo">
                                    <WorkerBlock employee={parent} onOpenWorkers={openWorkers} />

                                    {tree.map(t => 
                                        <div key={t.parentId} className="workers" data-parent={t.parentId}>
                                            {t.workers.map(w => <WorkerBlock key={w.id} employee={w} onOpenWorkers={openWorkers} />)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
