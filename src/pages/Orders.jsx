import React from 'react'
import {GridComponent,ColumnsDirective, ColumnDirective, Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid,contextMenuItems } from '../data/dummy';
import { Header } from '../components';


const Orders = () => {
  return (
    <div className="m-10 md:m-10 mt-10 p-2 md:p-15 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent 
      id='gridcomp'
        dataSource={ordersData}
        // contextMenuItems={contextMenuItems} 
         allowPaging 
         allowSorting 
        // allowExcelExport 
        // allowPdfExport 
         allowFiltering 
        // editSettings={{ allowDeleting: true, allowEditing: true }}
        // width="auto"
        >
        
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]} />
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]} /> */}
        {/* <GridComponent dataSource={ordersData} contextMenuItems={contextMenuItems} allowPaging allowSorting allowExcelExport allowPdfExport allowFiltering editSettings={{ allowDeleting: true, allowEditing: true }}> */}
          
        </GridComponent>
      
    </div>
  )
}

export default Orders