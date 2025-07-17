import React from 'react'
import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';


const Kanban = () => {
  return (

    <div className="m-10 md:m-10 mt-10 p-5 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
          <Header category="App" title="Kanban" />

          <KanbanComponent 
          id='kanban'
          dataSource={kanbanData}
          keyField='Status'
          cardSettings={{ contentField: 'Summary', headerField: 'Id' }}

          >
            <ColumnsDirective>
              {kanbanGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <KanbanComponent dataSource={kanbanData} keyField='Status' cardSettings={{ contentField: 'Summary', headerField: 'Id' }} />
          </KanbanComponent>
    
    </div>      
  )
}

export default Kanban