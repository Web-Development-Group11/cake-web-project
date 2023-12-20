import React from 'react';
import PropTypes from 'prop-types';


ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired, onChange: PropTypes.func
};

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    };


    return (
        //         <Tabs
        //             aria-label-"disabled tabs example"
        // ‹Tab label = "Giá thâp tới cao" value = "salePrice:ASC" > /Tab>
        // ‹Tab label = "Giá cao xuông thâp" value = "salePrice:DESC" > /Tab>
        // </Tabs >
        <div>
            <div>
                <div>
                    <label htmlFor="">Lọc theo</label>
                    <select value={currentSort} className='form-control select-filter' id="select-filter" onChange={handleSortChange}>
                        <option value="price:ASC">Giá thấp tới cao</option>
                        <option value="price:DESC">Giá cao xuống thấp</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
    );

}
export default ProductSort;