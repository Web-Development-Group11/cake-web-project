import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductSort.css';


// ProductSort.propTypes = {
//     currentSort: PropTypes.string.isRequired, onChange: PropTypes.func
// };

function ProductSort({ items }) {
    const [selectedValue, setSelectedValue] = useState(items[0].value);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <div className='sortfilter__container'>
            <label className='sortfilter__label body--2' htmlFor="">Sắp xếp theo</label>
            <select value={selectedValue} onChange={handleSelectChange} className="sortfilter__select">
                {items.map((item) => (
                    <option key={item.id} value={item.value} className={`${item.cName} body--2`}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ProductSort;