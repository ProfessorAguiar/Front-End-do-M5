import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from 'react';
function CardComp() {
    const [titulo,setTitulo]=useState('')
    const [descricao,setDescricao]=useState('')
    const [data_criacao,setData_criacao]=useState('')
    useEffect(() => {
        const options = { method: 'GET', url: 'http://localhost:3000/tarefa' };
        axios.request(options).then(function (response) {
            setTitulo(response.data[0].titulo)
            setDescricao(response.data[0].descricao)
            setData_criacao(response.data[0].data_criacao)
        }).catch(function (error) {
            console.error(error);
        });
    },[])

    return (
        <Card>
            <Card.Header>{titulo}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {descricao}
                    </p>
                    <footer className="blockquote-footer">
                        {data_criacao}
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default CardComp;