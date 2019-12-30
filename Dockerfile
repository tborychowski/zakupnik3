FROM node:alpine
EXPOSE 3000
RUN apk update && \
    apk add git && \
    git clone https://github.com/tborychowski/zakupnik3 zakupnik
WORKDIR /zakupnik
RUN npm i && npm run dist
CMD ["node", "app.js"]
