chekGrade=(nilai)=>{
    if(nilai <=100 && nilai>=79){
      console.log('A')
    }else if(nilai<=78 && nilai>=65){
      console.log('B')
    }else if(nilai<=64 && nilai>=50){
      console.log('C')
    }else if(nilai<=49){
      console.log('D')
    }else {
      console.log('Anda terlalu cerdas!')
    }
  }
  chekGrade(80)
  chekGrade(70)
  chekGrade(60)
  chekGrade(40)
  chekGrade(111)