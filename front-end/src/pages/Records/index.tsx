import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate} from './helpers';
import Pagination from './Pagination';
import { Link } from 'react-router-dom'
import Filters from '../../components/filters'


const BASE_URL = 'http://localhost:8080'

const Records = () =>{
    //criando estado interno para o componente funcionar
    const [ recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);

    console.log(recordsResponse)
    //use effect -> ciclo de vida de um componente
    useEffect(()=>{

        //console.log("compenente iniciado")

        Axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
        .then(response => setRecordsResponse(response.data))


    }, [activePage])

    const handlePageChange =(index: number) => {
         setActivePage(index)
    }


    return (

        <div className="page-container">
  
            <Filters link="/charts" linkText="Ver graficos" />
          <table className="records-table" cellPadding="0" cellSpacing="0">
  
              <thead>
                  <tr>
                      <th>INSTANTE</th>
                      <th>NOME</th>
                      <th>IDADE</th>
                      <th>PLAFORMA</th>
                      <th>GENERO</th>
                      <th>TITULO DO GAME</th>
                  </tr>
              </thead>
  
              <tbody>

                  {recordsResponse?.content.map(record => (

                    <tr key={record.id}>
                        <td>{formatDate(record.moment)}</td>
                        <td>{record.name}</td>
                        <td>{record.age}</td>
                        <td className="text-secondary ">{record.gamePlataform}</td>
                        <td>{record.genreName}</td>
                        <td className="text-primary">{record.gameTitle}</td>
                    </tr>

                ))}

  
              </tbody>
  
          </table>

       <Pagination  activePage={activePage}
        goToPage={handlePageChange}
       totalPages= {recordsResponse?.totalPages}/>

      </div>
  
  )


};


export default Records;