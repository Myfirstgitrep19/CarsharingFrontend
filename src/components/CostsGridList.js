import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import api,{API_TYPES} from "../actions/api";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Opis', width: 130 }
];

function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export const CostsGridList = (props) => {
  const classes = useStyles();
  const [costsList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.request(API_TYPES.COSTS).fetchAll();
      console.log(request.data);

      const updatedJson = request.data.map(({ idCosts: id, description}) => ({
        id,
        description
      }));

      setData(updatedJson);
      console.log(request.data);
    };

    fetchData();
  }, []);
  return ( 
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={costsList} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}