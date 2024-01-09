import { useState } from "react"
import AxiosService from "./utils/Apisercice"
import { useEffect } from "react"
import { Table } from "react-bootstrap"
function App() {
  let [apiData, setApiData] = useState([])

   
  let getData = async()=>{
    try {
      let res = await AxiosService.get('/product')

      if(res.status ===200) {
        setApiData(res.data)
       
      }
      
      
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    getData()
   },[])
   console.log()
  return <div>
    <Table striped bordered hover>
      <thead>
        
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            
          </tr>
        
      </thead>
      <tbody>
         {
          apiData.map((e)=>{
            return <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.description}</td>
              <td>{e.category}</td>
              <td><img src={`${e.image}`} width="50" height="60" alt="pics" /></td>              
            </tr>
          })
        } 

        
      </tbody>
    </Table>
  

  </div>
}

export default App
