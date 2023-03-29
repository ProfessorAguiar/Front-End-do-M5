import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function InserirTec() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tit, setTit] = useState('')
  const [desc, setDesc] = useState('')
  const [status, setStatus] = useState('')
  const [img, setImg] = useState('')

  const Inserir = (() => {
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2, '0')
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const ano = hoje.getFullYear()
    const dataAtual = `${dia}/${mes}/${ano}`
    const tec = {
      titulo: tit,
      descricao: desc,
      status: status,
      data_criacao: dataAtual,
      id_usuario: 1,
      img: img
    }
    console.log(tec)
    axios.post('http://localhost:3000/tecnologia', tec)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      setShow(false)
  })
  return (
    <>
      <Container className="justify-content-md-center d-sm-flex" style={{ marginTop: 70 }}>
        <Col xs lg="10">
          <Row>
            <Button variant="secondary" onClick={handleShow}>
              Inserir
            </Button>
          </Row>
        </Col>
      </Container >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserir</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo:</Form.Label>
              <Form.Control type="text" onChange={(e) => setTit(e.target.value)} />
              <Form.Label>Status:</Form.Label>
              <Form.Control type="text" onChange={(e) => setStatus(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} />
            </Form.Group>
            <Form.Label>imagem:</Form.Label>
            <Form.Control type="text" onChange={(e) => setImg(e.target.value)} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={Inserir}>
            Inserir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InserirTec;