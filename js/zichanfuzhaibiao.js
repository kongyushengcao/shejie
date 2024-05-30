function xianjin() {
    // 获取输入框的值
    const xianjin1 = document.getElementById('xianjin1').value;
    const xianjin2 = document.getElementById('xianjin2').value;
    const xianjin3 = document.getElementById('xianjin3').value;
    const xianjin4 = document.getElementById('xianjin4').value;
    const xianjin5 = document.getElementById('xianjin5').value;

    // 验证输入是否为有效数字
    if (isNaN(xianjin1) || isNaN(xianjin2) || isNaN(xianjin3) || isNaN(xianjin4) || isNaN(xianjin5)) {
        document.getElementById('sum1').innerHTML = "输入有效数字";
        return;
    }

    // 检查输入是否为空
    if (xianjin1 === '' && xianjin2 === '' && xianjin3 === '' && xianjin4 === '' && xianjin5 === '') {
        document.getElementById('sum1').innerHTML = "输入内容不要为空";
        return;
    }


    // 将输入框的值转换为数字类型并进行累加
    const sum = Number(xianjin1) + Number(xianjin2) + Number(xianjin3) + Number(xianjin4) + Number(xianjin5);

    // 将累和结果显示在页面上
    document.getElementById('sum1').innerHTML = sum.toString();
}

function qita() {
    const inputArr = ['qita1', 'qita2', 'qita3', 'qita4', 'qita5', 'qita6', 'qita7', 'qita8',
        'qita9', 'qita10', 'qita11', 'qita12'];
    let sum = 0;
    let isEmpty = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const inputVal = document.getElementById(inputArr[i]).value;
        if (inputVal === '') {
            isEmpty=isEmpty+1;
            if (isEmpty === inputArr.length) {
                document.getElementById('sum2').innerHTML = "输入内容不要为空";
                return;
            }
        }
        if (isNaN(inputVal)) {
            document.getElementById('sum2').innerHTML = "请输入有效数字";
            return;
        }
        sum += Number(inputVal);
    }

    document.getElementById('sum2').innerHTML = sum.toString();
}

function jinrong() {
    const sum1 = document.getElementById('sum1').innerText;
    const sum2 = document.getElementById('sum2').innerText;

    // 验证输入是否为有效数字
    if (isNaN(sum1) || isNaN(sum2)) {
        document.getElementById('sum3').innerHTML = "输入有效数字";
        return;
    }

    // 检查输入是否为空
    if (sum1 === '' && sum2 === '') {
        document.getElementById('sum3').innerHTML = "输入内容不要为空";
        return;
    }

    // 将输入框的值转换为数字类型并进行累加
    const sum = Number(sum1) + Number(sum2);

    // 将累和结果显示在页面上
    document.getElementById('sum3').innerHTML = sum.toString();
}

function shiwu() {
    const inputArr = ['shiwu1', 'shiwu2', 'shiwu3', 'shiwu4', 'shiwu5', 'shiwu6'];
    let sum = 0;
    let isEmpty = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const inputVal = document.getElementById(inputArr[i]).value;
        if (inputVal === '') {
            isEmpty=isEmpty+1;
            if (isEmpty === inputArr.length) {
                document.getElementById('sum4').innerHTML = "输入内容不要为空";
                return;
            }
        }

        if (isNaN(inputVal)) {
            document.getElementById('sum4').innerHTML = "请输入有效数字";
            return;
        }
        sum += Number(inputVal);
    }

    document.getElementById('sum4').innerHTML = sum.toString();
}

function zichan() {
    const sum3 = document.getElementById('sum3').innerText;
    const sum4 = document.getElementById('sum4').innerText;

    // 验证输入是否为有效数字
    if (isNaN(sum3) || isNaN(sum4)) {
        document.getElementById('sum5').innerHTML = "输入有效数字";
        return;
    }

    // 检查输入是否为空
    if (sum3 === '' && sum4 === '') {
        document.getElementById('sum5').innerHTML = "输入内容不要为空";
        return;
    }

    // 将输入框的值转换为数字类型并进行累加
    const sum = Number(sum3) + Number(sum4);

    // 将累和结果显示在页面上
    document.getElementById('sum5').innerHTML = sum.toString();
}

function fuzhai() {
    const inputArr = ['fuzhai1', 'fuzhai2', 'fuzhai3', 'fuzhai4', 'fuzhai5', 'fuzhai6'];
    let sum = 0;
    let isEmpty = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const inputVal = document.getElementById(inputArr[i]).value;
        if (inputVal === '') {
            isEmpty=isEmpty+1;
            if (isEmpty === inputArr.length) {
                document.getElementById('sum6').innerHTML = "输入内容不要为空";
                return;
            }
        }

        if (isNaN(inputVal)) {
            document.getElementById('sum6').innerHTML = "请输入有效数字";
            return;
        }
        sum += Number(inputVal);
    }

    document.getElementById('sum6').innerHTML = sum.toString();
}

function jing() {
    const sum5 = document.getElementById('sum5').innerText;
    const sum6 = document.getElementById('sum6').innerText;

    // 验证输入是否为有效数字
    if (isNaN(sum5) || isNaN(sum6)) {
        document.getElementById('sum7').innerHTML = "输入有效数字";
        return;
    }

    // 检查输入是否为空
    if (sum5 === '' && sum6 === '') {
        document.getElementById('sum7').innerHTML = "输入内容不要为空";
        return;
    }

    // 将输入框的值转换为数字类型并进行累加
    const sum = Number(sum5) + Number(sum6);

    // 将累和结果显示在页面上
    document.getElementById('sum7').innerHTML = sum.toString();
}