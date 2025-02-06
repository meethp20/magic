const insert= document.querySelector('.insert')
window.addEventListener('keydown' , (c)=>{
    insert.innerHTML=`
      <table>
<tr>
<th>key</th>
<th>keycode</th>
<th>code</th>
</tr>
<tr>
<td>${c.key===' ' ? 'spave':c.code}</td>
<td>${c.keyCode}</td>
<td>${c.code}</td>
</tr>
    </table>
        `
})