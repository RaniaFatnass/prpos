import React from 'react'
import PropTypes from 'prop-types';


const ProductTable = (props)=>{
  console.log(props)
    return(
        <div>
        {props.prod.map( item=>{
            return(
                <table style={{ height: '100%', width: '300px', borderStyle:'solid', borderColor:'grey' }}>
                    <tr >
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>
                </table>
            );
        })
    }
        </div>
    );
}
ProductTable.propTypes={
    price:PropTypes.number,
    name:PropTypes.string,
    category:PropTypes.string
}

ProductTable.defaultProps = {
  name:  'xxx',
  price:  '000',
  category: 'YYY'
};


export default ProductTable


