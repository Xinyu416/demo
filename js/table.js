let gloableCount = 0;
function addrow() {

    for (var i = 0; i < 10; i++) {
        gloableCount++;
        // debugger;
        var tabledata = document.getElementById('table');
        console.log('新增数据');
        var length = tabledata.rows.length;
        console.log(length);

        //插入行节点
        var newrow = tabledata.insertRow(length);
        console.log(newrow);
        //插入列节点
        var nameclu = newrow.insertCell(0);
        var phoneclu = newrow.insertCell(1);
        var operationclu = newrow.insertCell(2);
        //赋值
        nameclu.innerHTML = '未命名' + gloableCount;
        phoneclu.innerHTML = '未知' + gloableCount;
        operationclu.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
    }
}

function deleteRow(button) {
    console.log('deleteRow');
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

function editRow(button) {
    console.log('editRow');
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var nameValue = prompt();
    name.innerHTML = nameValue == '' ? name.innerHTML : nameValue;
    var phoneValue = prompt();
    phone.innerText = phoneValue == '' ? phone.innerText : phoneValue;

}