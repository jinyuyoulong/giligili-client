# !/bin/bash
npm run build
mv -r ../dist ./dist

# docker image 操作
# 创建并推送到阿里云的docker仓库中
# docker login --username=fan.jinlong@outlook.com registry.cn-beijing.aliyuncs.com

version="v0.0.2"
docker build -t registry.cn-beijing.aliyuncs.com/jinyuyoulong/giligili:$version ./ 
# docker tag 0b829904e32a registry.cn-beijing.aliyuncs.com/jinyuyoulong/giligili:$version &&
docker push registry.cn-beijing.aliyuncs.com/jinyuyoulong/giligili:$version