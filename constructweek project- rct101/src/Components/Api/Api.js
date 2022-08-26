// <============mens api =====================================>

export const  getMenAll = ()=>{
    return fetch(`https://fake-eval-app.herokuapp.com/mens`)
  }


export const  getMen = ({pages,name})=>{
    return fetch(`https://fake-eval-app.herokuapp.com/mens?_page=${pages}&_limit=12&item_name=${name}`)
  }



  // <============ womens api =====================================>

  export const  getWomen = ({pages,name})=>{
    return fetch(`https://fake-eval-app.herokuapp.com/womens?_page=${pages}&_limit=12&item_name=${name}`)
  }


  

  // <============ girls api =====================================>


  export const  getGirlAll = ()=>{
    return fetch(`https://fake-eval-app.herokuapp.com/girls`)
  }

  export const  getGirl = ({pages,name})=>{
    return fetch(`https://fake-eval-app.herokuapp.com/girls?_page=${pages}&_limit=12&item_name=${name}`)
  }


    // <============ Boys api =====================================>


    export const  getBoysAll = ()=>{
      return fetch(`https://fake-eval-app.herokuapp.com/boys`)
    }
  
    export const  getBoy = ({pages,name})=>{
      return fetch(`https://fake-eval-app.herokuapp.com/boys?_page=${pages}&_limit=12&item_name=${name}`)
    }

       // <============ Search api =====================================>


       export const  getSearch = ({pages,text})=>{
        return fetch(`https://fake-eval-app.herokuapp.com/Product?_page=${pages}&_limit=12&item_name=${text}`)
      }