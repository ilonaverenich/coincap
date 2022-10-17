 export default function shortenNumRu(num) {

    let bubu = {
      "0": "",
      "1": " тыс.",
      "2": " млн",
      "3": " млрд",
    };
  
    let thousands = Math.floor( (("" + num).length - 1) / 3 );
    
    let coef = 1000 ** thousands;
    
    return ( num / coef ).toFixed(1) + bubu[ thousands ];
  }