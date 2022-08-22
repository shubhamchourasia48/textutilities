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



  return (
    <>
          <div className="mb-3" style={ {color: mode==='light'?'black':'white'}}>
            <h1>{heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9" style={{backgroundColor: mode==='light'?'white':'#14131240', color: mode==='light'?'black':'white'}}></textarea>
         </div>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={onUperCaseClk} >Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-2" onClick={onLowerCaseClk} >Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={onClear}>Reset</button>

            <div className="container" style={ {color: mode==='light'?'black':'white'}}>
              <h1>Your text summery</h1>
              <p>{text.trim().split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
              <p>{0.008*text.trim().split(' ').length} minutes to read</p>
              <h2>Preview</h2>
              <p>{text}</p>
            </div>
    </>
  )
}

export default Textform