export const sortObjects = (data,key,order) => {
    //デフォは降順(DESC)
    var num_a = -1;
    var num_b = 1;

    if(order === 'asc'){//指定があれば昇順(ASC)
      num_a = 1;
      num_b = -1;
    }

   data = data.sort(function(a, b){
      var x = a[key];
      var y = b[key];
      if (x > y) return num_a;
      if (x < y) return num_b;
      return 0;
    });

   return data; // ソート後の配列を返す
  }