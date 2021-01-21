FROM nginx

# overriding default nginx configuration
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY frontend/build /usr/share/nginx/html

EXPOSE 80