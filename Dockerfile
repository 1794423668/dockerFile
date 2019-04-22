# FROM centos:centos7
FROM  registry.ispacesys.cn/pm2/node-echarts:8.11.3-centos
# LABEL maintainer=cig@spacesystech.com Name=gydsjrest
MAINTAINER 1794423668@qq.com

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all

# copy 程序代码到容器的/src 下
RUN mkdir -p /root/www/rest
WORKDIR /root/www/rest
ADD . .

EXPOSE 3000

ENTRYPOINT pm2 startOrReload ./pm2/prod.json --env production --no-daemon