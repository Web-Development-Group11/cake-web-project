import React from 'react'
import './pagination.css'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const currentPage = searchParams.get('page') || 1;

  const handlePrevious = () => {
    if (currentPage <= 1) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', Number(currentPage) - 1);
    setSearchParams(newParams);
  }

  const handleNext = () => {
    if (currentPage >= totalPages) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', Number(currentPage) + 1);
    setSearchParams(newParams);
  }

  const handleChoosePage = (page) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page);
    setSearchParams(newParams);
  }

  return (
    <div className="center">
      <div className="pagination">
        <button 
          className={`pagination__button ${Number(currentPage) === 1 ? 'inactive' : ''}`} 
          onClick={handlePrevious}
        >
          <GrFormPrevious className='pagination__icon' />
        </button>
        <div className="pagination__items">
          {pages.map((page, idx) => (
            <button 
              key={idx} 
              className={`pagination__item ${Number(currentPage) === page ? 'active' : ''}`}
              onClick={() => handleChoosePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button 
          className={`pagination__button ${Number(currentPage) === totalPages ? 'inactive' : ''}`}
          onClick={handleNext}
        >
          <GrFormNext className='pagination__icon' />
        </button>
      </div>
    </div>
  )
}
