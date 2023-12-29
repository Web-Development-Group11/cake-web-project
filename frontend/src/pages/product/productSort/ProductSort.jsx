import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductSort.css';
import { useLocation, useNavigate } from 'react-router';


// ProductSort.propTypes = {
//     currentSort: PropTypes.string.isRequired, onChange: PropTypes.func
// };

function ProductSort({ items }) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const [selectedValue, setSelectedValue] = useState(items[0].value);

    useEffect(() => {
        const sort = params.get('sort') || null;

        if (sort) {
            setSelectedValue(sort);
        }
    }, [])

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        params.set('sort', event.target.value);
        navigate({ search: params.toString() });
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