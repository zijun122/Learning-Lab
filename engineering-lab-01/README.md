# 工程实验 01：JSON 状态页

## 这次到底做什么

你不需要从零写网页。起始项目已经能够读取 JSON 并显示字段。
你只需要证明自己能完成：运行 → 修改数据 → 验证正常与失败 → 查看差异 → Git 提交。

## 文件说明

- index.html：已经完成的页面，不修改。
- app.js：已经完成的读取和错误处理，不修改。
- api-observation.json：本次唯一必须修改的文件。
- api-observation.missing-field.json：缺字段测试样本，不修改。
- plan.md：开始前填写。
- verification.md：测试时填写。

## 第 1 步：打开正确目录

先在Codex中打开整个 /Users/fight/PycharmProjects/Learning-Lab 文件夹。打开项目终端，执行：

    pwd
    ls
    cd engineering-lab-01
    pwd
    ls

正常结果：第一次pwd以AI-90天学习结尾；第一次ls能看到engineering-lab-01；进入后ls至少能看到README.md、index.html、app.js和两个JSON文件。

如果Codex提示 potentially untrusted project，不要继续重复Git命令。这表示你打开的是Downloads或单个子文件夹；重新在Codex中打开整个 /Users/fight/Documents/AI-90天学习 后再做。

## 第 2 步：启动页面

执行：

    python3 -m http.server 8000

浏览器打开：

    http://localhost:8000

正常结果：页面显示“数据读取成功”，并列出 request_url、method、status、content_type 和 purpose。

如果 8000 被占用，按 Ctrl+C 停止，再执行：

    python3 -m http.server 8001

然后打开 http://localhost:8001。

## 第 3 步：建立第一次提交

保持网页服务所在终端不动，另开一个项目终端，回到课程总目录再提交：

    cd /Users/fight/PycharmProjects/Learning-Lab
    git status
    git add engineering-lab-01
    git commit -m "chore(lab): add engineering lab starter"

## 第 4 步：只修改 JSON

打开 api-observation.json：

1. 把 purpose 中的 TODO 改成你自己的说明。
2. 新增一个字段："checked_by": "你的名字或代号"。
3. 保存后刷新“正常数据”页面。

正常结果：页面自动多显示 checked_by，而且 purpose 不再含 TODO。

## 第 5 步：做三种固定测试

使用页面顶部三个按钮：

1. 正常数据：显示绿色“数据读取成功”。（读取文件：api-observation.json）
2. 缺少字段：显示红色“字段缺失：status”。（读取文件：api-observation.missing-field.json）
3. 文件不存在：显示红色“读取失败：HTTP 404”。（读取文件：does-not-exist.json）

把实际看到的结果填写到 verification.md。不要只写“通过”。

## 第 6 步：检查变化并第二次提交

仍在 Learning-Lab 总目录执行：

    cd /Users/fight/PycharmProjects/Learning-Lab
    git diff
    git status
    git add engineering-lab-01/api-observation.json engineering-lab-01/plan.md engineering-lab-01/verification.md
    git commit -m "test(lab): verify json success and failure paths"
    git log --oneline -2

## 完成标准

- 页面能运行并显示你修改后的 JSON。
- 三种测试均有实际结果或截图。
- plan.md 和 verification.md 已填写。
- 至少有上面两次语义明确的提交。
- 能用自己的话解释：为什么不能双击 index.html 完成这次测试。