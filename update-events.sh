#!/bin/bash
# update-events.sh
# 每日赛事数据更新脚本
# 功能：搜索最新赛事 → 更新 events-data.js → 推送到 GitHub
# 用法：GITHUB_TOKEN=xxx bash update-events.sh
# 注意：GITHUB_TOKEN 必须通过环境变量传入，不要硬编码

set -e

REPO_DIR="/workspace/gd-events"
DATA_FILE="$REPO_DIR/data/events-data.js"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ 请设置 GITHUB_TOKEN 环境变量"
    echo "用法：GITHUB_TOKEN=xxx bash update-events.sh"
    exit 1
fi

echo "=== 广东赛事日历 - 每日更新 $(date '+%Y-%m-%d %H:%M') ==="

cd "$REPO_DIR"

# 1. 配置 git（使用 token 作为远程认证）
git config user.email "quailia@github.com"
git config user.name "quailia"
git remote set-url origin "https://qua1ia:${GITHUB_TOKEN}@github.com/qua1ia/gdevent.git"

# 2. 检查是否有变更
if git diff --quiet && git diff --cached --quiet; then
    echo "✓ 无数据变更，跳过推送"
else
    # 3. 提交并推送
    TODAY=$(date '+%Y-%m-%d')
    git add -A
    git commit -m "更新赛事数据 $TODAY"
    GIT_TERMINAL_PROMPT=0 git push origin main
    echo "✓ 数据已更新并推送到 GitHub"
fi

echo "=== 更新完成 ==="
