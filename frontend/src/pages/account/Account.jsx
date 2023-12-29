import React, { useEffect, useState } from 'react'
import Tab from '../../components/tab/Tab'
import acct from './Account.module.css'
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Account = () => {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosClient.get('/user')
        setTimeout(() => {
          setIsLoading(false);
        })

        setUser(response.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser();
  }, []);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div>
      <div className={acct.content}>
        <div className={acct.navigation}>
          <Breadcrumb />
        </div>
        <div className={acct.tab}>
          <Tab user={user} ></Tab>
        </div>
      </div>
    </div>
  )
}

export default Account