## js 旋转插件

```
/**
 * @description: 元素旋转操作
 * @param { Object } el 元素对象
 * @param { Object } options 参数对象
 * @param { Number } options.currentAngle 初始角度
 * @param { Number } options.targetAngle 目标角度
 * @param { Number } options.duration 持续时间 默认 1s
 * @return: null
 */
function rotate(el, options) {
    let current = options.currentAngle
    let target = options.targetAngle
    let duration = options.duration || 1
    let avg = computeAvg(options.currentAngle, options.targetAngle, duration, 10)
    function run() {
        setTimeout(() => {
            current = current + avg.angle
            if (current - target < 0.001) {
                el.style.transform = `rotate(${target}deg)`
                return false
            } else {
                el.style.transform = `rotate(${current}deg)`
            }
            run()
        }, avg.time)
    }
    run()
}
```
