## debouncing-throttling

    https://css-tricks.com/debouncing-throttling-explained-examples/

    防抖和节流是两种相似却不同的技术,用于控制某个函数随时间执行多少次数

    问题是出现在2011年，Twitter网站上弹出一个问题：当您向下滚动Twitter feed时，它变得缓慢且无响应。John Resig发表了一篇关于该问题的博客文章，其中解释了直接将昂贵的功能附加到scroll事件上的想法是多么糟糕。

    John（五年前，当时）提出的建议解决方案是在之外每250毫秒运行一次循环onScroll event。这样，处理程序就不会与事件耦合。通过这种简单的技术，我们可以避免破坏用户体验
    
#### 防抖

    https://github.com/lodash/lodash/blob/master/debounce.js
    debouncing 大多用在页面滚动，搜索栏请求，窗口大小等

#### 节流

    https://github.com/lodash/lodash/blob/master/throttle.js
    节流与防抖的主要区别在于，节流阀至少每隔X毫秒就保证有规律地执行该功能

#### requestAnimationFrame

    可以认为它是一个_.throttle(dosomething, 16)。但是保真度更高，因为它是旨在提高准确性的[浏览器API]。