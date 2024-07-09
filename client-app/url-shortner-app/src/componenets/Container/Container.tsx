import * as React from 'react';
import FormContainer from '../FormContainer/FromContainer';
import { UrlData } from '../../interface/urlData';
import axios from 'axios';
import { serverUrl } from '../../helper/Constants';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const[data,setData] = React.useState<UrlData[]>([]);
  const[reload,setReload] = React.useState<boolean>(false);
  const updateReloadState = ():void =>{
    setReload(true);
  };
  const fetchTableData = async()=>{
    const response = await axios.get(`${serverUrl}/shorturl`)
    console.log("the response from server is : ",response);
    setData(response.data);
    setReload(false);

  };
  React.useEffect(()=>{
    fetchTableData();
  },[reload]);
  return (
    <>
        <FormContainer/>
        <DataTable updateReloadState={updateReloadState} data={data}/>
    </>
  );
};

export default Container;
