import React from 'react'
import styles from './pagination.module.css'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pages = []

  if (totalPages <= 1) return (<></>)

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
    <div className={styles.center}>
      <div className={styles.pagination}>
        <button
          className={`${styles.pagination__button} ${Number(currentPage) === 1 ? styles.inactive : ''}`}
          onClick={handlePrevious}
        >
          <GrFormPrevious className= {styles.pagination__icon} />
        </button>
        <div className={styles.pagination__items}>
          {pages.map((page, idx) => (
            <button
              key={idx}
              className={`${styles.pagination__item} ${Number(currentPage) === page ? styles.active : ''}`}
              onClick={() => handleChoosePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className={`${styles.pagination__button} ${Number(currentPage) === totalPages ? styles.inactive : ''}`}
          onClick={handleNext}
        >
          <GrFormNext className={styles.pagination__icon} />
        </button>
      </div>
    </div>
  )
}
