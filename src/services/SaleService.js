import {API, HOST} from "./Util";

export default class SaleService {
    async getSales({start, limit, sort, includeTotal = true, tag, price, name}) {
        // Empezamos la query
        let query = "?";

        // Añadimos el start ( Yo lo llame en mi proyecto skip)
        query += start ? `skip=${start}&` : "";

        // 2. Faltan añadir a la query los demás campos

        query += limit ? `limit=${limit}&` : "";
        query += sort ? `sort=${sort}&` : "";

        // Añadimos venta (booleano que indica si es venta o alquiler) Este parametro no lo tengo implementado
        //query += includeTotal ? `venta=${includeTotal}&` : "";

        query += tag ? `tags=${tag}&` : "";
        query += price ? `price=${price}&` : "";
        query += name ? `name=${name}&` : "";

        // Eliminamos el último & de la query
        query = query.substr(0, query.length - 1);

        return fetch(`${HOST}/${API}/adverts${query}`, {
            method: "GET"
        }).then(res => res.json());
        
    }

    async getTags() {
        // 2. Eliminar estas líneas y realizar la llamada a NodePop para obtener todos los tags

        return fetch(`${HOST}/${API}/adverts/tags`, {
            method: "GET"
        }).then(res => res.json());
        
    }
}
