import React, { useState } from 'react';
import './ProductSort.css';

function ProductSort({ items, onChange }) {
    const [selectedValue, setSelectedValue] = useState(items[0].value);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        onChange(event.target.value)
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