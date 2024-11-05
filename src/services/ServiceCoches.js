import Global from './../Global'

export default class ServiceCoches {
    getCoches() {
        return new Promise(function (resolve) {
            let request = "api/Coches";
            let url = Global.urlApiCoches + request;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                });

        })
    }

    InsertCoche(coche) {
        return new Promise(function (resolve) {
            let request = "api/Coches/InsertCoche";
            let url = Global.urlApiCoches + request;

            fetch(url,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(coche) 
                })
            resolve(coche)

        })
    }

    findCoche(idCoche){
        return new Promise(function(resolve){
            let request = "api/Coches/findcoche/"+idCoche
            let url = Global.urlApiCoches + request;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                });
        })
    }

    deleteCoche(idCoche){
        return new Promise(function(resolve){
            let request = "api/coches/deletecoche/"+idCoche
            let url = Global.urlApiCoches + request

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data)
                });
        })
    }

    updateCoche(coche){
        return new Promise(function(resolve){
            let request = "api/coches/updatecoche"
            let url = Global.urlApiCoches + request

            fetch(url,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(coche)
                })
            resolve(coche)
        })
    }
}