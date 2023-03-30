import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function LoginFormModal() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nome, setNome] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [resp, setResp] = useState('')
  const [resposta, setResposta] = useState('')
  const [logado, setLogado] = useState(false)
  const [botao, setBotao] = useState('login')
  function logar() {
    const user = {
      senha: senha
    }
    if (email === '' && senha === '') {
      setResposta('Insira um email e uma senha.')
    } else {
      axios.post(`http://localhost:3000/usuario/login/${email}`, user)
        .then(function (response) {
          console.log(response.data);
          setResp(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    if (resp != true) {
      if (resp === false) {
        setResposta('senha incorreta')
      } else {
        setResposta(resp)
      }
    } else {

      setResposta('')
      setShow(false)
      setLogado(true)
      buscaNome()
    }


  }, [resp])

  async function buscaNome() {
    const r= await axios.get(`http://localhost:3000/usuario/email/${email}`)
      // .then(function (response) {
      //   console.log(response.data);
      //   return (response.data[0].nome)
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      console.log(r)
      const ret=await r.data[0].nome
      console.log(ret)
      setNome(buscaNome)
      setBotao('logout')
  }
  return (
    <>
      <Button variant="primary" size="sm" onClick={() => {
        if (!logado) {
          handleShow()
        } else {
          setLogado(false)
          setBotao('login')
        }
      }}>
        {botao}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login de Usuários</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                Entre com seu email cadastrado.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>senha:</Form.Label>
              <Form.Control type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} />
            </Form.Group>
            <p>{resposta}</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={logar}>
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginFormModal