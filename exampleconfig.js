
const func =()=>{
	let records ={ record02:"success entry",record01:["env: production00_1","simpletext"]}
   return records.record01[0];
}

console.log(func());
console.log(func());
