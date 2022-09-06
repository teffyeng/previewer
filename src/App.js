import { useState } from 'react';
import  { marked } from 'marked';
import './App.css';
import React from 'react';




function App() {
  
  const [text, setText] = React.useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
  "firstName": "Jan",
  "lastName":"Johnson",
  "age": 25
  }

 \`\`\`
 - First item
 - Second item
 - Third item
 > blockquote

 ![alt text](image.jpg)

 **bold text**

 `);

 marked.setOptions({
  breaks: true
 })

  return (

<div className="App">
  
      <textarea className='editor'
      id="editor" 
      onChange ={(event) => {
      setText(event.target.value);
    }} value={text}></textarea>
    <div className="preview" id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(text),
    }}
    ></div>
  </div>
    
  );
}

export default App;
