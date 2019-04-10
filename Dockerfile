FROM centos:centos7
MAINTAINER 1794423668@qq.com

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all

# copy 程序代码到容器的/src 下
ADD . /src

RUN cd /src; npm install

EXPOSE 3500

CMD ["node", "/src/index.js"]