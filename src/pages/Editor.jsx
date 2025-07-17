import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy';
import { Header } from '../components';


const Editor = () => {
  return (
    <div className="m-10 md:m-10 mt-10 p-5 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Editor" />
      <RichTextEditorComponent>
       < Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar]} />        
      </RichTextEditorComponent>
    
    </div>

  )
}

export default Editor