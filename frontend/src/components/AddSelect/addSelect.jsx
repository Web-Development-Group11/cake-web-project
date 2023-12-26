import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './addSelect.module.css'; 

const AddSelect = ({ 
    showProvince,
    showDistrict,
    showWard,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    onProvinceChange,
    onDistrictChange,
    onWardChange
}) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);


  const [selectedProvinceName, setSelectedProvince] = useState(selectedProvince);
  const [selectedDistrictName, setSelectedDistrict] = useState(selectedDistrict);
  const [selectedWardName, setSelectedWard] = useState(selectedWard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
        setProvinces(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedProvince(selectedProvince);
  }, [selectedProvince]);

  useEffect(() => {
    setSelectedDistrict(selectedDistrict);
  }, [selectedDistrict]);

  useEffect(() => {
    setSelectedWard(selectedWard);
  }, [selectedWard]);

  const handleProvinceChange = (selectedProvinceName) => {
    setSelectedProvince(selectedProvinceName);

    onProvinceChange(selectedProvinceName);

    const province = provinces.find(province => province.Name === selectedProvinceName);
    if (province) {
      setDistricts(province.Districts || []);
    } else {
      setDistricts([]);
    }
    setWards([]);
    setSelectedDistrict('');
    setSelectedWard('');
  };

  const handleDistrictChange = (selectedDistrictName) => {
    setSelectedDistrict(selectedDistrictName);

    onDistrictChange(selectedDistrictName); 

    const district = districts.find(district => district.Name === selectedDistrictName);
    if (district && district.Wards) {
      setWards(district.Wards);
    } else {
      setWards([]);
    }
    setSelectedWard('');
  };

  const handleWardChange = (selectedWardName) => {
    setSelectedWard(selectedWardName);
    onWardChange(selectedWardName); 
  };

  return (
    <div className={styles.container}>
      {showProvince && (
         <div className={styles.item}>
            <label htmlFor="province" className='title--4'>Tỉnh/Thành phố</label>
            <select
            className={styles.select}
            Name="province"
            onChange={(e) => handleProvinceChange(e.target.value)}
            value={selectedProvince}
            >
            <option value="">{selectedProvince}</option>
            {provinces.map(province => (
                <option key={province.Name} value={province.Name}>{province.Name}</option>
            ))}
            </select>
        </div>
      )}

      {showDistrict && (
        <div className={styles.item}>
        <label htmlFor="district" className='title--4'>Quận/Huyện</label>
            <select
            className={styles.select}
            Name="district"
            onChange={(e) => handleDistrictChange(e.target.value)}
            value={selectedDistrict}
            >
            <option value="">{selectedDistrict}</option>
            {districts.map(district => (
                <option key={district.Name} value={district.Name}>{district.Name}</option>
            ))}
            </select>
        </div>
      )}

      {showWard && (
        <div className={styles.item}>
            <label htmlFor="ward" className='title--4'>Xã/Phường</label>
            <select
            className={styles.select}
            Name="ward"
            onChange={(e) => handleWardChange(e.target.value)}
            value={selectedWard}
            >
            <option value="">{selectedWard}</option>
            {wards.map(ward => (
                <option key={ward.Name} value={ward.Name}>{ward.Name}</option>
            ))}
            </select>
        </div>
      )}
    </div>
  );
};

export default AddSelect;
