import React from "react";
import Contacts from "./contacts";
import Header from "./Header";
import './Main.css';
import SocialFollow from "./SocialFollow";


function Book(){

  return( 
    <div> 
      <Header/>
    <div className="book">
     <fieldset>
       <div className="table">
         <h1>Book Now !!!</h1>
         <hr />
        <table cellpadding ="2" cellspacing="3">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" maxlength="15" size="10"/>
              </td>
            </tr>
            <tr>
              <td>Surname:</td>
              <td>
                <input type="text" maxlength="15" size="10"/>
              </td>
            </tr>
            <tr>
              <td>Passport Number:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <button>Book</button>
          </tbody>
        </table>
       </div>
     </fieldset>
    </div>
 <Contacts/>
    <SocialFollow/>
    </div>
  )
      
}

export default Book;