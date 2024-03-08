# leetcode-answers

leetcode-answers是一个使用[`leetcode-practice`](https://github.com/wh131462/leetcode-practice)的cli来进行创建题解的项目.

专门用于记录个人的一些算法题解.(同样是一个leetcode-practice的官方使用demo)

## 如何使用leetcode-practice创建你自己的题解库?

### 1. 在全局安装我们的npm包`leetcode-practice`

```shell
# 安装指令 需要加 `-g`/`--global` 参数在全局安装,否则cli无法正常使用
npm i -g leetcode-practice
```

然后,使用指令`lc -V`查看是否正常安装:

```shell
lc -V
```

如果一切正常,你将看到当前的版本号:

```shell
± lc -V
1.0.4
```

### 2.创建一个自己的项目,并在项目的根目录创建题解

以我创建的`leetcode-answers`项目为例:

```shell
# 拉取项目 - 如果有/如果没有内容请按github提示进行第一次提交
git clone git@github.com:wh131462/leetcode-answers.git
# 移动到项目目录中 
cd ./leetcode-answers
# 创建第一个题解 - 示例:获取每日一题
lc 
```

可以看到提示:

```shell
$ lc   
MODE: today
题目[3026.找出美丽数组的最小和]获取成功!
题目文件地址为:/Users/mac-106/wh131462/workspace/leetcode-answers/3026.find-the-minimum-possible-sum-of-a-beautiful-array/question.js
```
然后,到这个目录中的`question.js`上进行你的题解编写即可~

### 3.完成题解,进行检验

在完成今日题解后,就可以使用`lk`指令进行检查了~

> 注意:只是简单示例的检查,具体检查示例在文件最下方可以看到!

```shell
lk
```

检查结果:

```shell
$ lk
MODE: today
题目[3026.找出美丽数组的最小和]检测结果:
┌─────────┬──────────┬──────────┬──────────┬────────────┬───────────┐
│ (index) │ 测试结果 │ 预期结果 │ 执行结果 │  执行用时  │ 内存占用  │
├─────────┼──────────┼──────────┼──────────┼────────────┼───────────┤
│    0    │  '通过'  │   '4'    │   '4'    │ '0.4253ms' │ '3.28 KB' │
│    1    │  '通过'  │   '8'    │   '8'    │ '0.0125ms' │ '2.63 KB' │
│    2    │  '通过'  │   '1'    │   '1'    │ '0.0053ms' │ '2.63 KB' │
└─────────┴──────────┴──────────┴──────────┴────────────┴───────────┘
点击跳转到题目提交:https://leetcode.cn/problems/find-the-minimum-possible-sum-of-a-beautiful-array/
```

### 4.其他帮助

脚手架不仅仅支持每日一题,还支持很多功能,比如指定题目获取,随机一题获取,还有查看热榜等.
具体查看`lc -h`和`lf -h`,检查题解的帮助查看`lk -h`

```shell
lc -h
```

示例:

```shell
± lc -h
Usage: lc [options] [identity]


A powerful practice platform for leetcode.
CLI / Template Project / Plugin, you can create question by any way you like.
See https://github.com/wh131462/leetcode-practice

   __           _                _          ___                _   _          
  / /  ___  ___| |_ ___ ___   __| | ___    / _ \_ __ __ _  ___| |_(_) ___ ___ 
 / /  / _ \/ _ \ __/ __/ _ \ / _` |/ _ \  / /_)/ '__/ _` |/ __| __| |/ __/ _ \
/ /__|  __/  __/ || (_| (_) | (_| |  __/ / ___/| | | (_| | (__| |_| | (_|  __/
\____/\___|\___|\__\___\___/ \__,_|\___| \/    |_|  \__,_|\___|\__|_|\___\___|
                                                                              
☕️ Enjoy your time on coding.

Options:
  -V, --version                output the version number
  -t, --today                  Get a question today.
  -i, --identity <identity>    Specify a question by identity.
  -r, --random                 Get a question randomly.
  -e, --easy                   Use easy mode.
  -d, --directory <directory>  Set the question directory.
  -l, --language [language]    Set/Get the code language of question.
  -u, --update                 Check the version to determine whether to update to the latest one.
  -h, --help                   display help for command

Examples:
  # Command with no parameters
  $ lc          // Get a question for today.
  $ lc 1314     // Get a question by its identity.
  # Exclusive commands
  $ lc -t       // Full text command to get a question for today.
  $ lc -i 1314  // Full text command to get a question by its identity.
  $ lc -r       // Get a question randomly.
  # Other instructions
  $ lc -e       // Easy mode to create a question.
  $ lc -d src   // Use the relative path to the source folder.
  $ lc -u       // Check the version to determine whether to update to the latest one.
  $ lc -l       // Get the code language of question.
  $ lc -l java  // Set the code language of question.
  $ lc -v       // Check the CLI version.
  $ lc -h       // Check the help information.
  
Made with ❤️ by EternalHeart team.

```