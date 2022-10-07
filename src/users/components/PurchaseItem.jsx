import { Table } from "react-bootstrap"
import { formatDate } from "../../helpers"

export const PurchaseItem = ({
      createdAt,
      updatedAt,
      cart
}) => {

      return (
            <div className="purchaseItem">
                  <header className="purchaseItem__header">
                        <p>CreatedAt: { formatDate(createdAt) }</p>
                        <p>UpdatedAt: { formatDate(updatedAt) }</p>
                  </header>

                  <div className="purchaseItem__product">
                        
                        <Table striped bordered hover>
                              <thead>
                                    <tr>
                                          <th>#</th>
                                          <th>Title</th>
                                          <th>Quantity</th>
                                          <th>Price</th>
                                          <th>Subtotal</th>
                                    </tr>
                              </thead>
                              <tbody>

                              {
                                    cart.products.map( product => (
                                          <tr key={product.id}>
                                                <td>{ product.id }</td>
                                                <td>{ product.title }</td>
                                                <td>{ product.productsInCart.quantity }</td>
                                                <td>$ { product.price }</td>
                                                <td>$ { Number(product.price) * product.productsInCart.quantity }</td>
                                          </tr>
                              ))}
                              </tbody>
                        </Table>
                              
                        
                  </div>

            </div>
      )
}
