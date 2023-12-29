import React, { useState} from 'react'
import styles from './TabCus.module.css'

const TabCus = () => {
    const [activeTab, setActiveTab] = useState('cakeType');
    return (
        <div className={styles.tab__container}>
            <div className={styles.tab__header}>
            <div 
              className={`${styles.tab} ${activeTab=== 'cakeType' ? styles.active : ''} title--1`} 
              onClick={() => setActiveTab('cakeType')}
            >
              Hương vị
            </div>
            <div 
              className={`${styles.his__box} ${styles.tab} ${activeTab === 'cream' ? styles.active : ''} title--1`} 
              onClick={() => setActiveTab('cream')}
            >
              Kem phủ
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'topping' ? styles.active : ''} title--1`} 
              onClick={() => setActiveTab('topping')}
            >
              Topping
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'review' ? styles.active : ''} title--1`} 
              onClick={() => setActiveTab('review')}
            >
              Review
            </div>
          </div>

          {/* TabContent */}
          <div className={styles.tab__content}>

            {/* TabContent of Cake Type */}
            {activeTab === "cakeType" && (
                <div className={styles.cakeType}>
                <div className={styles.cakeType__item}>
                    <div className={styles.cakeType__option1}/>
                    <div className="title--3">Chocolate</div>
                </div>

                <div className={styles.cakeType__item}>
                    <div className={styles.cakeType__option2}/>
                    <div className="title--3">Vani</div>
                </div>

                <div className={styles.cakeType__item}>
                    <div className={styles.cakeType__option3}/>
                    <div className="title--3">Dâu tây</div>
                </div>

                </div>

            )}
          </div>
        </div>

        
    )
}

export default TabCus