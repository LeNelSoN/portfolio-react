import React from 'react'

const BtnCv = () => {

    const handleClickForPdf = () => {
        window.open("/Nelis_Valentin.pdf");
      };

  return (
        <button onClick={handleClickForPdf} className="btn btn-dark mt-5">Mon CV Ici!</button>
        )
}

export default BtnCv