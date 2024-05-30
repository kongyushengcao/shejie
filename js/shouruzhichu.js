function shouru() {
    const inputArr = ['shouru1', 'shouru2', 'shouru3', 'shouru4', 'shouru5', 'shouru6', 'shouru7', 'shouru8', 'shouru9'];
    let sum = 0;
    let isEmpty = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const inputVal = document.getElementById(inputArr[i]).value;
        if (inputVal === '') {
            isEmpty = isEmpty + 1;
            if (isEmpty === inputArr.length) {
                document.getElementById('sum8').innerHTML = "输入内容不要为空";
                return;
            }
        }

        if (isNaN(inputVal)) {
            document.getElementById('sum8').innerHTML = "请输入有效数字";
            return;
        }
        sum += Number(inputVal);
    }

    document.getElementById('sum8').innerHTML = sum.toString();
}

function shou() {
    var totalIncome = 0;

    // 计算总收入
    for (var i = 1; i <= 9; i++) {
        var incomeInput = parseFloat(document.getElementById("shouru" + i).value);
        if (!isNaN(incomeInput)) {
            totalIncome += incomeInput;
        }
    }

    // 计算并显示百分比
    for (var j = 1; j <= 9; j++) {
        var incomeInput = parseFloat(document.getElementById("shouru" + j).value);
        var percentageOutput = document.getElementById("shou" + j);

        if (isNaN(incomeInput)) {
            percentageOutput.innerHTML = "暂无";
        } else {
            var percentage = (incomeInput / totalIncome) * 100;
            percentageOutput.innerHTML = "(" + percentage.toFixed(2) + "%)";
        }
    }
}

function zhichu() {
    const outputArr = ['zhichu1', 'zhichu2', 'zhichu3', 'zhichu4', 'zhichu5', 'zhichu6', 'zhichu7', 'zhichu8', 'zhichu9', 'zhichu10',
        'zhichu11', 'zhichu12', 'zhichu13', 'zhichu14', 'zhichu15', 'zhichu16', 'zhichu17'];
    let sum = 0;
    let isEmpty = 0;
    for (let i = 0; i < outputArr.length; i++) {
        const outputVal = document.getElementById(outputArr[i]).value;
        if (outputVal === '') {
            isEmpty = isEmpty + 1;
            if (isEmpty === outputArr.length) {
                document.getElementById('sum9').innerHTML = "输入内容不要为空";
                return;
            }
        }

        if (isNaN(outputVal)) {
            document.getElementById('sum9').innerHTML = "请输入有效数字";
            return;
        }
        sum += Number(outputVal);
    }

    document.getElementById('sum9').innerHTML = sum.toString();
}

function zhi() {
    let totalIncome = 0;
    for (let i = 1; i <= 17; i++) {
        const incomeInput = parseFloat(document.getElementById("zhichu" + i).value);//使用 parseFloat() 方法将其转换为浮点数类型
        if (!isNaN(incomeInput)) {
            totalIncome += incomeInput;
        }
    }
    // 计算并显示百分比
    for (var j = 1; j <= 17; j++) {
        var incomeInput = parseFloat(document.getElementById("zhichu" + j).value);
        var percentageOutput = document.getElementById("zhi" + j);

        if (isNaN(incomeInput)) {
            percentageOutput.innerHTML = "暂无";
        } else {
            var percentage = (incomeInput / totalIncome) * 100;
            percentageOutput.innerHTML = "(" + percentage.toFixed(2) + "%)";
        }
    }
}

function xian() {
    const sum8 = document.getElementById('sum8').innerText;
    const sum9 = document.getElementById('sum9').innerText;

    // 验证输入是否为有效数字
    if (isNaN(sum8) || isNaN(sum9)) {
        document.getElementById('sum10').innerHTML = "输入有效数字";
        return;
    }

    // 检查输入是否为空
    if (sum8 === '' || sum9 === '') {
        document.getElementById('sum10').innerHTML = "输入内容不要为空";
        return;
    }

    // 将输入框的值转换为数字类型并进行累加
    const sum = Number(sum8) - Number(sum9);

    // 将累和结果显示在页面上
    document.getElementById('sum10').innerHTML = sum.toString();
}

function bilv() {
    const sum8 = parseFloat(document.getElementById('sum8').innerText); // 总收入
    const sum9 = parseFloat(document.getElementById('sum9').innerText); // 总支出
    const sum10 = parseFloat(document.getElementById("sum10").innerText); // 现金结余（收入减去支出）
  
    if (isNaN(sum8) || isNaN(sum9) || isNaN(sum10)) { // 判断是否为有效数字和判断空
      document.getElementById('bi1').innerHTML = "请输入有效数字";
      return;
    }
  
    // 检查输入是否为空
    if (sum8 === '' || sum9 === '' || sum10 === '') {
      document.getElementById('bi1').innerHTML = "输入内容不要为空";
      return;
    }
  
    // 计算公式
    const ratio1 = sum10 / sum8; // 结余比率：（月收入-月支出）/ 月收入
    const ratio2 = sum9 / sum10; // 投资与净资产比率：月支出 / 结余
    const ratio3 = sum10 / sum8; // 清偿比率：结余 / 月收入
    const ratio4 = sum9 / sum10; // 负债比率：月支出 / 结余
    const ratio5 = (sum9 + sum10) / sum8; // 财务负担比率：（月支出 + 结余）/ 月收入
    const ratio6 = sum10 / sum9; // 流动性比率：结余 / 月支出
  
    document.getElementById('bi1').innerHTML = ratio1.toFixed(2);
    document.getElementById('bi2').innerHTML = ratio2.toFixed(2);
    document.getElementById('bi3').innerHTML = ratio3.toFixed(2);
    document.getElementById('bi4').innerHTML = ratio4.toFixed(2);
    document.getElementById('bi5').innerHTML = ratio5.toFixed(2);
    document.getElementById('bi6').innerHTML = ratio6.toFixed(2);
  }
  