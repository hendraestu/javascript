printPlugin=(num)=>{
    for(i=1; i<=num; i++){
      if(i%2==0 && i%5==0){
        console.log('PLUGIN')
      }else if(i%5==0){
        console.log('in')
      }else if(i%2==0){
        console.log('plug')
      }else{
        console.log(i)
      }
    }
  }
  printPlugin(10)