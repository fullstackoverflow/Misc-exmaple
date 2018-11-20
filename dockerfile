FROM node:alpine

RUN mkdir /app && \
    apk update && \
    apk add ca-certificates && \
    update-ca-certificates && \
    apk add openssl && \
    apk add tzdata && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone

COPY . /app

CMD node index.js