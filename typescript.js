// follow source  https://github.com/AlloyTeam/eslint-config-alloy/blob/master/typescript.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/sort-comp': 0,
    /**
     * 重载的函数必须写在一起
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': 1,
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @reason 允许灵活运用两者
     */
    '@typescript-eslint/array-type': 0,
    /**
     * 禁止对没有 then 方法的对象使用 await
     */
    '@typescript-eslint/await-thenable': 0,
    /**
     * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
     * @reason 这种注释本身就是对特殊代码的说明
     */
    '@typescript-eslint/ban-ts-comment': 0,
    /**
     * 禁止使用类似 tslint:disable-next-line 这样的注释
     */
    '@typescript-eslint/ban-tslint-comment': 0,
    /**
     * 禁止使用指定的类型
     */
    '@typescript-eslint/ban-types': 0,
    /**
     * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
     */
    '@typescript-eslint/class-literal-property-style': [1, 'fields'],
    /**
     * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
     * @reason <Type> 容易被理解为 jsx
     */
    '@typescript-eslint/consistent-type-assertions': [
      1,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    /**
     * 优先使用 interface 而不是 type
     * @reason interface 可以 implement, extend 和 merge
     */
    '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
    /**
     * 有默认值或可选的参数必须放到最后
     */
    'default-param-last': 0,
    '@typescript-eslint/default-param-last': 0,
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @reason 当需要写一系列属性的时候，可以更统一
     */
    'dot-notation': 0,
    '@typescript-eslint/dot-notation': 0,
    /**
     * 函数返回值必须与声明的类型一致
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/explicit-function-return-type': 0,
    /**
     * MOD+ react lifecycle 需要此配置
     */
    '@typescript-eslint/explicit-member-accessibility': 0,
    /**
     * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
     */
    '@typescript-eslint/explicit-module-boundary-types': 0,
    /**
     * 变量必须在定义的时候赋值
     */
    'init-declarations': 0,
    '@typescript-eslint/init-declarations': 0,
    /**
     * 类的成员之间是否需要空行
     * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
     */
    'lines-between-class-members': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    /**
     * 指定类成员的排序规则
     * @reason 优先级：
     * 1. static > instance
     * 2. field > constructor > method
     * 3. public > protected > private
     */
    '@typescript-eslint/member-ordering': [
      1,
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
    /**
     * 接口中的方法必须用属性的方式定义
     * @reason 配置了 strictFunctionTypes 之后，用属性的方式定义方法可以获得更严格的检查
     */
    '@typescript-eslint/method-signature-style': 1,
    /**
     * 限制各种变量或类型的命名规则
     */
    '@typescript-eslint/naming-convention': 0,
    /**
     * 禁止使用 Array 构造函数
     */
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 0,
    /**
     * 禁止滥用 toString 方法
     */
    '@typescript-eslint/no-base-to-string': 0,
    /**
     * 禁止使用容易混淆的非空断言
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 0,
    /**
     * 禁止重复定义类的成员
     * @reason 编译阶段就会报错了
     */
    'no-dupe-class-members': 0,
    '@typescript-eslint/no-dupe-class-members': 0,
    /**
     * 禁止 delete 时传入的 key 是动态的
     */
    '@typescript-eslint/no-dynamic-delete': 0,
    /**
     * 不允许有空函数
     * @reason 有时需要将一个空函数设置为某个项的默认值
     */
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 0,
    /**
     * 禁止定义空的接口
     */
    '@typescript-eslint/no-empty-interface': 1,
    /**
     * 禁止使用 any
     */
    '@typescript-eslint/no-explicit-any': 0,
    /**
     * 禁止多余的 non-null 断言
     */
    '@typescript-eslint/no-extra-non-null-assertion': 0,
    /**
     * 禁止定义没必要的类，比如只有静态方法的类
     */
    '@typescript-eslint/no-extraneous-class': 0,
    /**
     * 禁止调用 Promise 时没有处理异常情况
     */
    '@typescript-eslint/no-floating-promises': 0,
    /**
     * 禁止对 array 使用 for in 循环
     */
    '@typescript-eslint/no-for-in-array': 0,
    /**
     * 禁止使用 eval
     */
    '@typescript-eslint/no-implied-eval': 0,
    /**
     * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
     * @reason 可以简化代码
     */
    '@typescript-eslint/no-inferrable-types': 1,
    /**
     * 禁止在类之外的地方使用 this
     * @reason 只允许在 class 中使用 this
     */
    'no-invalid-this': 0,
    '@typescript-eslint/no-invalid-this': 1,
    /**
     * 禁止使用无意义的 void 类型
     * @reason void 只能用在函数的返回值中
     */
    '@typescript-eslint/no-invalid-void-type': 1,
    /**
     * 禁止使用超出 js 精度范围的数字
     */
    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': 1,
    /**
     * 禁止使用 magic numbers
     */
    'no-magic-numbers': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    /**
     * 禁止在接口中定义 constructor，或在类中定义 new
     */
    '@typescript-eslint/no-misused-new': 0,
    /**
     * 避免错误的使用 Promise
     */
    '@typescript-eslint/no-misused-promises': 0,
    /**
     * 禁止使用 namespace 来定义命名空间
     * @reason 使用 es6 引入模块，才是更标准的方式。
     * 但是允许使用 declare namespace ... {} 来定义外部命名空间
     */
    '@typescript-eslint/no-namespace': [
      1,
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],
    /**
     * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
     * @reason optional chaining 后面的属性一定是非空的
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
    /**
     * 禁止使用 non-null 断言（感叹号）
     * @reason 使用 non-null 断言时就已经清楚了风险
     */
    '@typescript-eslint/no-non-null-assertion': 0,
    /**
     * 禁止给类的构造函数的参数添加修饰符
     * @reason 强制所有属性都定义到类里面，比较统一
     */
    '@typescript-eslint/no-parameter-properties': 1,
    /**
     * 很多西方需要使用到 require，特别是 node 端
     */
    '@typescript-eslint/no-require-imports': 0,
    /**
     * 禁止将 this 赋值给其他变量，除非是解构赋值
     */
    '@typescript-eslint/no-this-alias': [
      1,
      {
        allowDestructuring: true,
      },
    ],
    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    '@typescript-eslint/no-throw-literal': 0,
    /**
     * 禁止使用类型别名
     */
    '@typescript-eslint/no-type-alias': 0,
    /**
     * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     */
    '@typescript-eslint/no-unnecessary-condition': 0,
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': 0,
    /**
     * 禁止范型的类型有默认值时，将范型设置为该默认值
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    /**
     * 禁止无用的类型断言
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    /**
     * 禁止将变量或属性的类型设置为 any
     */
    '@typescript-eslint/no-unsafe-assignment': 0,
    /**
     * 禁止调用 any 类型的变量上的方法
     */
    '@typescript-eslint/no-unsafe-call': 0,
    /**
     * 禁止获取 any 类型的变量中的属性
     */
    '@typescript-eslint/no-unsafe-member-access': 0,
    /**
     * 禁止函数的返回值的类型是 any
     */
    '@typescript-eslint/no-unsafe-return': 0,
    /**
     * 禁止无用的表达式
     */
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': [
      1,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * 已定义的变量必须使用
     * @reason 编译阶段检查就足够了
     */
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    /**
     * 禁止已定义的变量未使用
     */
    '@typescript-eslint/no-unused-vars-experimental': 0,
    /**
     * 禁止在定义变量之前就使用它
     * @reason 编译阶段检查就足够了
     */
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    /**
     * 禁止出现没必要的 constructor
     */
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 1,
    /**
     * 禁止使用 require 来引入模块
     * @reason no-require-imports 规则已经约束了 require
     */
    '@typescript-eslint/no-var-requires': 0,
    /**
     * 使用 as const 替代 as 'bar'
     * @reason as const 是新语法，不是很常见
     */
    '@typescript-eslint/prefer-as-const': 0,
    /**
     * 枚举值必须初始化
     */
    '@typescript-eslint/prefer-enum-initializers': 0,
    /**
     * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
     * @reason for of 循环更加易读
     */
    '@typescript-eslint/prefer-for-of': 1,
    /**
     * 使用函数类型别名替代包含函数调用声明的接口
     */
    '@typescript-eslint/prefer-function-type': 1,
    /**
     * 使用 includes 而不是 indexOf
     */
    '@typescript-eslint/prefer-includes': 0,
    /**
     * 枚举类型的值必须是字面量，禁止是计算值
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/prefer-literal-enum-member': 0,
    /**
     * 禁止使用 module 来定义命名空间
     * @reason module 已成为 js 的关键字
     */
    '@typescript-eslint/prefer-namespace-keyword': 1,
    /**
     * 使用 ?? 替代 ||
     */
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    /**
     * 使用 optional chaining 替代 &&
     */
    '@typescript-eslint/prefer-optional-chain': 1,
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     */
    '@typescript-eslint/prefer-readonly': 0,
    /**
     * 函数的参数必须设置为 readonly
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    /**
     * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 0,
    /**
     * 使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': 0,
    /**
     * 使用 String#startsWith 而不是其他方式
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 0,
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': 0,
    /**
     * async 函数的返回值必须是 Promise
     */
    '@typescript-eslint/promise-function-async': 0,
    /**
     * 使用 sort 时必须传入比较函数
     */
    '@typescript-eslint/require-array-sort-compare': 0,
    /**
     * async 函数中必须存在 await 语句
     */
    'require-await': 0,
    '@typescript-eslint/require-await': 0,
    /**
     * 使用加号时，两者必须同为数字或同为字符串
     */
    '@typescript-eslint/restrict-plus-operands': 0,
    /**
     * 模版字符串中的变量类型必须是字符串
     */
    '@typescript-eslint/restrict-template-expressions': 0,
    /**
     * 禁止在 return 语句里使用 await
     */
    'no-return-await': 0,
    '@typescript-eslint/return-await': 0,
    /**
     * 条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': 0,
    /**
     * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
     */
    '@typescript-eslint/switch-exhaustiveness-check': 0,
    /**
     * 禁止使用三斜杠导入文件
     * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
     */
    '@typescript-eslint/triple-slash-reference': [
      1,
      {
        path: 'never',
        types: 'always',
        lib: 'always',
      },
    ],
    /**
     * interface 和 type 定义时必须声明成员的类型
     */
    '@typescript-eslint/typedef': [
      1,
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false,
      },
    ],
    /**
     * 方法调用时需要绑定到正确的 this 上
     */
    '@typescript-eslint/unbound-method': 0,
    /**
     * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
     */
    '@typescript-eslint/unified-signatures': 1,
  },
};
