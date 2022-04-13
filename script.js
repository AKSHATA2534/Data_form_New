fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>{
//console.log(data); json formated
return data.json();   //converted to objects
}).then((objectData)=>{
console.log(objectData[0].title);
let tableData="";
objectData.map((values)=>{
    tableData+= `<tr>
    <td>${values.albumId}</td>
      <td>${values.id}</td>
      <td>${values.title}</td>
      <td>${values.url}</td>
      <td>${values.thumbnailUrl}</td>
    </tr>
    <tr>`;
});
document.getElementById("table_body").innerHTML=tableData;
});
