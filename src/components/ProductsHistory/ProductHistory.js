import React from 'react'
import './ProductHistory.css'
import { userContext } from '../../context/UserContext';
import { LIMIT } from '../../constants/constants'
import useCustomPagination from '../../customHooks/useCustomPagination'

const ProductsHistory = () => {
    const { history, record } = React.useContext(userContext)
    const { currentArray, next, prev, maxPage, currentPage } = useCustomPagination(record, LIMIT);

    return (
        <section style={{display: history ? "block" : "none"}}>
              <table class="rwd-table">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Cost</th>
                    </tr>
                    {currentArray.map((item, i) => 
                    <tr key={item.productId + i}>
                        <td data-th="Product Name">
                        {item.name}
                        </td>
                        <td data-th="Product Cost">
                        {item.cost}
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
            <section className="buttonsPagination">
                <button className="btnPaginationLeft" onClick={() => prev()} disabled={ currentPage <= 1 }></button>
                <div className="div-filter">
                {"Page " + currentPage + " of " + maxPage}
                </div>
                <button className="btnPaginationRight" onClick={() => next()} disabled={ currentPage >= maxPage }></button>
            </section>
        </section>
    );
}

export default ProductsHistory;