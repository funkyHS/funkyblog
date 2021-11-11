(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{477:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-数据库简介"}},[t._v("1. 数据库简介")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-种类"}},[t._v("1.1 种类")])]),s("li",[s("a",{attrs:{href:"#_1-2-关系型和非关系型数据库区别"}},[t._v("1.2 关系型和非关系型数据库区别")])])])]),s("li",[s("a",{attrs:{href:"#_2-mongodb简介"}},[t._v("2. MongoDB简介")])]),s("li",[s("a",{attrs:{href:"#_3-mongodb安装"}},[t._v("3. MongoDB安装")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-mac系统安装mongodb"}},[t._v("3.1 Mac系统安装MongoDB")])]),s("li",[s("a",{attrs:{href:"#_3-2-启动与退出"}},[t._v("3.2 启动与退出")])])])]),s("li",[s("a",{attrs:{href:"#_4-mongodb基本操作"}},[t._v("4. MongoDB基本操作")]),s("ul",[s("li",[s("a",{attrs:{href:"#_4-1-查看与选择数据库"}},[t._v("4.1 查看与选择数据库")])]),s("li",[s("a",{attrs:{href:"#_4-2-查看与创建集合"}},[t._v("4.2 查看与创建集合")])]),s("li",[s("a",{attrs:{href:"#_4-3-删除集合与数据库"}},[t._v("4.3 删除集合与数据库")])])])]),s("li",[s("a",{attrs:{href:"#_5-增删修查-curd"}},[t._v("5. 增删修查（CURD）")]),s("ul",[s("li",[s("a",{attrs:{href:"#_5-1-增-c-create"}},[t._v("5.1 增（C-Create）")])]),s("li",[s("a",{attrs:{href:"#_5-2-查-r-read"}},[t._v("5.2 查（R-Read）")])]),s("li",[s("a",{attrs:{href:"#_5-3-改-u-update"}},[t._v("5.3 改（U-Update）")])]),s("li",[s("a",{attrs:{href:"#_5-4-删-d-delete"}},[t._v("5.4 删（D-Delete）")])]),s("li",[s("a",{attrs:{href:"#_5-5-总结"}},[t._v("5.5 总结")])])])]),s("li",[s("a",{attrs:{href:"#_6-数据库实战设计"}},[t._v("6. 数据库实战设计")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-数据库简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库简介"}},[t._v("#")]),t._v(" 1. 数据库简介")]),t._v(" "),s("ul",[s("li",[t._v("数据库就是用来存放数据的仓库")])]),t._v(" "),s("h3",{attrs:{id:"_1-1-种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-种类"}},[t._v("#")]),t._v(" 1.1 种类")]),t._v(" "),s("ul",[s("li",[t._v("关系型：Oracle、MySQL、SQLite 、SQL Server等")]),t._v(" "),s("li",[t._v("非关系型：（Not Only SQL）：MongoDB（文档）、Redis/Memcache（内存）")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-关系型和非关系型数据库区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-关系型和非关系型数据库区别"}},[t._v("#")]),t._v(" 1.2 关系型和非关系型数据库区别")]),t._v(" "),s("ul",[s("li",[t._v("相同点：都是数据库软件，用来存放项目数据")]),t._v(" "),s("li",[t._v("不同点：\n"),s("ul",[s("li",[t._v("关系型：1.遵循SQL标准，语法大同小异、2.有库和表约束等")]),t._v(" "),s("li",[t._v("非关系型：1.没有统一标准、2.一般键值对形式存储、3.读取速度更快")])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_2-mongodb简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongodb简介"}},[t._v("#")]),t._v(" 2. MongoDB简介")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1),t._v("是一个基于分布式文件存储的数据库。由C++编写")]),t._v(" "),s("li",[t._v("支持的数据结构非常松散，是类似json的bson（二进制JSON）格式")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-mongodb安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mongodb安装"}},[t._v("#")]),t._v(" 3. MongoDB安装")]),t._v(" "),s("h3",{attrs:{id:"_3-1-mac系统安装mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mac系统安装mongodb"}},[t._v("#")]),t._v(" 3.1 Mac系统安装MongoDB")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1：进入/usr/local")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2：下载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3：解压")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4：重命名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" mongodb-osx-x86_64-4.0.9/ mongodb\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5：创建数据存放目录与日志存放目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/mongodb/data /usr/local/mongodb/logs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6：启动MongoDB服务(指定目录)")]),t._v("\n/usr/local/mongodb/bin/mongod --dbpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/data --logpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/logs/mongodb.log --logappend --port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" --fork\n")])])]),s("h3",{attrs:{id:"_3-2-启动与退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-启动与退出"}},[t._v("#")]),t._v(" 3.2 启动与退出")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我这里本地设置的数据存放目录是在"),s("code",[t._v("~/data")]),t._v("下")])]),t._v(" "),s("li",[s("p",[t._v("终端我使用的是"),s("code",[t._v("zsh")]),t._v("，所以在"),s("code",[t._v("~/.zshrc")]),t._v("中添加mongo启动路径,并且添加到环境变量中")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Mongo_PATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/mongodb/bin\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Maven_PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n")])])]),s("ul",[s("li",[t._v("指定数据存放路径启动mongodb")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" mongod --dbpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/Users/Funky/data\n")])])]),s("ul",[s("li",[t._v("mongodb启动默认的端口号是：27017")]),t._v(" "),s("li",[t._v("在单独开启一个终端窗口执行："),s("code",[t._v("mongo")]),t._v(",进入数据库操作窗口")]),t._v(" "),s("li",[t._v("退出："),s("code",[t._v("exit")]),t._v(" "),s("br"),s("img",{attrs:{src:"http://funky_hs.gitee.io/imgcloud/funkyblog/database/mongodb/1/1.png",width:"600"}})])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_4-mongodb基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-mongodb基本操作"}},[t._v("#")]),t._v(" 4. MongoDB基本操作")]),t._v(" "),s("ul",[s("li",[t._v("数据库（database）、集合（collection）、数据/文档（document）")])]),t._v(" "),s("h3",{attrs:{id:"_4-1-查看与选择数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-查看与选择数据库"}},[t._v("#")]),t._v(" 4.1 查看与选择数据库")]),t._v(" "),s("ul",[s("li",[t._v("查看数据库："),s("code",[t._v("show databases")])]),t._v(" "),s("li",[t._v("选择数据库 ："),s("code",[t._v("use 数据库名")]),t._v(" "),s("br"),s("img",{attrs:{src:"http://funky_hs.gitee.io/imgcloud/funkyblog/database/mongodb/1/2.png",width:"500"}})])]),t._v(" "),s("h3",{attrs:{id:"_4-2-查看与创建集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查看与创建集合"}},[t._v("#")]),t._v(" 4.2 查看与创建集合")]),t._v(" "),s("ul",[s("li",[t._v("查看集合："),s("code",[t._v("show collections")])]),t._v(" "),s("li",[t._v("创建集合："),s("code",[t._v("db.createCollection('集合名')")]),t._v(" "),s("br"),s("img",{attrs:{src:"http://funky_hs.gitee.io/imgcloud/funkyblog/database/mongodb/1/3.png",width:"500"}})])]),t._v(" "),s("h3",{attrs:{id:"_4-3-删除集合与数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-删除集合与数据库"}},[t._v("#")]),t._v(" 4.3 删除集合与数据库")]),t._v(" "),s("ul",[s("li",[t._v("删除集合："),s("code",[t._v("db.集合名.drop()")])]),t._v(" "),s("li",[t._v("删除数据库：通过use语法选中数据库，然后通过"),s("code",[t._v("db.dropDatabase()")]),t._v("删除数据库")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_5-增删修查-curd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-增删修查-curd"}},[t._v("#")]),t._v(" 5. 增删修查（CURD）")]),t._v(" "),s("h3",{attrs:{id:"_5-1-增-c-create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-增-c-create"}},[t._v("#")]),t._v(" 5.1 增（C-Create）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("db.集合名.insert(JSON数据)")]),t._v("，集合存在-则直接插入数据，集合不存在-隐式创建")]),t._v(" "),s("li",[t._v("数据库和集合不存在都隐式创建")]),t._v(" "),s("li",[t._v("对象的键统一不加引号，方便看，但是查看集合数据时系统会自动加")]),t._v(" "),s("li",[t._v("mongodb会给每条数据增加一个全球唯一的_id键")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("use test2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插入一条数据")]),t._v("\ndb.c1.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky"')]),t._v(", age:18 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看数据")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一次性插入多条")]),t._v("\ndb.c1.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky1"')]),t._v(", age:18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),t._v(", age:19"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速插入10条数据  mongodb底层使用的是js引擎实现的，所以支持部分js语法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for循环是一条一条插入，前9条的插入提示看不到，最后一条提示可以看到")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    db.c2.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v("+i, age: i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("br"),s("img",{attrs:{src:"http://funky_hs.gitee.io/imgcloud/funkyblog/database/mongodb/1/4.png",width:"500"}})]),t._v(" "),s("h3",{attrs:{id:"_5-2-查-r-read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-查-r-read"}},[t._v("#")]),t._v(" 5.2 查（R-Read）")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("db.集合名.find(条件 [,查询的列])")]),t._v("，"),s("code",[t._v("[]")]),t._v("表示可写可不写")])]),t._v(" "),s("li",[s("p",[t._v("条件：")]),t._v(" "),s("ul",[s("li",[t._v("查询所有数据： {}或者不写")]),t._v(" "),s("li",[t._v("查询age=6的数据： "),s("code",[t._v("{age:6}")])]),t._v(" "),s("li",[t._v("既要age=6又要性别=男： "),s("code",[t._v("{age:6,sex:'男'}")])])])]),t._v(" "),s("li",[s("p",[t._v("查询的列（可选参数)：")]),t._v(" "),s("ul",[s("li",[t._v("不写: 查询全部列（字段）")]),t._v(" "),s("li",[s("code",[t._v("{age:1}")]),t._v("  只显示age列（字段）")]),t._v(" "),s("li",[s("code",[t._v("{age:0}")]),t._v("  除了age列（字段都显示）")]),t._v(" "),s("li",[t._v("留心：不管你怎么写系统自定义的_id都会在")])])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级语法")]),t._v("\ndb.集合名.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("键:值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n\ndb.集合名.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    键:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("运算符:值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询所有数据")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询所有数据，只显示uname字段")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询所有数据，除了uname字段，其他都显示")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询年龄 等于|大于｜小于18 的数据")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gt")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询年龄是18岁、19岁的数据")]),t._v("\ndb.c1.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$in")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18,19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$gt")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("大于")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$gte")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("大于等于")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$lt")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小于")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$lte")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("小于等于")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$ne")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不等于")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$in")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("in")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$nin")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("not in")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-3-改-u-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-改-u-update"}},[t._v("#")]),t._v(" 5.3 改（U-Update）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("db.集合名.update(条件， 新数据 [,是否新增，是否修改多条])")]),t._v(" "),s("ul",[s("li",[t._v("是否新增：指匹配不到数据则插入（true-是插入，false-否不插入默认）")]),t._v(" "),s("li",[t._v("是否修改多条：将匹配成功的数据都修改（true-是，false-否默认）")])])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将uname:funky，改为uname:funky3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认不是修改，是替换，会删掉原先其他字段的值")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用修改器，将uname:funky，改为uname:funky3，而不更改其他字段的值（默认只修改一条）")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# true 表示如果没有找到funky100，那么插入")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky100"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改满足条件的一条｜多条数据")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", false, "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", false, "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将uname:funky2的age增加｜减少 2岁")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:-2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将uname:funky2的列名uname修改为name")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rename")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除name:funky2的age列名")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$unset")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age: true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一次性写多个修改器")]),t._v("\ndb.c1.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uname:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"funky222"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$inc")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age:2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("修改器")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$inc")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("递增")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$rename")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("重命名列")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$set")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("修改列值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("$unset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("删除列")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-4-删-d-delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-删-d-delete"}},[t._v("#")]),t._v(" 5.4 删（D-Delete）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("db.集合名.remove(条件 [, 是否删除一条] )")]),t._v(" "),s("ul",[s("li",[t._v("是否删除一条 true是,false否 默认")])])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只删除一条")]),t._v("\ndb.c1.remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除多条 默认false")]),t._v("\ndb.c1.remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-5-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-总结"}},[t._v("#")]),t._v(" 5.5 总结")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增Create")]),t._v("\ndb.集合名.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JSON数据"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删Delete")]),t._v("\ndb.集合名.remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",是否删除一条true是 false否默认"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也就是默认删除多条")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改Update")]),t._v("\ndb.集合名.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件， 新数据  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",是否新增,是否修改多条"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n升级语法 db.集合名.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件，"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("修改器："),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("键：值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查Read")]),t._v("\ndb.集合名.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("条件 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",查询的列"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_6-数据库实战设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-数据库实战设计"}},[t._v("#")]),t._v(" 6. 数据库实战设计")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建school数据库，并且插入stu集合数据")]),t._v("\nuse school\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" num++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    db.stu.insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id: num,\n        no: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QF"')]),t._v("+num,\n        uname: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"神龙教"')]),t._v("+num,\n        tel: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11111111111"')]),t._v(",\n        sex:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),t._v(",\n        age: num,\n        school: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"研究生"')]),t._v(",\n        remark: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"土豪"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pretty 可以格式化打印数据")]),t._v("\ndb.stu.find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".pretty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV185411s7Ry",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyBatis从入门到精通"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);