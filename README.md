# Decidim API mock

Fake Decidim API for development purposes.

This fake API is generated from a Swagger definition file that defines a single accepted request and a set response for it.

## Build and start NodeJS server with Docker

Build the Docker image:

```
docker build -t decidim-api-mock .
```

Start the generated server:

```
docker run --rm -ti -p 3000:8080 decidim-api-mock
```

## Checking that it works

```
curl -X POST \
  http://localhost:3000/api \
  -H 'Content-Type: application/json' \
  -d '{ "query": "{ petition(id: 40) { id title description json_schema } }" }'
```

The response should be:

```
{
  "data": {
    "data": {
      "petition": {
        "id": 40,
        "title": {
          "es": "Plan de Actuacion municipal",
          "ca": "Pla d'Actuació Municipal"
        },
        "description": {
          "es": "Descripcion de peticion",
          "ca": "This is an amazing petition that you want to participate in"
        },
        "json_schema": {
          "optional": [
            {
              "scope": "can-access",
              "object": "voter",
              "predicate": "schema:dateOfBirth"
            },
            {
              "scope": "can-access",
              "object": "voter",
              "predicate": "schema:gender"
            }
          ],
          "mandatory": [
            {
              "scope": "can-access",
              "object": "Barcelona",
              "predicate": "schema:addressLocality",
              "provenance": {
                  "url": "http://atlantis-decode.s3-website-eu-west-1.amazonaws.com"
              }
            }
          ]
        }
      }
    }
  }
}
```
