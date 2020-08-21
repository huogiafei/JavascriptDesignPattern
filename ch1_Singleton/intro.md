Singleton单例模式
====

![cover](./ch1_cover.jpg)

### 定义    
确保一个类只有一个实例，并提供一个全局访问点

### 解决的问题
当出现一个全局使用的类或者实例频繁的创建或者销毁时，就需要控制实例的数目以减少系统资源的浪费

### 场景

* 全局缓存
* 线程池
* 浏览器或者应用中的唯一对象

### 优点

* 由于仅创建了一个实例，减少了内存开销
* 避免对资源的多重占用

### 缺点

* 不能继承
* 内部若包含实例生成，则与单一职责原则冲突（模式设计中的妥协）

### 提示

* 需要注意线程安全
* Javascript不能通过new直接创建对象

### 类图

| **Singleton** | 
| :-----|
| uniqueInstance 唯一实例| 
| getInstance 获取/生成实例| 

### 文章参考
> https://wiki.jikexueyuan.com/project/javascript-design-patterns/singleton-pattern.html
> https://zhuanlan.zhihu.com/p/34754447



    


 

