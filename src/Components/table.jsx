import React from "react";

export function table(){
return (<div>

<div class="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">        
        <button id="btnCrear" type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#modalContacto">Crear</button>
        <table id="tablaContactos" class="table mt-2 table-bordered table-striped">
            <thead>
                <tr class="text-center">
                  
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    
                </tr>
            </thead>
            <tbody>                
            </tbody>
        </table>
    </div>

</div>





);


}

export default table();