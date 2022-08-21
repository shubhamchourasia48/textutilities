import React, {useState} from 'react'

const Textform = ({heading, mode, showAlert}) => {
  const [text, setText] = useState("Enter Text Here");

  const onUperCaseClk =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    showAlert("success", "Converted to uppercase")
  }

  const onLowerCaseClk =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    showAlert("success", "Converted to lowercase")

  }

  const onClear =()=>{
    let newText = "" ;
    setText(newText)
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const textareaChange = ()=>{
    setText(" ") 
  }


  return (
    <>
          <div className="mb-3" style={ {color: mode==='light'?'black':'white'}}>
            <h1>{heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} onFocus={textareaChange} id="exampleFormControlTextarea1" rows="9" style={{backgroundColor: mode==='light'?'white':'#14131240', color: mode==='light'?'black':'white'}}></textarea>
         </div>
            <button className="btn btn-success mx-2" onClick={onUperCaseClk} >Convert to UpperCase</button>
            <button className="btn btn-info mx-2" onClick={onLowerCaseClk} >Convert to LowerCase</button>
            <button className="btn btn-danger mx-2" onClick={onClear}>Reset</button>

            <div className="container" style={ {color: mode==='light'?'black':'white'}}>
              <h1>Your text summery</h1>
              <p>{text.trim().split(' ').length} words and {text.length} characters </p>
              <p>{0.008*text.trim().split(' ').length} minutes to read</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
    </>
  )
}

export default Textform