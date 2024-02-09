function calculateBudget(obj,searchWord){
   const lowerCase = searchWord.toLowerCase();
   let count = 0;
   const len = obj.length;

   for(let repeat=0; repeat<len; repeat++){
    if(obj[repeat]["name"].toLowerCase().includes(lowerCase)){
        count += obj[repeat].price;
    }
   }

   return count;
}

console.log(calculateBudget([
    {name:'xiaomi late night',price:30000},
    {name:'xiaomi one night',price:40000},
    {name:'macBook',price:100000},
    {name:'computer',price:50000},
    {name:'smartTv',price:60000},
    {name:'macBook',price:30000},
    {name:'xiaomi new',price:50000}
],'macBook'))