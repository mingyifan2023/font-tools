import os
import subprocess
import webbrowser

# 安装 vue-cli-plugin-visualizer 插件
def install_visualizer():
    subprocess.run(["vue", "add", "visualizer"])

# 生成构建分析报告
def build_report():
    subprocess.run(["npm", "run", "build"])

# 打开构建分析报告
def open_report():
    webbrowser.open("report.html")

# 清理构建分析报告文件
def clean_report():
    os.remove("report.html")

# 默认任务：安装插件、生成报告、打开报告
def visualize():
    install_visualizer()
    build_report()
   # open_report()

# 清理任务：清理构建分析报告文件
def clean():
    clean_report()

# 根据命令行参数执行相应的任务
if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: python script.py {visualize|clean}")
        sys.exit(1)

    command = sys.argv[1]
    if command == "visualize":
        visualize()
    elif command == "clean":
        clean()
    else:
        print("Invalid command")
        sys.exit(1)
