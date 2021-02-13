 const format =(number,decimal=2)=>{
    return(Math.round(number * 100) / 100).toFixed(decimal)
}

export default format

