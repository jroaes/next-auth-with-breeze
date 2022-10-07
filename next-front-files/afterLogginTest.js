import {useState, useEffect} from "react";
import axios from "axios";

export default function afterLogginTest(){

    const [userData, setUserData] = useState()

    useEffect(() => {
      
      //Call any request in your breeze API that need user are logged
      const response = await axios.request({
                          method: 'get',
                          url: '/api/userData,
                          data: null,
                      })
      if(response)
        setUserData(response.data.res)
        
    }, [])

    return(
        <div>
           userData -> {userData}
        <div/>
    )
}
