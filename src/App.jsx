import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [loans, setLoans] = useState([]);

  const [Age, setAge] = useState();
  const [Experience, setExperience] = useState();
  const [Income, setIncome] = useState();
  const [zip, setzip] = useState();
  const [Family, setFamily] = useState();
  const [CCAvg, setCCAvg] = useState();
  const [Education, setEducation] = useState();
  const [Mortgage, setMortgage] = useState();
  const [pLoan, setpLoan] = useState();
  const [SecuritiesAccount, setSecuritiesAccount] = useState();
  const [CdAccount, setCdAccount] = useState();
  const [Online, setOnline] = useState();

  const fetchLoans = async () => {
    const result = await axios('http://127.0.0.1:5000/loans');
    if(result.status !== 200) {
      console.log('Erro inesperado!')
    }
    setLoans(result.data.loans);
    console.log(result.data.loans);
  }
  useEffect(() => {
    fetchLoans();
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append('Age', Age);
    body.append('Experience', Experience);
    body.append('Income', Income);
    body.append('zip', zip);
    body.append('Family', Family);
    body.append('CCAvg', CCAvg);
    body.append('Education', Education);
    body.append('Mortgage', Mortgage);
    body.append('pLoan', pLoan);
    body.append('SecuritiesAccount', SecuritiesAccount);
    body.append('CdAccount', CdAccount);
    body.append('Online', Online);

    const resultAdd = await axios.post('http://127.0.0.1:5000/loan', body)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    fetchLoans();
  }

  const handleDelete = async (e, item) => {
    e.preventDefault();

    const resultAdd = await axios.delete(`http://127.0.0.1:5000/loan?id=${item}`)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    fetchLoans();
  }

  return (
    <>
      <div>
        <h1>Check loan</h1>

        <form method="post" onSubmit={handleAdd} className='formLoan'>
          <input type="text" placeholder="Idade" onChange={e => setAge(e.target.value)}/>
          <input type="text" placeholder="Anos de experiencia" onChange={e => setExperience(e.target.value)}/>
          <input type="text" placeholder="Salário em K" onChange={e => setIncome(e.target.value)}/>
          <input type="text" placeholder="CEP" onChange={e => setzip(e.target.value)}/>
          <br></br>
          <input type="text" placeholder="Filhos" onChange={e => setFamily(e.target.value)}/>
          <input type="text" placeholder="Média de cartões" onChange={e => setCCAvg(e.target.value)}/>
          <input type="text" placeholder="Educação" onChange={e => setEducation(e.target.value)}/>
          <input type="text" placeholder="Imovel financiado" onChange={e => setMortgage(e.target.value)}/>
          <br></br>
          <input type="text" placeholder="Emprestimos pessoais" onChange={e => setpLoan(e.target.value)}/>
          <input type="text" placeholder="Poupança" onChange={e => setSecuritiesAccount(e.target.value)}/>
          <input type="text" placeholder="Investimentos" onChange={e => setCdAccount(e.target.value)}/>
          <input type="text" placeholder="Banco online" onChange={e => setOnline(e.target.value)}/>
          <br></br>
          <button type="submit" className='bt-enviar'>Analisar</button>
          
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Idade</th>
              <th>Experiência</th>
              <th>Salário anual</th>
              <th>CEP</th>
              <th>Filhos</th>
              <th>Média cartões de credito</th>
              <th>Educação</th>
              <th>Imovel financiado</th>
              <th>Emprestimos pessoais</th>
              <th>Poupança</th>
              <th>Investimentos</th>
              <th>Banco online</th>
              <th>Resultado</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
          {
            loans.map((item, index) => {
              return (<tr key={index}>
              <td>{item.id}</td>
              <td>{item.Age}</td>
              <td>{item.Experience}</td>
              <td>{item.Income}</td>
              <td>{item.zip}</td>
              <td>{item.Family}</td>
              <td>{item.CCAvg}</td>
              <td>{item.Mortgage}</td>
              <td>{item.pLoan}</td>
              <td>{item.Education}</td>
              <td>{item.SecuritiesAccount}</td>
              <td>{item.CdAccount}</td>
              <td>{item.Online}</td>
              <td>{item.outcome}</td>
              <td><a href="#" onClick={e => handleDelete(e, item.id)}>X</a></td>
          </tr>)
            })
          } 
          </tbody>
        </table>

      </div>


      		 						 				
    </>
  )
}

export default App
