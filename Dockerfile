FROM node:14-alpine

WORKDIR /usr/frontend

COPY . .

RUN yarn install --frozen-lockfile

ENV NODE_ENV=production
ENV PORT 3000
ENV HOST 0.0.0.0

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
