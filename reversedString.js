let args = process.argv;
let argsSliced = args.slice(2);
for (let i = 0; i < argsSliced.length; i++)
{
  let tempArray = argsSliced[i].split();
  let reversedArray = [];
  for (let j = tempArray.length - 1; j => 0 ; j--)
  {
    reversedArray.push(tempArray[j]);
  }
  let reversedString = reversedArray.toString();
  console.log(reversedString);
}