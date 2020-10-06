export const filterObjects = (data,filters) => {
   data = data.filter((item, index) => {
      for(let filter of filters){
         if(filter.values?.includes(item[filter.id])){
            return true;
         };   
      }
      return false;
    })
   return data; // ソート後の配列を返す
};