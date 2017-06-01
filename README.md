
前端纳米学位街机游戏克隆项目
===============================

# 项目介绍

## 简介
这个项目主要锻炼学生如何定义类的变量和方法，以及如何对类进行实例化，另外对canvas的方法会有一个很大提高。

## 如何实现
- 首先，重要的是**自习阅读**js文件夹下面的三个文件：app.js, engine.js, resource.js,我们几乎可以不用动engine.js和resources.js，集中精力完成app.js的补充和修改。
- 其次在app.js文件里面，我们主要完成Enemy和Player两个类的实现，要考虑需要哪些实例变量和方法。文件里面原有文字已经提醒的非常明显，主要是Player的方法，比如：update()，render()，和handleInput(). 针对checkCollisions()方法是可选项，可以是player的一个方法，也可以是Enemy的方法，也可以是一个全局方法。我是通过Player类来实现的。
- 第三很重要，就是如何进行类的实例，虽然engine.js导入了全局变量，实际上在app.js我们实现Enemy和Player的实例化，而且他们都是全局变量。只有实例化okay后，才能出现小虫虫和玩家图像。
- 在Enemy和Player的update()方法里面定义如何控制x坐标和y坐标，比如如果超界，怎么处理？
- 我单独加了一个score的属性，记录分数，其实也可以加上一些宝石，以及级别来丰富这个游戏。

## 已知bug

## FAQ

## License
此项目是Udacity的一个学生项目，因此版权应该是Udacity所属。如果有人要进行商业运营或者二次开发，请和Udacity直接联系。

谢谢，
大山杨 Wolfgao
