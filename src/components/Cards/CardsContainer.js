import React from 'react'
import Cards from './Cards'
import getProducts from '../../actions/getProducts'
import useCustomPagination from '../../customHooks/useCustomPagination'
import { LIMIT } from '../../constants/constants'
import { userContext } from '../../context/userContext';
import './Cards.css'
import ButtonFilter from '../ButtonFilter/ButtonFilter'


const CardsContainer = () => {
    const [products, setProducts] = React.useState([]);
    const [sortData, setSortData] = React.useState("recent");
    const { history } = React.useContext(userContext)

    React.useEffect(() => {
      getProducts().then(e => setProducts(e));
    },[]);

    const renderSwitch = () =>{
        switch(sortData){
            case "lowPrice":
                return products.sort((a,b) => parseFloat(a.cost) - parseFloat(b.cost)).map((data, id) => <Cards key={id} {...data} />);
            case "highPrice":
                return products.sort((a,b) => parseFloat(b.cost) - parseFloat(a.cost)).map((data, id) => <Cards key={id} {...data} />);
            default:
                return products.sort((a,b) => (a._id < b._id ? -1 : 1)).map((data, id) => <Cards key={id} {...data} />)
        }
    }

    const { currentArray, next, prev, maxPage, currentPage } = useCustomPagination(renderSwitch(), LIMIT);

    return (
        <section>
            <section className="filters">
                <div>Sort by:</div>
                <div>
                    <ButtonFilter setSortData={setSortData} filter="recent" message="Most recent"/>
                    <ButtonFilter setSortData={setSortData} filter="lowPrice" message="Lowest price"/>
                    <ButtonFilter setSortData={setSortData} filter="highPrice" message="Highest price"/>
                </div>
            </section>
            <section className="container-cards">
            { currentArray }
            </section>
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

export default CardsContainer;