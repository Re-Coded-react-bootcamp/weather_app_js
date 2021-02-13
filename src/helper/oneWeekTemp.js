
export default function oneWeekTemp(data,index) {
   let temp=[];
  
    data.forEach(element => {
        temp.push(element[index])
    });
    return temp
}
