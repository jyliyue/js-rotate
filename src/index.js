/**
 * @description: 元素旋转操作
 * @param { Object } el 元素对象
 * @param { Object } options 参数对象
 * @param { Boolean } options.isRun 是否转动中 默认 false
 * @param { Number } options.currentAngle 初始角度
 * @param { Number } options.targetAngle 目标角度
 * @param { Number } options.duration 持续时间 默认 1s
 * @return: null
 */
function rotate(el, options) {
    if (options.isRun) {
        setTimeout(() => {
            rotate(el, options)
        })
        return false
    }
    options.isRun = true
    let current = options.currentAngle
    let target = options.targetAngle
    let duration = options.duration || 1
    let avg = computeAvg(options.currentAngle, options.targetAngle, duration, 10)
    function run() {
        setTimeout(() => {
            current = current + avg.angle
            if (current - target < 0.001) {
                el.style.transform = `rotate(${target}deg)`
                options.isRun = false
                return false
            } else {
                el.style.transform = `rotate(${current}deg)`
            }
            run()
        }, avg.time)
    }
    run()
}

/**
 * @description: 计算平均值
 * @param { Number } currentAngle
 * @param { Number } targetAngle
 * @param { Number } duration
 * @param { Number } speed
 * @return { Object }
 */
function computeAvg(currentAngle, targetAngle, duration, speed) {
    let avgAngle = (targetAngle - currentAngle) / speed
    let avgTime = (duration * 1000) / speed
    return {
        angle: avgAngle,
        time: avgTime
    }
}

export default rotate
