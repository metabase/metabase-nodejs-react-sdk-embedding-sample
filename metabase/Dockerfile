FROM eclipse-temurin:21-jre-alpine

ENV JAVA_TOOL_OPTIONS="-XX:UseSVE=0"

RUN apk add -U curl && \
    apk upgrade

COPY ./local-dist/metabase.jar /app/
COPY ./metabase /app/

CMD ["java", "--add-opens", "java.base/java.nio=ALL-UNNAMED", "-jar", "./app/metabase.jar"]
