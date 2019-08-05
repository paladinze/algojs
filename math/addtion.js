// 如何实现两金额数据相加(最多小数点 两位)?

const add = (a, b) => {
	var result = parseFloat(a.toString()) + parseFloat(b.toString());
	alert(result.toFixed(2));​
}
