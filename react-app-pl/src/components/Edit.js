import React, { useState, useEffect } from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import dataTest from "./DataTest";
import {useNavigate} from 'react-router-dom';

function Edit(){
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = dataTest.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = dataTest[index];
        a.name = name;
        a.content = content;
        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('name'))
        setContent(localStorage.getItem('content'))
        setId(localStorage.getItem('id'))
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto"></div>
                    <div className="text-center">
                        <Form className="d-grid gap-2 " style={{margin:"15rem"}}>
                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formName">
                                <Form.Label className="text-center me-5">ID</Form.Label>
                                <Form.Control className="ms-3" type="text" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)} style={{ width: "50%" }}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formContent">
                                <Form.Label className="text-center me-4">Content</Form.Label>
                                <Form.Control type="text" placeholder="Content" value={content} required onChange={(e) => setContent(e.target.value)} style={{ width: "50%" }}>
                                </Form.Control>
                            </Form.Group>
                            <Button onClick={(e) => handleSubmit(e)} type="submit" style={{ width: "50%" }}>Update</Button>
                        </Form>
                    </div>
                </div>
            </div>
    )

}

export default Edit;
