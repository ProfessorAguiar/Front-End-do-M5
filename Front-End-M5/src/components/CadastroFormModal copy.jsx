import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function CadastroFormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [CEP, setCEP] = useState('')
  const [endereco, setEndereco] = useState('')
  const [complemento, setComplemento] = useState('')
  const [CPF, setCPF] = useState('')
  const [numero, setNumero] = useState('')
  const [image, setImage] = useState('')
  const [rSenha, setRSenha] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [fotoPerfil,setFotoPerfil]=useState('')

  function Cadastro() {
    if (senha != rSenha) {
      setMsn('As senhas não conferem.')
    } else {
      const cadUser = {
        nome: nome,
        email: email,
        senha: senha,
        CEP: CEP,
        endereco: endereco,
        complemento: complemento,
        CPF: CPF,
        numero: numero,
        cidade: cidade,
        estado: estado
      }
        (async () => {
          axios.post('http://localhost:3000/usuario', cadUser)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            })
        })
    }
  }
  function enviaFoto() {
    const blob = image.slice(0, image.size, 'image/jpg'); 
    const newImage = new File([blob], `${nome}.jpg`, {type: 'image/jpg'});
    const form = new FormData();
    form.append('image', newImage,);

    const options = {
      method: 'POST',
      url: 'http://localhost:3000/usuario/upload',
      headers: {'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'},
      data: form
    }

    axios.request(options)
    .then((response) => {
      console.log(response.data)
      console.log(image)
    }).catch((err) => {
      console.log(err)
    })

  }


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
                <Form.Control placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Label>Foto do perfil:</Form.Label>
            
              <Form.Group as={Col}>
                <Form.Control type='file' onChange={(e) => { setImage(e.target.files[0]) }} />
              </Form.Group>
              <Form.Group as={Col}>
                <Button variant="secondary" onClick={enviaFoto}>enviar</Button>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CPF:</Form.Label>
                <Form.Control onChange={(e) => setCPF(e.target.value)} />
              </Form.Group>

            </Row>
            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Senha:</Form.Label>
                <Form.Control type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Repita senha:</Form.Label>
                <Form.Control type="password" placeholder="repita senha" onChange={(e) => setRSenha(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP:</Form.Label>
                <Form.Control onChange={(e) => setCEP(e.target.value)} />
              </Form.Group>

            </Row>

            <Row className="mb-3">
              <Col xs={9}>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Endereço:</Form.Label>
                  <Form.Control placeholder="Rua A" onChange={(e) => setEndereco(e.target.value)} />
                </Form.Group>
              </Col>

              <Col xs={3}>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Número:</Form.Label>
                  <Form.Control onChange={(e) => setNumero(e.target.value)} />
                </Form.Group>

              </Col>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Complemento:</Form.Label>
                <Form.Control onChange={(e) => setComplemento(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade:</Form.Label>
                <Form.Control onChange={(e) => setCidade(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado:</Form.Label>
                <Form.Control onChange={(e) => setEstado(e.target.value)} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Aceito os termos e condições." onChange={(e) => setAceito(e.target.value)} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={Cadastro}>
            Cadastrar-se
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CadastroFormModal