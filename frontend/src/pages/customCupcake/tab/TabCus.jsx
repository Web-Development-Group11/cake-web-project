import React, { useState} from 'react'
import styles from './TabCus.module.css'
import { FiCheck, FiX } from "react-icons/fi";
import com from '../../../assets/cuscupcake/com.png'
import chocochip from '../../../assets/cuscupcake/chocochip.png'
import cherry from '../../../assets/cuscupcake/cherry.png'

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

            {/* TabContent of Cream */}
            {activeTab === "cream" && (
              <div className={styles.cream}>
                <div className={styles.cream__item}>
                    <div className={styles.cream__option1}>
                      <FiX size='3rem' strokeWidth='1'/>
                    </div>
                    <div className="title--3">Không chọn kem phủ</div>
                </div>

                <div className={styles.chooseOption}>
                  <div className={styles.cream__item}>
                    <div className={styles.cream__option2}>
                      <FiCheck size='3rem' strokeWidth='1'/>
                    </div>
                    <div className="title--3">Chọn kem phủ</div>
                  </div>

                  <div className={styles.subOption}>
                    <div className={styles.sub__item}>
                      <div className={styles.cream__subOption1}/>
                      <div className="body--2">Vị chocolate</div>
                    </div>

                    <div className={styles.sub__item}>
                      <div className={styles.cream__subOption2}/>
                      <div className="body--2">Vị vani</div>
                    </div>

                    <div className={styles.sub__item}>
                      <div className={styles.cream__subOption3}/>
                      <div className="body--2">Vị dâu tây</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TabContent of Topping */}
            {activeTab === "topping" && (
              <div className={styles.topping}>
                <div className={styles.topping__item}>
                    <div className={styles.topping__option1}>
                      <FiX size='3rem' strokeWidth='1'/>
                    </div>
                    <div className="title--3">Không chọn topping</div>
                </div>

                <div className={styles.chooseOption}>
                  <div className={styles.topping__item}>
                    <div className={styles.topping__option2}>
                      <FiCheck size='3rem' strokeWidth='1'/>
                    </div>
                    <div className="title--3">Chọn topping</div>
                  </div>

                  <div className={styles.subOption}>
                    <div className={styles.sub__item}>
                      <img src={com}/>
                      <div className="body--2">Cốm</div>
                    </div>

                    <div className={styles.sub__item}>
                      <img src={chocochip} />
                      <div className="body--2">Chocochip</div>
                    </div>

                    <div className={styles.sub__item}>
                      <img src={cherry} />
                      <div className="body--2">Cherry</div>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>

        
    )
}

export default TabCus