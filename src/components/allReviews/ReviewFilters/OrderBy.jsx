

const OrderBy = ({ setOrderBy, orderBy }) => {
    return (
        <button onClick={() => {
            orderBy === 'order_by=DESC' ? setOrderBy('order_by=ASC') : setOrderBy('order_by=DESC')
        }}
        >{orderBy.slice(9)}</button>)
}

export default OrderBy