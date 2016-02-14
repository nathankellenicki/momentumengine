class Utils {


    static mergeIntoArray (dest, source) {

        source.forEach((item) => {
           if (dest.indexOf(item) < 0) {
               dest.push(item);
           }
        });

        return dest;

    }


}


export default Utils;