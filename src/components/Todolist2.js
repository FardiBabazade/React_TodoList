import React, { useState } from 'react'
import './Todolist.css';

const list = []

const Todolist = () => {

    const [listarray, setListarray] = useState(list)
    const [newtitle, newsetTitle] = useState('')

    let show;

    const deleterow = (id) => {
        console.log(id)
        const filtereditems = listarray.filter(item => {
            return item.id !== id
        })
        console.log(filtereditems)
        setListarray(filtereditems)
    }

    const addListarray = () => {
        if (newtitle !== '') {
            setListarray([
                ...listarray,
                {
                    id: Date.now(),
                    title: newtitle,
                    show: true
                },
            ])
            newsetTitle('')
        }
        else {
            alert("deyer daxil edin")
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <center>
                        <input className="form-control w-25 d-inline-block" type="text" value={newtitle} onChange={e => newsetTitle(e.target.value)} />
                        <button className="btn btn-primary" onClick={addListarray} >Add</button>
                    </center>
                </div>
                <div className="mt-5">
                    <center>
                        {
                            listarray.map(item => (
                                <div className={item.show ? 'newdiv' : 'deleteddiv'} key={item.id}>{item.title}
                                    <button onClick={() => deleterow(item.id)}
                                        className="btn btn-danger" style={{ position: 'absolute', right: 0, fontSize: '.6em' }}>Delete</button>
                                </div>
                            ))
                        }
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Todolist;

// listarray.map(item => (
//     <div className={item.show ? 'newdiv' : 'deleteddiv'} key={item.id}>{item.title}
//         <button onClick={() => setListarray(
//             listarray.map(el => el.id === item.id ? { ...el, show: false } : el)
//         )}
//             className="btn btn-danger" style={{ position: 'absolute', right: 0, fontSize: '.6em' }}>Delete</button>
//     </div>
// ))