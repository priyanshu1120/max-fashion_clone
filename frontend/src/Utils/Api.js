// <============mens api =====================================>

export const  getMenAll = ()=>{
    return fetch(`https://max-fashion-clone-pi.vercel.app/mens`)
  }


export const  getMen = ({pages,name})=>{
    return fetch(`https://max-fashion-clone-pi.vercel.app/mens?_page=${pages}&_limit=12&item_name=${name}`)
  }



  // <============ womens api =====================================>

  export const  getWomen = ({pages,name})=>{
    return fetch(`https://max-fashion-clone-pi.vercel.app/womens?_page=${pages}&_limit=12&item_name=${name}`)
  }


  

  // <============ girls api =====================================>


  export const  getGirlAll = ()=>{
    return fetch(`https://max-fashion-clone-pi.vercel.app/girls`)
  }

  export const  getGirl = ({pages,name})=>{
    return fetch(`https://max-fashion-clone-pi.vercel.app/girls?_page=${pages}&_limit=12&item_name=${name}`)
  }


    // <============ Boys api =====================================>


    export const  getBoysAll = ()=>{
      return fetch(`https://max-fashion-clone-pi.vercel.app/boys`)
    }
  
    export const  getBoy = ({pages,name})=>{
      return fetch(`https://max-fashion-clone-pi.vercel.app/boys?_page=${pages}&_limit=12&item_name=${name}`)
    }

       // <============ Search api =====================================>


       export const  getSearch = ({pages,text})=>{
        return fetch(`https://max-fashion-clone-pi.vercel.app/Product?_page=${pages}&_limit=12&item_name=${text}`)
      }


      export const baseurl = "https://max-fashion-clone-pi.vercel.app"