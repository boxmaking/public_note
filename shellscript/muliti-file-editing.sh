#! /bin/bash

#法一：直接操作（推荐）
#bash
#复制

#find . -maxdepth 2 -name "*.org" -exec sed -i \
#-e '/#+HTML_HEAD: <script async src="https:\/\/busuanzi.ibruce.info\/busuanzi\/2.3\/busuanzi.pure.mini.js"><\/script>/d' \
#-e '/#+HTML_HEAD: <span id="busuanzi_container_page_pv">本文阅读量<span id="busuanzi_value_page_pv"><\/span>次<\/span>/d' {} \;

#分步解释
# 
#    定位文件
#    find . -maxdepth 2 -name "*.org"
# 
#        -maxdepth 2：搜索当前目录及其直接子目录（二级文件夹）。
# 
#        -name "*.org"：匹配所有 .org 文件。
# 
#    删除指定行
#    sed -i -e '/pattern/d'
# 
#        -i：直接修改文件（无备份）。
# 
#        -e：指定多个匹配模式。
# 
#        模式中的 / 需用 \/ 转义，" 直接保留。
# 
#    匹配内容
# 
#        第一行匹配：
#        '/#+HTML_HEAD: <script async src="https:\/\/busuanzi.ibruce.info\/busuanzi\/2.3\/busuanzi.pure.mini.js"><\/script>/d'
# 
#        第二行匹配：
#        '/#+HTML_HEAD: <span id="busuanzi_container_page_pv">本文阅读量<span id="busuanzi_value_page_pv"><\/span>次<\/span>/d'
# 
#方法二：安全操作（备份原文件）
#bash
#复制
# 
#find . -maxdepth 2 -name "*.org" -exec sed -i.bak \
#-e '/#+HTML_HEAD: <script async src="https:\/\/busuanzi.ibruce.info\/busuanzi\/2.3\/busuanzi.pure.mini.js"><\/script>/d' \
#-e '/#+HTML_HEAD: <span id="busuanzi_container_page_pv">本文阅读量<span id="busuanzi_value_page_pv"><\/span>次<\/span>/d' {} \;

#    -i.bak：修改文件时生成 .bak 备份文件（如 file.org.bak）。
# 
#验证操作
# 
#    检查删除结果
#    bash
#    复制
# 
#    find . -maxdepth 2 -name "*.org" -exec grep -Hn "busuanzi" {} \;
# 
#        若无输出，说明目标代码已删除。
# 
#    恢复误删（如有需要）
#    bash
#    复制
# 
#    find . -name "*.bak" -exec sh -c 'mv "$1" "${1%.bak}"' _ {} \;
# 
#注意事项
# 
#    路径深度调整
# 
#        若文件在更深层级，修改 -maxdepth 值（例如 -maxdepth 3 覆盖三级目录）。
# 
#    特殊字符处理
# 
#        若代码行中有其他特殊符号（如 $），需在 sed 中用 \ 转义。
# 
#    测试先行
# 
#        首次执行时去掉 -i 参数，仅输出修改内容不保存：
#        bash
#        复制

#        find . -maxdepth 2 -name "*.org" -exec sed \
#        -e '/#+HTML_HEAD: <script async src="https:\/\/busuanzi.ibruce.info\/busuanzi\/2.3\/busuanzi.pure.mini.js"><\/script>/d' \
#        -e '/#+HTML_HEAD: <span id="busuanzi_container_page_pv">本文阅读量<span id="busuanzi_value_page_pv"><\/span>次<\/span>/d' {} \;

#通过上述命令，所有目标文件中的指定代码行会被精确删除。
