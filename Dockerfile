# FROM centos:centos7
FROM  registry.ispacesys.cn/pm2/node-echarts:8.11.3-centos
# LABEL maintainer=cig@spacesystech.com Name=gydsjrest
# MAINTAINER 1794423668@qq.com
# Create app directory
RUN mkdir -p /root/www/rest
WORKDIR /root/www/rest
ADD . .
RUN cnpm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]