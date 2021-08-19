function move(obj, attr, target, speed, callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);
    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    //开启一个定时器
    obj.timer = setInterval(function () {
        //原来的left值
        var oldValue = parseInt(getStyle(obj, attr));
        //原来的值加上新增加的
        var newValue = oldValue + speed;

        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        //当元素于东到达0px时,使其定制执行动画
        if (newValue === target) {
            //达到目标,关闭定时器
            clearInterval(obj.timer);
            //动画执行完毕,调用回调函数
            callback && callback();
        }
    }, 30);
}

function getStyle(obj, name) {
    if (getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}