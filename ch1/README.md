# Campus Challenge 1

## JSON a utilizar:

```json
{
    "first_prop" : "Una cadena de texto",
    "second_prop" : 125.30,
    "third_prop" : [
        {
            "sub_prop_1" : "Descripción - 1",
            "sub_prop_2" : 200
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : 100
        }
    ],
    "forth_prop" : true,
    "fifth_prop" : null
}
```

### Admite algunas variaciones como:

```json
{
    "first_prop" : "Una cadena de texto",
    "second_prop" : 125.30,
    "third_prop" : [
        {
            "sub_prop_1" : "Descripción - 1"
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : 100,
            "sub_prop_3" : false
        },
        {
            "sub_prop_1" : true,
            "sub_prop_2" : null,
            "sub_prop_3" : "hola"
        }
    ],
    "fourth_prop" : true,
    "fifth_prop" : [
        {
            "sub_prop_1" : "Descripción - 1",
            "sub_prop_2" : 200
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : false
        }

    ],
    "sixth_prop" : null
}
```

### Una alternativa simple de resolverlo:

```javascript
button.addEventListener("click", () => {
    const jsonStr = document.getElementById('textarea').value; 
    try{
        json = (new Function( "return " + jsonStr ) )() ;        
        msg.textContent = "JSON convertido a objeto!";
        console.log(json);
    } catch(e){
        msg.textContent = "Error, ingrese el JSON válido.";
        console.log(e);
    }
});
```
