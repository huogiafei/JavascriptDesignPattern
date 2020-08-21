前言
====

最近在重构项目代码的过程中，突然想恶补一下设计模式，所以就有了这个项目，
每一章包含一个设计模式，受到了《Head First设计模式》和GoF两本书的启发，
每个设计模式都会有一个intro和question负责介绍模式和展开实现的场景。

### 23种设计模式

#### 创建型

* 抽象工厂（Abstract Factory）
* 工厂方法 (Factory Method)
* 单件 (Singleton)
* 原型 (Prototype)
* 生成器 (Builder)

#### 结构型

* 组合 (Composite)
* 装饰 (Decorator)
* 适配器 (Adapter)
* 外观 (Facade)
* 代理 (Proxy)
* 桥接 (Bridge)
* 享元 (Flyweight)

#### 行为型

* 观察者 (Observer)
* 策略 (Strategy)
* 状态 (State)
* 迭代器 (Iterator)
* 模板方式 (Template Method)
* 访问者 (Visitor)
* 职责链 (Chain Of Responsibility)
* 中介者 (Mediator)
* 备忘录 (Memento)

### 面向对象设计原则

* 封装变化
* 多用组合，少用继承
* 针对接口编程，不针对实现编程
* 松耦合设计
* 对扩展开发，对修改封闭（开发-封闭原则）
* 依赖抽象，不依赖具体类
* 单一职责

### 章节介绍

看完了《Head First设计模式》这本书之后，最受启发的这本书的学习模式，所以从第一章开始，
每章节的intro除了介绍模式的优缺点、场景和类图等信息外，开头都会用一张图和一句经典电影
对白（本人电影爱好者）或者生活例子，去帮助我联想并记住这个设计模式。question是提及到
平时前端遇到的一些常见需求和场景，通过简单的js demo去尽量涵盖平时能用到的一些方法。
