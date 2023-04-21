import React, { useState, useEffect } from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from 'react-router-dom';
import dataTest from "./DataTest";


function Search (){
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
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3 d-flex" controlId="formName">
                    <Form.Label className="me-5">ID</Form.Label>
                    <Form.Control className="ms-4" type="text" placeholder="Id" value={id} style={{ width: "50%" }} >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formName">
                <Form.Label className="me-3">NAME</Form.Label>
                    <Form.Control className="ms-4"type="text" placeholder="Name" value={name} style={{ width: "50%" }}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formContent">
                    <Form.Label className="me-1">CONTENT</Form.Label>
                    <Form.Control className="ms-1" type="text" placeholder="Content" value={content} style={{ width: "50%" }}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={() => window.history.back()} style={{ width: "57%" }}>Go back</Button>
            </Form>
        </div>
    )

}

export default Search;