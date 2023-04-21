import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import dataTest from "./DataTest";
import {Link, useNavigate} from 'react-router-dom';

function Home(){

    let history = useNavigate();

    const handleClick = () => {
        window.location.href = `/search`; 
    }

    const handleEdit = (id, name, content) => {
        localStorage.setItem('name', name);
        localStorage.setItem('content', content);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index = dataTest.map(function(e){
            return e.id
        }).indexOf(id);

        dataTest.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hove size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name 
                            </th>
                            <th>
                                Content 
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataTest && dataTest.length > 0      //Esto es un if, y su condicion 
                            ?
                            dataTest.map((item) =>{
                                return(
                                    <tr>
                                        <td onClick={() => handleClick(item.id)}>  
                                                {item.name}
                                        </td>
                                        <td onClick={() => handleClick(item.id)}>
                                            {item.content}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <Button onClick={() => handleEdit(item.id, item.name, item.content)}>Edit</Button> 
                                            </Link>
                                            &nbsp;   
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                             // nbsp genera un espacio
                            :       // Esto es el ELSE del IF 
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className= 'd-grid gap-2' to= "/create">
                    <Button size= "lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;