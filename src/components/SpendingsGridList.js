import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import api,{API_TYPES} from "../actions/api";
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Data', width: 130 },
  { field: 'carID', headerName: 'Car', width: 130 },
  { field: 'costID', headerName: 'Cost', width: 130 },
  { field: 'price', headerName: 'Price', width: 130 }

  // ,{
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     ${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''},
  // },
];




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

function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

// const arr = JSON.parse(request.data);
//       arr.forEach(obj => renameKey(obj, 'idCar', 'id'));
//       const updatedJson = JSON.stringify(arr);

      // setData(updatedJson);

export const SpendingsGridList = (props) => {
    const classes = useStyles();
    const [spendingsList, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const request = await api.request(API_TYPES.SPENDINGS).fetchAll();
        console.log(request.data);

        const updatedJson = request.data.map(({ idSpendings: id,date,carID,costID,price}) => ({
          id,
          date,
          carID,
          costID,
          price
        }));

        setData(updatedJson);
        console.log(request.data);
      };

      fetchData();
    }, []);
    return ( 
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={spendingsList} columns={columns} pageSize={5} checkboxSelection id="idSpendings" />
      </div>
    );
}
