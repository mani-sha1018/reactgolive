// import React, { useState } from 'react'
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// const App = () => {
//   const [num, changeNum] = useState(0);

//   const incrementNum = () => {
//     changeNum(num+1)
//   };
  
//   const decrementNum = () => {
//     if (num-1 < 0){
//       alert(`you can't decrease than 0`)
//     }else{
//       changeNum(num-1)
//     };

//   };

//   return (
//     <>
//     <div className="main_div">
//       <div className="center_div">
//       <h1>{num}</h1>
//       <div className='btn_div'>
//       {/* <button onClick={incrementNum}>Increment</button> */}

//       <button onClick={incrementNum}>
//         <AddIcon/>
//       </button>



//       {/* <button onClick={decrementNum}>Decrement</button> */}

//       <button onClick={decrementNum}>
//         <RemoveIcon/>
//       </button>

//       </div>
//       </div>
//       </div>
//     </>
//   )
// };



// export default App;



//material-UI-Button



import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



const App = () => {
  const [num, changeNum] = useState(0);

  const incrementNum = () => {
    changeNum(num+1)
  };
  
  const decrementNum = () => {
    if (num-1 < 0){
      alert(`you can't decrease than 0`)
    }else{
      changeNum(num-1)
    };

  };

  return (
    <>
    <div className="main_div">
      <div className="center_div">
      <h1>{num}</h1>
      <div className='btn_div'>



      <Tooltip title="Add">

      <Button onClick={incrementNum} className= "btn_green">
        <AddIcon/>
      </Button>
      </Tooltip>


      <Tooltip title="Delete">

      <Button onClick={decrementNum} className= "btn_red">
        <RemoveIcon/>
      </Button>
      </Tooltip>

      </div>
      </div>
      </div>
    </>
  )
};



export default App;