  
  import axios from "axios"

  export const  getWomen = ({pages,name})=>{

    // return  axios.get(`https://fake-eval-app.herokuapp.com/womens?item_name=${name}`,{
    //   params:{
    //     _page: params.page,
    //     _limit: params.limit,
    //     _item_name:params.name
    //   }   
    // })

    return fetch(`https://fake-eval-app.herokuapp.com/womens?page=${pages}&_limit=24&item_name=${name}`)
  }

//   https://fake-eval-app.herokuapp.com/womens?item_name=Tops

// export const  getTops = (params={})=>{

//     return  axios.get(" https://fake-eval-app.herokuapp.com/womens?item_name=Tops"
     
//     )
//   }
