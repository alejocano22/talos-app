# Talos Events - Backend


## Desarrollado por:

- Sebastián Giraldo Gómez
- Alejandro Cano Múnera

### Android App: https://github.com/sgiraldog/talos-android-app
### iOS App: https://github.com/sgiraldog/talos-ios-app

## Endpoints:

#### Host: https://talos-app.herokuapp.com


### Autenticación: 

#### Tipo: POST

#### Path: 

#### Payload:

```json
Here goes your json object definition
```

#### Respuesta:

```json
Here goes your json object definition
```

#### Crear evento: 

#### Tipo: POST

#### Path: /api/v1/events/create

#### Header: Authorization token.

#### Payload: 
```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Response:

```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Actualizar evento: 

#### Tipo: POST

#### Path: /api/v1/events/update

#### Header: Authorization token.

#### Payload: 
```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Response:

```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Eliminar evento: 

#### Tipo: POST

#### Path: /api/v1/events/delete

#### Header: Authorization token.

#### Payload: 
```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Response:

```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```

#### Listar eventos: 

#### Tipo: GET

#### Path: /api/v1/events/get-all

#### Response:

```json
{
    "eventName": "Yoga Class",
    "author": "Sebastian Cano",
    "description": "In this class, postures are practiced to align, strengthen and promote flexibility in the body",
    "imageLink": "https://event-image.png",
    "accessLink": "https://event1.com"
}
```
