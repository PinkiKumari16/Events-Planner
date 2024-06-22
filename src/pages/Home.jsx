import React, { useRef } from 'react'
import { BodyBox } from '../components/body box/BodyBox'
import { useReactToPrint } from 'react-to-print'

export const Home = () => {
  const generatePDF = useReactToPrint({
    content: ()=> componentPDF.current,
    documentTitle: "Events Planned",
    onAfterPrint: ()=> alert("Events saved in the PDF file")

  })

  const componentPDF = useRef();
  return (
    <>
      <div ref={componentPDF} className='printData' style={{height: "80%"}}>
        <BodyBox />
      </div>
      <button className="pdfButton" onClick={generatePDF}>Download PDF</button>
    </>
  )
}
