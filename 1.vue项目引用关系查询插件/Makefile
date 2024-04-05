# 安装 vue-cli-plugin-visualizer 插件
install-visualizer:
    vue add visualizer

# 生成构建分析报告
build-report:
    npm run build

# 打开构建分析报告
open-report:
    open report.html

# 清理构建分析报告文件
clean-report:
    rm -f report.html

# 默认任务：安装插件、生成报告、打开报告
visualize: install-visualizer build-report open-report

# 清理任务：清理构建分析报告文件
clean: clean-report
