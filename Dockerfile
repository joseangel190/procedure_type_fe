FROM nginx:1.23.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/ms_procedure_type/ .
EXPOSE 4200:4200