import Parent from "./Parent"
import _ from "lodash";
export default class Chile extends Parent{


  childMethod(childMethodArg){
    console.log("childMethodArg :: "+childMethodArg);
    const items = [123,456,789,321,654,987];
    _.each(items,(item) => {
      this.parentMethod(item);
    },this)

  }

}
