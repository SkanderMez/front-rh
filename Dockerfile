### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

RUN npm install -g @angular/cli
RUN ng config -g cli.warnings.versionMismatch false
RUN ng build --prod --extract-css=false 
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/resume-wevioo /usr/share/nginx/html
