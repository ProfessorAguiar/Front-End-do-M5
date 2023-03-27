import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CadastroFormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow} style={{ marginLeft: 20 }}>
        cadastrar-se
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preencha as informações abaixo.</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Nome:</Form.Label>
                <Form.Control placeholder="Seu nome" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Seu email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CPF:</Form.Label>
                <Form.Control />
              </Form.Group>

            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="senha" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Repita senha:</Form.Label>
                <Form.Control type="password" placeholder="repita senha" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP:</Form.Label>
                <Form.Control />
              </Form.Group>

            </Row>

            <Row className="mb-3">
            <Col xs={9}>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Endereço:</Form.Label>
              <Form.Control placeholder="Rua A" />
            </Form.Group>
            </Col>

            <Col xs={3}>
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Número:</Form.Label>
                <Form.Control />
              </Form.Group>

            </Col>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Complemento:</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade:</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Aceito os termos e condições." />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cadastrar-se
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CadastroFormModal