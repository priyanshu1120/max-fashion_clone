// <============mens api =====================================>

export const  getMenAll = ()=>{
    return fetch(`https://relieved-outgoing-afterthought.glitch.me/mens`)
  }


export const  getMen = ({pages,name})=>{
    return fetch(`https://relieved-outgoing-afterthought.glitch.me/mens?_page=${pages}&_limit=12&item_name=${name}`)
  }



  // <============ womens api =====================================>

  export const  getWomen = ({pages,name})=>{
    return fetch(`https://relieved-outgoing-afterthought.glitch.me/womens?_page=${pages}&_limit=12&item_name=${name}`)
  }


  

  // <============ girls api =====================================>


  export const  getGirlAll = ()=>{
    return fetch(`https://relieved-outgoing-afterthought.glitch.me/girls`)
  }

  export const  getGirl = ({pages,name})=>{
    return fetch(`https://relieved-outgoing-afterthought.glitch.me/girls?_page=${pages}&_limit=12&item_name=${name}`)
  }


    // <============ Boys api =====================================>


    export const  getBoysAll = ()=>{
      return fetch(`https://relieved-outgoing-afterthought.glitch.me/boys`)
    }
  
    export const  getBoy = ({pages,name})=>{
      return fetch(`https://relieved-outgoing-afterthought.glitch.me/boys?_page=${pages}&_limit=12&item_name=${name}`)
    }

       // <============ Search api =====================================>


       export const  getSearch = ({pages,text})=>{
        return fetch(`https://relieved-outgoing-afterthought.glitch.me/Product?_page=${pages}&_limit=12&item_name=${text}`)
      }