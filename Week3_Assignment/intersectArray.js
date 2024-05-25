
let firstArray = [1,2,3,4,5,6,7];
let secArray =[1,2,3,1,5,1,7];
// [3,4,5,6,7,1,2,8,9,1,3]

function arrayInterSect(arr1,arr2)
{
  arr1 =[...arr1,...arr2]
  console.log(arr1)
  //return arr1;
  l1 =arr1.length;
  l2 = arr2.length;
  console.log("Length of arr1 " +l1);
  console.log("Length of arr2 " +l2);
  for (let i=0; i<l1;i++)
    {
        for(let j=i+1;j<l1;j++)
            {
               if (arr1[i] === arr1[j])
                  arr1.splice(j,1);

            }
           // console.log(arr1);
    }
 
    return arr1;

}

console.log('Combined array ' + arrayInterSect(firstArray,secArray));