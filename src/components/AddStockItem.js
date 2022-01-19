import React, {useState} from 'react'
import {Form, Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AddStockItem() {
  //let initValue  = [];
  const [products, setProducts] = useState([]);
   
  const increaseQty =(event) =>{
      //console.log(event.target.value);
      const arrayIndex = event.target.value;
      products[arrayIndex].product_quantity =products[arrayIndex].product_quantity + 1;
      setProducts([...products]);
  };

  const decreaseQty = (event)=>{
    //console.log(event.target.value);
      const arrayIndex = event.target.value;
      products[arrayIndex].product_quantity =products[arrayIndex].product_quantity - 1;
      setProducts([...products]);
  };
  
  const addProduct = (e)=>{
        e.preventDefault();
       //const formData = e.target;
        var newProduct ={
            product_name: e.target.product_name.value,
            product_price: e.target.product_price.value,
            product_quantity: Number(e.target.product_quantity.value)
        }
     
       //setProducts([newProduct]);
        setProducts([...products, newProduct]);
      
    }
   
   
    return (
       <>
       <div>
        <Form onReset = {addProduct}>
        <Form.Group controlId="formBasicProduct">
            <Form.Label>Add Product</Form.Label>
            <Form.Control type="text" placeholder="Product name" name ="product_name" />
           
        </Form.Group>

        <Form.Group controlId="formBasicProductQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="Quantity of Product" name ="product_quantity"/>
            
        </Form.Group>

        <Form.Group controlId="formBasicProductPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" name ="product_price"/>
        
        </Form.Group>

            <Button variant="primary" type="reset" >
                ADD STOCK
            </Button>
            
            </Form>
            <p></p>
        </div>
        <div>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Buy/Sell</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((item, index)=>{
                    return(
                        <tr key = {index}>
                  <td>{index}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_quantity}</td>
                  <td>{item.product_price}</td>
                  <td>
                    <button variant ="success" onClick={(event)=>increaseQty(event)} value ={index}>+ (Buy)</button>
                    <button variant ="danger" onClick={(event)=>decreaseQty(event)} value={index}>- (Sell)</button>
                  </td>
                </tr>
                    )
                  })
                }
                
              </tbody>
            </Table>  

        </div>
        </>
    )
}

export default AddStockItem
