FROM node:8.16.0-alpine as builder
WORKDIR /packages
COPY /package.json .
RUN npm install

FROM node:8.16.0-alpine
WORKDIR /app
COPY . /app
COPY --from=builder /packages/node_modules node_modules
EXPOSE 8080
ENTRYPOINT ["npm"]
CMD ["start"]
