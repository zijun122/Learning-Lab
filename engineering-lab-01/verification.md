# 工程实验 01 · 验证记录

## 运行环境

- 当前目录（pwd结果）：/Users/fight/PycharmProjects/Learning-Lab/engineering-lab-01
- 启动命令：python3 -m http.server 8000
- 浏览器地址：http://localhost:8000/
- 使用端口：8000

## 三条固定路径

| 测试 | 操作 | 预期结果 | 实际结果 | 证据位置  | 是否通过 |
|---|---|---|------|-------|------|
| 正常数据 | 点击“正常数据” | 绿色成功提示并显示全部字段 | 数据读取成功
读取文件：api-observation.json| 截图已上传 | 是    |
| 缺少字段 | 点击“缺少字段” | 红色提示字段缺失：status | 读取失败：字段缺失：status
读取文件：api-observation.missing-field.json| 截图已上传 | 是    |
| 文件不存在 | 点击“文件不存在” | 红色提示HTTP 404 | 读取失败：HTTP 404，找不到 does-not-exist.json
读取文件：does-not-exist.json | 截图已上传 | 是    |

## Git证据

- 第一次 commit ID：95fd1e2
- 第二次 commit ID：189a190
- git log --oneline -2 输出：189a190 (HEAD -> main, origin/main, origin/HEAD) docs(lab): record git verification evidence
diff --git a/engineering-lab-01/README.md b/engineering-lab-01/README.md
index 0c2099a..9ee6e7c 100644
--- a/engineering-lab-01/README.md
+++ b/engineering-lab-01/README.md
@@ -69,9 +69,9 @@
 
 使用页面顶部三个按钮：
 
-1. 正常数据：显示绿色“数据读取成功”。
-2. 缺少字段：显示红色“字段缺失：status”。
-3. 文件不存在：显示红色“读取失败：HTTP 404”。
+1. 正常数据：显示绿色“数据读取成功”。（读取文件：api-observation.json）
+2. 缺少字段：显示红色“字段缺失：status”。（读取文件：api-observation.missing-field.json）
+3. 文件不存在：显示红色“读取失败：HTTP 404”。（读取文件：does-not-exist.json）
 
 把实际看到的结果填写到 verification.md。不要只写“通过”。
 
diff --git a/engineering-lab-01/api-observation.json b/engineering-lab-01/api-observation.json
index 44010d0..6ad7110 100644
--- a/engineering-lab-01/api-observation.json
+++ b/engineering-lab-01/api-observation.json
@@ -3,5 +3,7 @@
   "method": "GET",
   "status": 200,
   "content_type": "application/json",
-  "purpose": "TODO：改成你自己的说明"
+  "purpose": "TODO：创翻全世界",
+  "checked_by": "无敌小霸王"
+
 }
\ No newline at end of file
diff --git a/engineering-lab-01/plan.md b/engineering-lab-01/plan.md
index 4ff3dbe..ea9982b 100644
--- a/engineering-lab-01/plan.md
+++ b/engineering-lab-01/plan.md
@@ -2,7 +2,7 @@
 
 ## 目标
 
-用一句话写：完成后，别人能观察到什么变化？
+用一句话写：完成后，别人能观察到什么变化？提交了新的内容，就是最直接的变化
 
 ## 本次允许修改
 


## 复盘

1. 我独立完成了什么：按要求完成了全部的流程
2. 我卡在哪里，如何定位：搞不清作业的需求，只好再次求助codex
3. 为什么这次必须用本地服务器，不能只双击HTML：地址栏用的是file:// ，file:// 是“从硬盘直接读”，浏览器出于安全考虑施加了严格的沙箱限制；[http://localhost](http://localhost) 是“从网络读”，其实就是读取的途径不一样，形象点说就是，换了一种访问形式，浏览器认为这是一个正常的 Web 环境，允许常规的请求和模块加载。
因为 HTTP 状态码是服务器与客户端之间标准化的通信机制，只有服务器才能告诉你请求的资源到底存不存在。
4. 如果真实API返回字段变化，页面可能怎样失败：标点符号搞错可能导致失败
5. 下一次我会怎样更快确认问题：早点问ai，这样更快