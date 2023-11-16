import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
function EditProduct()
{
    const navigate = useNavigate();
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [inputs, setInputs] = useState([]);

     
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
     
    const uploadProduct= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', inputs.name);
        formData.append('quanty',inputs.quanty);
        formData.append('description',inputs.description);
        formData.append('category',inputs.category);
        formData.append('value',inputs.value);
        const response= await axios.post("https://api-rest.maxima.inf.br/api/products/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        setTimeout(()=>{
            navigate('/productlist');
        }, 2000);
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadProduct();
 
   }
    
    useEffect(() => {
        getproduct();
    }, []);
   
    function getproduct() {
        axios.get('https://api-rest.maxima.inf.br/api/products/'+id).then(function(response) {
            console.log(response);
            setInputs(response.data.product);
        });
    }
     
    return(
    <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Edit Product </h5> 
                <p className="text-success"><b>{ message }</b></p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Nome do produto: </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.name} className="form-control" name="name" onChange={ handleChange}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Quantidade: </label>
                    <div className="col-sm-9">
                        <input type="number" value={inputs.quanty} className="form-control" name="quanty" onChange={ handleChange} />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Descrição: </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.description} className="form-control" name="description" onChange={ handleChange} />
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Categoria: </label>
                    <div className="col-sm-9">
                    <select id="i3" type="text" value={inputs.category} className="form-control" name="category" onChange={ handleChange}>
                            <option value="Sem categoria selecionada">Selecione a categoria</option>
                            <option value="Limpeza">Limpeza</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Materiais de Construção">Materiais de Construção</option>
                            <option value="Produtos Industriais">Produtos Industriais</option>
                            <option value="Teste">Teste</option>
                        </select>
                        {/* <input type="text" value={inputs.category} className="form-control" name="category" onChange={ handleChange} /> */}
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Preço: </label>
                    <div className="col-sm-9">
                        <input type="number" value={inputs.value} className="form-control" name="value" onChange={ handleChange} />
                    </div>
                    </div>
 
                    
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Atualizar</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>
    );
}
export default EditProduct;