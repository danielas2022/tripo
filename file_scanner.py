import os
from pathlib import Path

def scan_directory(folder_path):
    try:
        # 检查路径是否存在
        if not os.path.exists(folder_path):
            print(f"错误：路径 '{folder_path}' 不存在")
            return

        print(f"\n开始扫描目录: {folder_path}\n")
        
        # 用于统计文件数量
        file_count = 0
        file_types = {}
        large_files = []
        
        # 遍历文件夹中的文件
        for root, dirs, files in os.walk(folder_path):
            # 跳过 node_modules 和 .git 目录
            if 'node_modules' in dirs:
                dirs.remove('node_modules')
            if '.git' in dirs:
                dirs.remove('.git')
                
            # 打印当前目录
            print(f"\n当前目录: {root}")
            
            # 打印文件列表
            for file in files:
                file_path = os.path.join(root, file)
                file_size = os.path.getsize(file_path) / 1024  # 转换为 KB
                extension = Path(file).suffix.lower()
                
                # 统计文件类型
                if extension not in file_types:
                    file_types[extension] = 0
                file_types[extension] += 1
                
                # 记录大文件（大于 1MB）
                if file_size > 1024:  # 大于 1MB
                    large_files.append((file, file_size))
                
                print(f"- {file} ({file_size:.2f} KB)")
                file_count += 1
        
        # 打印分析报告
        print("\n=== 文件分析报告 ===")
        print(f"\n总文件数: {file_count}")
        
        print("\n文件类型统计:")
        for ext, count in file_types.items():
            print(f"{ext or '无扩展名'}: {count} 个文件")
        
        if large_files:
            print("\n大文件列表 (>1MB):")
            for name, size in large_files:
                print(f"{name}: {size/1024:.2f} MB")

    except Exception as e:
        print(f"发生错误: {str(e)}")

if __name__ == "__main__":
    # 使用当前目录
    target_path = "."  # 扫描当前目录
    # 或者使用完整的项目路径
    # target_path = r"D:\tripo\tripo"  # 使用原始字符串避免路径问题
    scan_directory(target_path)
