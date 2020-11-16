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

#### Path: /api/v1/users/login

#### Payload de ejemplo:

```json
{
    "email": "user@email.com",
    "password": "password"
}
```

#### Respuesta:

```json
{
    "status": "OK",
    "message": "Login successfully!",
    "data": {
        "token": "authToken",
        "expiresIn": 3600
    }
}
```

### Crear evento: 

#### Tipo: POST

#### Path: /api/v1/events/create

#### Header: Authorization token.

#### Payload de ejemplo: 
```json
{
    "name": "Financial Talk",
    "startDate": "2020-11-20T19:30",
    "endDate": "2020-11-20T21:30",
    "days": ["Monday", "Tuesday"],
    "author": "Alejandro Diaz",
    "description": "These Talks provide insightful perspectives and practical advice to help you face your financial situation with honesty and compassion.",
    "imageLink": "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2017/11/financial-contingency.jpg",
    "accessLink": "https://meet.google.com/jeh-dgdr-hic",
    "registerLink": "https://forms.gle/og8MT2tc1V3jbqam6"
}
```

#### Respuesta:

```json
{
    "status": "OK",
    "message": "Event created successfully"
}
```

### Actualizar evento: 

#### Tipo: POST

#### Path: /api/v1/events/update

#### Header: Authorization token.

#### Payload de ejemplo: 
```json
{
    "days": [
        "Tuesday",
        "Thursday"
    ],
    "eventId": "5fa6c1a649933c0017bdf0ab",
    "name": "Yoga Class",
    "startDate": "2020-11-03T19:30:00.000Z",
    "endDate": "2020-12-31T19:30:00.000Z",
    "author": "Angelica Restrepo",
    "description": "In this class the basic, foundational yoga postures are practiced to align, strengthen and promote flexibility in the body.",
    "imageLink": "https://www.yogajournal.com/.image/t_share/MTYwNjk4NDMwNDY3ODc2ODM5/yogaclass-twistedlowlunge.jpg",
     "accessLink": "https://meet.google.com/jeh-dgdr-hic",
    "registerLink": "https://forms.gle/og8MT2tc1V3jbqam6",
    "createdAt": "2020-11-07T15:47:50.732Z",
    "updatedAt": "2020-11-07T15:47:50.732Z"
 }
```

#### Respuesta:

```json
{
    "status": "OK",
    "message": "Event updated successfully"
}
```

### Eliminar evento: 

#### Tipo: POST

#### Path: /api/v1/events/delete

#### Header: Authorization token.

#### Payload de ejemplo: 
```json
{
    "eventId": "5fb2d96dd9efb70017a5332b"
}
```

#### Respuesta:

```json
{
    "status": "OK",
    "message": "Event deleted successfully"
}
```

### Listar eventos: 

#### Tipo: GET

#### Path: /api/v1/events/get-all

#### Respuesta:

```json
{
    "status": "OK",
    "message": "Get events successfully",
    "events": [
        {
            "days": [
                "Tuesday",
                "Thursday"
            ],
            "_id": "5fa6c1a649933c0017bdf0ab",
            "name": "Yoga Classes",
            "startDate": "2020-11-03T19:30:00.000Z",
            "endDate": "2020-12-31T19:30:00.000Z",
            "author": "Angelica Restrepo",
            "description": "In this class the basic, foundational yoga postures are practiced to align, strengthen and promote flexibility in the body.",
            "imageLink": "https://www.yogajournal.com/.image/t_share/MTYwNjk4NDMwNDY3ODc2ODM5/yogaclass-twistedlowlunge.jpg",
            "accessLink": "https://meet.google.com/jeh-dgdr-hic",
            "registerLink": "https://forms.gle/og8MT2tc1V3jbqam6",
            "createdAt": "2020-11-07T15:47:50.732Z",
            "updatedAt": "2020-11-07T15:47:50.732Z"
        }
    ]
}
```
