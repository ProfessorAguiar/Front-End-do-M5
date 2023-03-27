import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useEffect, useState } from 'react';
import ModalComp from './ModalComp';
function CardComp() {
    const [itens, setItens] = useState([])
    useEffect(() => {
        const options = { method: 'GET', url: 'http://localhost:3000/tecnologia' };
        axios.request(options).then(function (response) {

            setItens(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        // <div className="d-flex justify-content-around" style={{ marginTop: 50, marginRight: 120, marginLeft: 120 }}>
        <Container>
            <Row className="justify-content-md-center d-sm-flex">
                    {itens.map((item, index) => {
                        return (
                            <Card key={index} style={{ width: '22rem',marginTop: 60, marginRight: 12, marginLeft: 12 }}>
                                <Card.Img variant="top" src={item.img} width="286px" height="180px"/>
                                <Card.Body>
                                    <Card.Title>{item.titulo}</Card.Title>
                                    <Card.Text>
                                        {item.descricao}
                                    </Card.Text>
                                    <Button variant="primary" style={{marginLeft:40,marginRight:40}}>Ler mais</Button>
                                    <ModalComp id={item.id_tecnologia} titulo={item.titulo} status={item.status} descricao={item.descricao} img={item.img}/>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </Row>
        </Container>
        // </div>
    );
}

export default CardComp;