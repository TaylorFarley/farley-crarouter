import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Alert from '@mui/material/Alert';
export default function BasicEditingGrid() {

  //
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);
  //
const [data, setData] = React.useState({})
const [showData, setShowData] = React.useState(false)


  React.useEffect(() => {
    axios.post("/downloadListings").then((res) => {
     setData(res.data)
     setShowData(true)
   
    });
  }, [])



console.log(data)

  return (<React.Fragment>
    {showData?(  <div style={{ height: 300, width: '100%' }}>    
      <DataGrid 
      rows={data} 
      columns={columns}
      editRowsModel={editRowsModel}
      editMode="row"
      onEditRowsModelChange={handleEditRowsModelChange} />
    </div>):null}
    
    <Alert severity="info" style={{ marginTop: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert>
  </React.Fragment>
  
  );
}

const columns = [
  { field: 'uniqueAddressNoSpace', headerName: 'URL', width: 200, editable: true },
  { field: 'propertyDescriptionConvalue', headerName: 'Descript', width: 200, editable: true },
  { field: 'detailsValue', headerName: 'Value', width: 200, editable: true },  
  { field: 'StoriesTypeValue', headerName: 'Stories', width: 200, editable: true },
  { field: 'CommunityNameValue', headerName: 'CommunityName', width: 200, editable: true },
  { field: 'TitleTypeValue', headerName: 'Title', width: 200, editable: true },
  { field: 'LandSizeValue', headerName: 'Landsize', width: 200, editable: true },
  { field: 'AnnualPropertyTaxesValue', headerName: 'Property Taxes', width: 200, editable: true },
  { field: 'ParkingTypeValue', headerName: 'Parking', width: 200, editable: true },
  { field: 'BedroomsValue', headerName: 'Bedrooms', width: 200, editable: true },
  { field: 'BathroomsValue', headerName: 'Bathrooms', width: 200, editable: true },
  { field: 'BasementValue', headerName: 'Basement', width: 200, editable: true },
  { field: 'StyleValue', headerName: 'Style', width: 200, editable: true },
  { field: 'HeatingStyle', headerName: 'Heating', width: 200, editable: true },
  { field: 'CoolingStyle', headerName: 'Cooling', width: 200, editable: true },
  { field: 'ExteriorStyle', headerName: 'Exterior', width: 200, editable: true },  
  { field: 'listingAddressvalue', headerName: 'listingAddressvalue', width: 200, editable: true },
];

const rows = [

  {
    id: 2,
    listPricevalue: '$1,420,000',
    propertyDescriptionConvalue: 'Built In Year 2018, Good Size Home Over 3000 Sqf. Walk Out Space Basement For More Rent Income Potential.**** EXTRAS **** Stove, Fridge, Washer, Dryer, Dish Washer (29042005)',
    detailsValue: 'Property Summary\nProperty Type\nSingle Family\nBuilding Type\nHouse\nStoreys\n2\nCommunity Name\nSharon\nTitle\nFreehold\nLand Size\n35 x 98 FT\nAnnual Property Taxes\n$6,178.61\nParking Type\nGarage',
    propertyTypeValue: 'Property Type\nSingle Family',
    dsfsdf: 'Property Type\nSingle Family',
    StoriesTypeValue: 'Storeys\n2',
    CommunityNameValue: 'Community Name\nSharon',
    TitleTypeValue: 'Title\nFreehold',
    LandSizeValue: 'Land Size\n35 x 98 FT',
    AnnualPropertyTaxesValue: 'Annual Property Taxes\n$6,178.61',
    ParkingTypeValue: 'Parking Type\nGarage',
    BedroomsValue: 'Above Grade\n5',
    BathroomsValue: 'Total\n4',
    BasementValue: 'Basement Type\nN/A',
    StyleValue: 'Style\nDetached',
    CoolingStyle: 'Cooling\nCentral air conditioning',
    HeatingStyle: 'Heating Type\nForced air (Natural gas)',
    ExteriorStyle: 'Exterior Finish\nBrick',
    ParkingSpacesStyle: 'Total Parking Spaces\n3'},
  
];
