FROM node:alpine
EXPOSE ${PORT}
RUN apk update && \
    apk add git && \
    git clone https://github.com/tborychowski/zakupnik3 zakupnik
WORKDIR /zakupnik
RUN npm i && npm run dist
CMD ["node", "app.js"]
