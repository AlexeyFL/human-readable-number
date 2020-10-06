module.exports = function toReadable (num) {

  let arr = String(num).split('');
  
    let obj = {
      0:'zero', 1:'one', 2:'two', 3:'three',4:'four',5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 100:'hundred'
    }
    
    
    if(num <= 20){
      return obj[num]
    }else if(arr.length === 2 && num < 100){
    
        if(arr[1] === '0'){
        console.log(arr[0])
          return obj[num]
        }else {
          return `${ obj[arr[0] *10] } ${obj[arr[1]]}`
        }
    }else if(arr.length === 3){
    
      if(arr[1] === '0' && arr[2] === '0'){
        return `${ obj[arr[0]] } ${ obj[100] }`
      }else if(arr[2] === '0'){
        return `${ obj[arr[0]]} ${obj[100]} ${ obj[arr[1] * 10] }`
      }else if(arr[1] !== '0' && (arr[1] + arr[2]) < 20){
        return `${ obj[arr[0]] } ${ obj[100] } ${ obj[arr[1] + arr[2]] }`
      }else if(arr[1] === '0'){
        return `${ obj[arr[0]] } ${ obj[100] } ${ obj[arr[2]] }`
      }else{
       return `${ obj[arr[0]] } ${ obj[100] } ${ obj[arr[1] * 10] } ${obj[arr[2]]}`
      }

    }
  };
