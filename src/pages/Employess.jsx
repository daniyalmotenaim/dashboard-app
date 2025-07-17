import React from 'react'
import {GridComponent,ColumnsDirective, ColumnDirective, Page,Edit,Inject,Search,Toolbar} from '@syncfusion/ej2-react-grids';
import { employessData, employessGrid,contextMenuItems } from '../data/dummy';
import { Header } from '../components';
const Employess = () => {
  return (
    <div className="m-10 md:m-10 mt-10 p-5 md:p-15 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent 
      
        dataSource={employessData}
        // contextMenuItems={contextMenuItems} 
         allowPaging 
         allowSorting 
         toolbar={['Search']}
        // allowExcelExport 
        // allowPdfExport 
         //allowFiltering 
        // editSettings={{ allowDeleting: true, allowEditing: true }}
         width="auto"
        >
        
        <Inject services={[Page,Search,Toolbar]} />
        <ColumnsDirective>
          {employessGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]} /> */}
        {/* <GridComponent dataSource={ordersData} contextMenuItems={contextMenuItems} allowPaging allowSorting allowExcelExport allowPdfExport allowFiltering editSettings={{ allowDeleting: true, allowEditing: true }}> */}
          
        </GridComponent>
      
    </div>
  )
}

export default Employess