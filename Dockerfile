FROM java:8

ENV TZ=America/Bogota
ENV JAR=coupon-1.0.0.jar
ENV PORT=8080
ENV PROFILE=development

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

CMD ["WORKDIR", "/home/app/"]
COPY target/$JAR /home/app/

CMD ["WORKDIR", "/config/"]
COPY src/main/resources/* /config/

CMD chmod -R 777
CMD java -Djava.security.egd=file:/dev/urandom -jar /home/app/$JAR --spring.profiles.active=$PROFILE

EXPOSE $PORT


# docker build  -t "coupon" .
# docker run -d --name coupon  -p 8080:8080 coupon
# docker login
# docker tag coupon sbas23/coupon:v1
# docker push sbas23/coupon:v1
# docker pull sbas23/coupon:v1
# docker run -d --name coupon  -p 4043:8080 sbas23/coupon:v1

# docker tag coupon gcr.io/c0a6583d3e5d/coupon:1.0.0
# docker push gcr.io/c0a6583d3e5d/coupon:1.0.0

# gcloud config set project c0a6583d3e5d
# gcloud container clusters get-credentials  autopilot-cluster-1 --zone us-central1
# kubectl apply -f deployment.yaml

# kubectl get all
# kubectl delete deployment coupon
# kubectl delete service coupon
# kubectl delete horizontalpodautoscaler coupon



