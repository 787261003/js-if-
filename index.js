const score = prompt('请输入你的分数');
if (score <= 100 && score >= 90) {
    alert('宝贝，你是我的骄傲');
} else if (score >= 80) {
    alert('宝贝，你已经很出色了');
} else if (score >= 70) {
    alert('你要继续加油哦');
} else if (score >= 60) {
    alert('孩子，你很危险');
} else {
    alert('熊孩子，我不想和你说话，我只想用鞭子和你说话');
}