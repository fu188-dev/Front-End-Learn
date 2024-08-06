// 文档地址：https://nodejs.p2hp.com/learn/nodejs-with-typescript/
// Typescript 文档：https://www.typescriptlang.org/
// npx 文档：https://www.npmjs.com/package/npx



// 看一下下面的例子
type User = {
    name: string;
    age: number;
  };
  
  function isAdult(user: User): boolean {
    return user.age >= 18;
  }
  
  const justine: User = {
    name: 'Justine',
    age: 23,
  };
  
  const isJustineAnAdult: boolean = isAdult(justine);

  

// 要如何运行 Typescript 呢：
// 1.安装 typescript：npm i -D typescript
// 2.让后将上面的代码保存为 example.ts 文件
// 3.执行 npx tsc example.ts


// Typescript 在 Node.js 中的应用：

// NestJS（https://nestjs.com/）：健壮且功能齐全的框架，使创建可扩展且架构良好的系统变得简单愉快
// TypeORM（https://typeorm.io/#/）：受Hibernate、Doctrine或Entity Framework等其他语言的其他知名工具影响的伟大ORM
// Prisma（https://prisma.io/）：下一代ORM，具有声明性数据模型、生成的迁移和完全类型安全的数据库查询
// RxJS（https://rxjs.dev/）：广泛使用的响应式编程库
// AdonisJS（https://adonisjs.com/）：一个功能齐全的基于Node.js的web框架
// FoalTs（https://foalts.org/）：优雅的Nodejs框架
  