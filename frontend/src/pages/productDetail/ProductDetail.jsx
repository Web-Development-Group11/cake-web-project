import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const ProductDetail = () => {
  const breadcrumbItems = [
    { text: 'Home', url: '' },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1>ProductDetail</h1>
    </div>
    
  )
}

export default ProductDetail