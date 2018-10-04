FROM swaggerapi/swagger-codegen-cli:v2.3.1
COPY . /code
RUN java -jar /opt/swagger-codegen-cli/swagger-codegen-cli.jar generate \
  -i /code/swagger.yaml \
  -l nodejs-server \
  -o /out/server

FROM node:10.7.0-alpine
WORKDIR /code
COPY --from=0 /out/server .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
