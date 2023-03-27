import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalComp(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    
      const options = { method: 'GET', url: `http://localhost:3000/tecnologia/id/${props.id}` };
      axios.request(options).then(function (response) {
        setTit(response.data[0].titulo)
        setDesc(response.data[0].descricao)
        setStatus(response.data[0].status)
        setImg(response.data[0].img)
      }).catch(function (error) {
        console.error(error);
      });
    
  };
  const [tit, setTit] = useState('')
  const [desc, setDesc] = useState('')
  const [status, setStatus] = useState('')
  const [img, setImg] = useState('')
  
  const Inserir = ((e) => {
    e.preventDefault()
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
    axios.put(`http://localhost:3000/tecnologia/id/${props.id}`, tec)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  return (
    <>
      <Button variant="primary" onClick={handleShow}>Alterar</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={(e) => { Inserir(e) }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titulo:</Form.Label>
        <Form.Control type="text" onChange={(e) => setTit(e.target.value)} value={tit} />
        <Form.Label>Status:</Form.Label>
        <Form.Control type="text" onChange={(e) => setStatus(e.target.value)} value={status} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição:</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} value={desc} />
      </Form.Group>
      <Form.Label>imagem:</Form.Label>
      <Form.Control type="text" onChange={(e) => setImg(e.target.value)} value={img} />
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComp