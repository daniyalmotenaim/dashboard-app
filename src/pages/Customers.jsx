import React from 'react'
import {GridComponent,ColumnsDirective, ColumnDirective, Page,Edit,Inject,Toolbar,Selection,  Sort,Filter} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid, } from '../data/dummy';
import { Header } from '../components';
const Customers = () => {
  return (
    <div className="m-10 md:m-10 mt-10 p-5 md:p-15 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="Page" title="Customers" />
          <GridComponent 
          
            dataSource={customersData}
            // contextMenuItems={contextMenuItems} 
             allowPaging 
             allowSorting 
             toolbar={['Delete']}
            // allowExcelExport 
            // allowPdfExport 
             //allowFiltering 
             editSettings={{ allowDeleting: true, allowEditing: true }}
             width="auto"
            >
            
            <Inject services={[Page, Toolbar, Edit,Selection,Sort,Filter]} />
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            {/* Removed duplicate Inject */}
            {/* <GridComponent dataSource={ordersData} contextMenuItems={contextMenuItems} allowPaging allowSorting allowExcelExport allowPdfExport allowFiltering editSettings={{ allowDeleting: true, allowEditing: true }}> */}
              
            </GridComponent>
          
       </div>
      )
  
}

export default Customers