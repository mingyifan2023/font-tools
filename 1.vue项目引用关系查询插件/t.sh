#!/bin/bash

# 安装 vue-cli-plugin-visualizer 插件
install_visualizer() {
    vue add visualizer
}

# 生成构建分析报告
build_report() {
    npm run build
}

# 打开构建分析报告
open_report() {
    # 根据操作系统选择合适的命令打开文件
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open report.html
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open report.html
    elif [[ "$OSTYPE" == "cygwin" || "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        start report.html
    else
        echo "Unsupported operating system"
    fi
}

# 清理构建分析报告文件
clean_report() {
    rm -f report.html
}

# 默认任务：安装插件、生成报告、打开报告
visualize() {
    install_visualizer
    build_report
  #  open_report
}

# 清理任务：清理构建分析报告文件
clean() {
    clean_report
}

# 根据输入参数执行相应的任务
case "$1" in
    "visualize")
        visualize
        ;;
    "clean")
        clean
        ;;
    *)
        echo "Usage: $0 {visualize|clean}"
        exit 1
        ;;
esac

exit 0
