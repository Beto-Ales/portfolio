import React from 'react'

import { Typewriter } from 'react-simple-typewriter'
import picture from '../asserts/portrait.jpeg'

const Header = () => {

  

  return (
    <div className='header'>
      {/* scripts background image */}
        <div className="picture-background">

          <p className='scripts'>

            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[`'body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}body{display:grid;justify-content:center;justify-items:center;grid-template-columns:1fr}header,main,footer{text-align:center;width:90%}h3{margin-top:0}p{margin-bottom:0}ul{width:inherit;margin:auto;padding:0;list-style-type:none}.picture-background{background-image:linear-gradient(to right,#2c312d,#060806);display:grid;grid-template-areas:"a"}.picture-background p{color:ivory;margin-top:0;padding:1em;grid-area:a}img{clip-path:circle(50%);max-width:50%;grid-area:a;margin:aut}header{background-color:#e2e2e2}.header-text,.personal-profile,.education,.skills,.experience,.footer{padding:5em 0}.personal-profile{background-color:#247ba0}.education{background-color:#426D7F}.skills{background-color:#51666f}.experience{background-color:#596367}.footer{background-color:#605f5e}'`]}
            />

          </p>

          <img src={picture} alt="PROFILE PICTURE" />
          
        </div>
        
        <div className="header-text">
            {/* full name */}
            <h1>ALBERTO GERMAN ALESANDRONI</h1>
            
            {/* work title */}
            <h2>JUNIOR FRONTEND WEB DEVELOPER</h2>
            {/* <h2>FULL STACK WEB DEVELOPER</h2> */}

        </div>
    </div>
  )
}

export default Header