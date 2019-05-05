function process_string(in_str) {
    // Write your code here
    let str_arr=in_str.split(''),
    arr=[],counter=1;

    for(let char of str_arr){
        if(arr[arr.length-1]===char){
            counter++
        }else{
            if(counter>=3){
                arr.splice(arr.length-counter,counter)
            }
            counter=1
        }
        arr.push(char)
        console.log(arr)
    }
    return arr.join('');
}

str='dcaabbbaaccd'
process_string(str)

