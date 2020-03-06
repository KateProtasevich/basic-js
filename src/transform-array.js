module.exports = function transform(arr) {
  let obj_arr = [];
  let new_arr = [];
  let obj = {};
  let del_count = 0;
  let position;
    if (!(Array.isArray(arr))) {
      throw Error;
    }


    arr.forEach( function(item, i) {
      if (typeof item === "string") {

      obj.str = item;
      obj.position = i;
      obj_arr.push(obj);
      obj = {};
      }
    });

    new_arr = arr;

    obj_arr.forEach(function(init)  {
      if (init.str === '--double-prev') {
        if (init.position - del_count > 0) {
          new_arr[init.position-del_count] = new_arr[init.position-del_count-1];
        } else {
          new_arr.splice(init.position-del_count,1);
          del_count++;
        }

      } else


      if (init.str === '--double-next') {
        if (init.position - del_count < new_arr.length-1) {
        new_arr[init.position-del_count] = new_arr[init.position+1-del_count];
      } else {
        new_arr.splice(init.position-del_count,1);
        del_count++;
      }


      }  else


      if (init.str === '--discard-prev') {
        if (init.position - del_count > 0) {
          new_arr.splice(init.position-del_count-1,1);
          del_count++;
        }
        new_arr.splice(init.position-del_count,1);
        del_count++;
      } else


      if (init.str === '--discard-next') {
        if (init.position - del_count < new_arr.length-1) {
          new_arr.splice(init.position-del_count+1,1);
          del_count++;
        } else {
          new_arr.splice(init.position-del_count+1,1);
          new_arr.splice(init.position-del_count,1);
        }
        new_arr.splice(init.position-del_count+1,1);
        del_count++;
      }



    });

    return new_arr;
};
