import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
function AlterarTec() {
  const [itens, setItens] = useState([])
  const [i,setI]=useState('')
  useEffect(() => {
    const options = { method: 'GET', url: `http://localhost:3000/tecnologia/id/${props.id}` };
    axios.request(options).then(function (response) {

      setItens(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
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
    axios.post('http://localhost:3000/tecnologia', tec)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  return (
    <Form style={{ marginTop: 100, marginLeft: 120, marginRight: 120 }} onSubmit={(e) => { Inserir(e) }}>
      <Form.Select aria-label="Default select example">
        <option onBlur={(e)=>setI(e.target.value)}>Open this select menu</option>
        {itens.map((item, index) => {
          return (
            <option key={index} value={item.titulo}>{item.titulo}</option>
          )
        })}
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titulo:</Form.Label>
        <Form.Control type="text" onChange={(e) => setTit(e.target.value)} value={i} />
        <Form.Label>Status:</Form.Label>
        <Form.Control type="text" onChange={(e) => setStatus(e.target.value)} value="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição:</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} value="" />
      </Form.Group>
      <Form.Label>imagem:</Form.Label>
      <Form.Control type="text" onChange={(e) => setImg(e.target.value)} value="" />
      <Button type="submit" style={{ marginTop: 30, marginBottom: 50 }}>Inserir</Button>
    </Form>
  );
}

export default AlterarTec;