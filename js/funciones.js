var xmlHttp
var logueado
var valor_dni  		// Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var valor_dnia 		// Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var valor_id   		// Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var global_cliente  // Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var global_posicion_boton_verde  // Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var global_posicion_boton_rojo  // Defini esta variable aca para poder pasar el valor entre 2 funciones javascript
var global_rubro


var xx = 1 			// Subindice para la generacion de la variable 
var fila = 3


///////////// SABIUM /////////////////////////


function insert_demo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_colegio = document.getElementById("colegio").value;
var v_cargo = document.getElementById("cargo").value;
var v_telefono = document.getElementById("telefono").value;
var v_email = document.getElementById("email").value;
var v_key = document.getElementById("key").value;

if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar NOMBRE";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar APELLIDO";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 

if (v_colegio=='')
 {
	error = 1 ;
	document.getElementById("error_colegio").innerHTML = "Falta cargar COLEGIO";
 }
else
 {
	document.getElementById("error_colegio").innerHTML = ""; 
 } 

if (v_cargo=='')
 {
	error = 1 ;
	document.getElementById("error_cargo").innerHTML = "Falta cargar CARGO";
 }
else
 {
	document.getElementById("error_cargo").innerHTML = ""; 
 } 
 
if (v_telefono=='')
 {
	error = 1 ;
	document.getElementById("error_telefono").innerHTML = "Falta cargar TELEFONO";
 }
else
 {
	document.getElementById("error_telefono").innerHTML = ""; 
 }  

if (v_email != '')
{
valor = document.getElementById("email").value;

var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_email").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Falta cargar EMAIL";
}

if (error==1)
	{ 
	error=0 ; 
	return false; 
	}	


var url="demo_insert.asp";
url=url+"?r="+v_nombre;  	// NOMBRE
url=url+"&r2="+v_apellido;  // APELLIDO
url=url+"&r3="+v_colegio;  	// COLEGIO
url=url+"&r4="+v_cargo;  	// CARGO
url=url+"&r5="+v_telefono;  // TELEFONO
url=url+"&r6="+v_email;  	// EMAIL
url=url+"&r7="+v_key;  		// KEY

//alert(url);

xmlHttp.onreadystatechange=FormDemoEnviado;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);

} 


function FormDemoEnviado() 
{ 
	if (xmlHttp.readyState==4)
	{ 

		var res = xmlHttp.responseText; 

		document.getElementById("mensaje_envio_ok").innerHTML=xmlHttp.responseText;

		if (xmlHttp.responseText=='Muchas gracias. Proximamente recibirá instrucciones por su email.') 
		{
			document.getElementById("Form_Demo").reset();
		}

	}
}

function insert_contacto2()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_asunto = document.getElementById("asunto").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_colegio = document.getElementById("colegio").value;
var v_cargo = document.getElementById("cargo").value;
var v_telefono = document.getElementById("telefono").value;
var v_email = document.getElementById("email").value;
var v_key = document.getElementById("key").value;
var v_mensaje = document.getElementById("mensaje").value;


if (v_asunto=='')
 {
	 error = 1 ;
	document.getElementById("error_asunto").innerHTML = "Falta cargar ASUNTO";
 }
else
 {
	document.getElementById("error_asunto").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar NOMBRE";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar APELLIDO";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 

if (v_colegio=='')
 {
	error = 1 ;
	document.getElementById("error_colegio").innerHTML = "Falta cargar COLEGIO";
 }
else
 {
	document.getElementById("error_colegio").innerHTML = ""; 
 } 

if (v_cargo=='')
 {
	error = 1 ;
	document.getElementById("error_cargo").innerHTML = "Falta cargar CARGO";
 }
else
 {
	document.getElementById("error_cargo").innerHTML = ""; 
 } 
 
if (v_telefono=='')
 {
	error = 1 ;
	document.getElementById("error_telefono").innerHTML = "Falta cargar TELEFONO";
 }
else
 {
	document.getElementById("error_telefono").innerHTML = ""; 
 }  

if (v_email != '')
{
valor = document.getElementById("email").value;

var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_email").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Falta cargar EMAIL";
}


if (v_mensaje=='')
 {
	error = 1 ;
	document.getElementById("error_mensaje").innerHTML = "Falta cargar MENSAJE";
 }
else
 {
	document.getElementById("error_mensaje").innerHTML = "";
 }


if (error==1)
	{ 
	error=0 ; 
	return false; 
	}	


var url="contactos_insert.asp";
url=url+"?r= "+v_asunto;    // ASUNTO
url=url+"&r2="+v_nombre;  	// NOMBRE
url=url+"&r3="+v_apellido;  // APELLIDO
url=url+"&r4="+v_colegio;  	// COLEGIO
url=url+"&r5="+v_cargo;  	// CARGO
url=url+"&r6="+v_telefono;  // TELEFONO
url=url+"&r7="+v_email;  	// EMAIL
url=url+"&r8="+v_mensaje;  	// MENSAJE
url=url+"&r9="+v_key;  		// KEY

//alert(url);

xmlHttp.onreadystatechange=FormEnviado;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);

} 


function FormEnviado() 
{ 
	if (xmlHttp.readyState==4)
	{ 

		var res = xmlHttp.responseText;

		document.getElementById("mensaje_envio_ok").innerHTML=xmlHttp.responseText;

		if (xmlHttp.responseText=='Muchas gracias por tu interés. Nos pondremos en contacto a la brevedad.') 
		{
			document.getElementById("Form_Contacto").reset();
		}

	}
}





function insert_contacto()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_asunto = document.getElementById("asunto").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_colegio = document.getElementById("colegio").value;
var v_cargo = document.getElementById("cargo").value;
var v_telefono = document.getElementById("telefono").value;
var v_email = document.getElementById("email").value;
var v_mensaje = document.getElementById("email").value;


if (v_asunto=='')
 {
	 error = 1 ;
	document.getElementById("error_asunto").innerHTML = "Falta cargar ASUNTO";
 }
else
 {
	document.getElementById("error_asunto").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar NOMBRE";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar APELLIDO";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 

if (v_colegio=='')
 {
	error = 1 ;
	document.getElementById("error_colegio").innerHTML = "Falta cargar COLEGIO";
 }
else
 {
	document.getElementById("error_colegio").innerHTML = ""; 
 } 

if (v_cargo=='')
 {
	error = 1 ;
	document.getElementById("error_cargo").innerHTML = "Falta cargar CARGO";
 }
else
 {
	document.getElementById("error_cargo").innerHTML = ""; 
 } 
 
if (v_telefono=='')
 {
	error = 1 ;
	document.getElementById("error_telefono").innerHTML = "Falta cargar TELEFONO";
 }
else
 {
	document.getElementById("error_telefono").innerHTML = ""; 
 }  

if (v_email != '')
{
valor = document.getElementById("email").value;

var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_email").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_email").innerHTML = "Falta cargar EMAIL";
}


if (v_mensaje=='')
 {
	error = 1 ;
	document.getElementById("error_mensaje").innerHTML = "Falta cargar MENSAJE";
 }
else
 {
	document.getElementById("error_mensaje").innerHTML = "";
 }


if (error==1)
	{ 
	error=0 ; 
	return false; 
	}	

document.getElementById("Form_Contacto").submit();	

document.getElementById("mensaje_envio_ok").innerHTML = "Mensaje enviado exitosamente."; 

} 



///////////// MATERIAS PRIMAS ////////////////

function update_materia_prima()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_deposito = document.getElementById("cb_deposito").value;
var v_cb_rubros = document.getElementById("cb_rubros").value;
var v_cantidad = document.getElementById("cantidad").value;
var v_lote = document.getElementById("lote").value;

if (v_cb_deposito=='')
 {
	 error = 1 ;
	document.getElementById("error_deposito").innerHTML = "Falta cargar el DEPOSITO";
 }
else
 {
	document.getElementById("error_deposito").innerHTML = ""; 
 } 
 
if (v_cb_rubros=='')
 {
	 error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el RUBRO";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = ""; 
 }   
 
if (v_cantidad=='')
 {
	 error = 1 ;
	document.getElementById("error_cantidad").innerHTML = "Falta cargar la CANTIDAD";
 }
else
 {
	document.getElementById("error_cantidad").innerHTML = ""; 
 }  
 
if (v_lote=='')
 {
	 error = 1 ;
	document.getElementById("error_lote").innerHTML = "Falta cargar el LOTE";
 }
else
 {
	document.getElementById("error_lote").innerHTML = ""; 
 }    

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form").submit();	


} 



function delete_materia_prima() 
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var r=confirm("Esta seguro que desea BORRAR la materia prima seleccionada y actualizar el stock?");
if (r==true)
  {  
	document.getElementById("Form").submit();	
  }

} 

function materias_primas_cargar_stock(subrubro,rubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="materias_primas_cargar_stock.asp";
url=url+"?rub="+rubro;
url=url+"&sru="+subrubro;

//alert(url);

xmlHttp.onreadystatechange=ZoomMateriasPrimasMostrarStock;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function ZoomMateriasPrimasMostrarStock() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("div_stock").innerHTML=xmlHttp.responseText;
}
}

function filtro_modificacion_materias_primas(deposito,proveedor,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="materias_primas_modificacion_resultado_filtros.asp";
url=url+"?dep="+deposito; 
url=url+"&pro="+proveedor;    
url=url+"&rub="+rubro;    
url=url+"&sru="+subrubro; 


//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_materia_prima()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_deposito = document.getElementById("cb_deposito").value;
var v_cb_rubros = document.getElementById("cb_rubros").value;
var v_cb_subrubros = document.getElementById("cb_subrubros").value;
var v_cantidad = document.getElementById("cantidad").value;
var v_lote = document.getElementById("lote").value;

if (v_cb_deposito=='')
 {
	 error = 1 ;
	document.getElementById("error_deposito").innerHTML = "Falta cargar el DEPOSITO";
 }
else
 {
	document.getElementById("error_deposito").innerHTML = ""; 
 } 
  
if (v_cb_rubros=='0')
 {
	 error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el RUBRO";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = ""; 
 }   
 
if (v_cb_subrubros=='0')
 {
	 error = 1 ;
	document.getElementById("error_subrubro").innerHTML = "Falta cargar el SUBRUBRO";
 } 
else
 {
	document.getElementById("error_subrubro").innerHTML = ""; 
 }  
 
if (v_cantidad=='')
 {
	 error = 1 ;
	document.getElementById("error_cantidad").innerHTML = "Falta cargar la CANTIDAD";
 }
else
 {
	document.getElementById("error_cantidad").innerHTML = ""; 
 }  
 
if (v_lote=='')
 {
	 error = 1 ;
	document.getElementById("error_lote").innerHTML = "Falta cargar el LOTE";
 }
else
 {
	document.getElementById("error_lote").innerHTML = ""; 
 }    

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form").submit();	


} 



function materias_primas_edit_actualizar_stock(cantidad,rubro,subrubro,cantidad_original) 
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="materias_primas_edit_actualizar_stock.asp";
url=url+"?rub="+rubro;
url=url+"&sru="+subrubro; 
url=url+"&can="+cantidad;
url=url+"&cao="+cantidad_original;

//alert(url);

xmlHttp.onreadystatechange=EditarActualizarStockProductoTerminado;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function EditarActualizarStockProductoTerminado() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("div_stock").innerHTML=xmlHttp.responseText;
}
}


function materias_primas_cargar_stock(subrubro,rubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="materias_primas_cargar_stock.asp";
url=url+"?rub="+rubro;
url=url+"&sru="+subrubro;

//alert(url);

xmlHttp.onreadystatechange=AltaMostrarStockArticulo;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}




////////////////////////////




function stock_minimo_actualizar(tipo_art,item,cantidad,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
//var precio_costo=document.getElementById("precio_costo"+item).value;   
//var proveedor=document.getElementById("cb_proveedor"+item).value;  
  
var url="stock_actualizacion_stock_minimo.asp";
url=url+"?art="+tipo_art;     	 // TIPO ARTICULO
url=url+"&id="+item;     		// ID ITEM
url=url+"&can="+cantidad;      // STOCK MIN
url=url+"&rub="+rubro;     	  // RUBRO
url=url+"&sub="+subrubro;    // SUBRUBRO

//alert(url);

xmlHttp.onreadystatechange=ActualizacionListaArticulos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ActualizacionListaArticulos()  
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("ok_punto_verde").style.visibility = "hidden";
}


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_item_seleccionado = valor[0]
	var val_cantidad = valor[1]

	document.getElementById("cantidad"+val_item_seleccionado).value=val_cantidad;
	
	document.getElementById("ok_punto_verde"+val_item_seleccionado).style.visibility = "visible";
	
	//alert(val_sql);
	
}

}






/////////////////////////////


function filtro_stock_administracion(tipo,deposito,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="stock_administracion_resultado_filtros.asp";
url=url+"?art="+tipo; 		// Tipo de articulo: (MP) materia prima (PT) producto terminado
url=url+"&dep="+deposito;  
url=url+"&rub="+rubro;    
url=url+"&sru="+subrubro; 


//alert(url);

xmlHttp.onreadystatechange=ListarStock;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarStock() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
}

}



function productos_terminados_edit_actualizar_stock(cantidad,rubro,subrubro,cantidad_original)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="productos_terminados_edit_actualizar_stock.asp";
url=url+"?rub="+rubro;
url=url+"&sru="+subrubro; 
url=url+"&can="+cantidad;
url=url+"&cao="+cantidad_original;

//alert(url);

xmlHttp.onreadystatechange=EditarActualizarStockProductoTerminado;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function EditarActualizarStockProductoTerminado() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("div_stock").innerHTML=xmlHttp.responseText;
}
}


function productos_terminados_cargar_stock(subrubro,rubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="productos_terminados_cargar_stock.asp";
url=url+"?rub="+rubro;
url=url+"&sru="+subrubro;

//alert(url);

xmlHttp.onreadystatechange=AltaMostrarStockArticulo;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function AltaMostrarStockArticulo() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("div_stock").innerHTML=xmlHttp.responseText;
}
}


function delete_producto_terminado()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var r=confirm("Esta seguro que desea BORRAR el producto terminado seleccionado y actualizar el stock?");
if (r==true)
  {  
	document.getElementById("Form").submit();	
  }

} 

function update_producto_terminado()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_deposito = document.getElementById("cb_deposito").value;
//var v_cod_articulo = document.getElementById("cod_articulo").value;
////var v_des_articulo = document.getElementById("des_articulo").value;
//var v_cb_quien_ingreso_retiro = document.getElementById("cb_quien_ingreso_retiro").value;
var v_cb_rubros = document.getElementById("cb_rubros").value;
var v_cantidad = document.getElementById("cantidad").value;
var v_lote = document.getElementById("lote").value;

if (v_cb_deposito=='')
 {
	 error = 1 ;
	document.getElementById("error_deposito").innerHTML = "Falta cargar el DEPOSITO";
 }
else
 {
	document.getElementById("error_deposito").innerHTML = ""; 
 } 
 
//if (v_cod_articulo=='')
// {
//	 error = 1 ;
//	document.getElementById("error_cod_articulo").innerHTML = "Falta cargar el CODIGO ARTICULO";
// }
//else
// {
//	document.getElementById("error_cod_articulo").innerHTML = ""; 
// }  
//
//if (v_des_articulo=='')
// {
//	 error = 1 ;
//	document.getElementById("error_des_articulo").innerHTML = "Falta cargar la DESCRIPCION DEL ARTICULO";
// }
//else
// {
//	document.getElementById("error_des_articulo").innerHTML = ""; 
// } 
// 
//if (v_cb_quien_ingreso_retiro=='')
// {
//	 error = 1 ;
//	document.getElementById("error_quien_ingreso_retiro").innerHTML = "Falta cargar QUIEN LO INGRESO / RETIRO";
// }
//else
// {
//	document.getElementById("error_quien_ingreso_retiro").innerHTML = ""; 
// }  
 
if (v_cb_rubros=='')
 {
	 error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el RUBRO";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = ""; 
 }   
 
if (v_cantidad=='')
 {
	 error = 1 ;
	document.getElementById("error_cantidad").innerHTML = "Falta cargar la CANTIDAD";
 }
else
 {
	document.getElementById("error_cantidad").innerHTML = ""; 
 }  
 
if (v_lote=='')
 {
	 error = 1 ;
	document.getElementById("error_lote").innerHTML = "Falta cargar el LOTE";
 }
else
 {
	document.getElementById("error_lote").innerHTML = ""; 
 }    

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form").submit();	


} 



function filtro_modificacion_producto_terminado(deposito,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="productos_terminados_modificacion_resultado_filtros.asp";
url=url+"?dep="+deposito; 
url=url+"&rub="+rubro;    
url=url+"&sru="+subrubro; 


//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_producto_terminado()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_deposito = document.getElementById("cb_deposito").value;
//var v_cod_articulo = document.getElementById("cod_articulo").value;
//var v_des_articulo = document.getElementById("des_articulo").value;
//var v_cb_quien_ingreso_retiro = document.getElementById("cb_quien_ingreso_retiro").value;
var v_cb_rubros = document.getElementById("cb_rubros").value;
var v_cantidad = document.getElementById("cantidad").value;
var v_lote = document.getElementById("lote").value;

if (v_cb_deposito=='')
 {
	 error = 1 ;
	document.getElementById("error_deposito").innerHTML = "Falta cargar el DEPOSITO";
 }
else
 {
	document.getElementById("error_deposito").innerHTML = ""; 
 } 
 
//if (v_cod_articulo=='')
// {
//	 error = 1 ;
//	document.getElementById("error_cod_articulo").innerHTML = "Falta cargar el CODIGO ARTICULO";
// }
//else
// {
//	document.getElementById("error_cod_articulo").innerHTML = ""; 
// }  
//
//if (v_des_articulo=='')
// {
//	 error = 1 ;
//	document.getElementById("error_des_articulo").innerHTML = "Falta cargar la DESCRIPCION DEL ARTICULO";
// }
//else
// {
//	document.getElementById("error_des_articulo").innerHTML = ""; 
// } 
 
//if (v_cb_quien_ingreso_retiro=='')
// {
//	 error = 1 ;
//	document.getElementById("error_quien_ingreso_retiro").innerHTML = "Falta cargar QUIEN LO INGRESO / RETIRO";
// }
//else
// {
//	document.getElementById("error_quien_ingreso_retiro").innerHTML = ""; 
// }  
 
if (v_cb_rubros=='')
 {
	 error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el RUBRO";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = ""; 
 }   
 
if (v_cantidad=='')
 {
	 error = 1 ;
	document.getElementById("error_cantidad").innerHTML = "Falta cargar la CANTIDAD";
 }
else
 {
	document.getElementById("error_cantidad").innerHTML = ""; 
 }  
 
if (v_lote=='')
 {
	 error = 1 ;
	document.getElementById("error_lote").innerHTML = "Falta cargar el LOTE";
 }
else
 {
	document.getElementById("error_lote").innerHTML = ""; 
 }    

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form").submit();	


} 













function articulo_actualizar_proveedor_por_lista(item,proveedor)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
    
var proveedor=document.getElementById("cb_proveedor"+item).value;  
  
var url="precios_actualizacion_lista_cambiar_proveedor.asp";
url=url+"?id="+item;     			  // ID ITEM
url=url+"&pro="+proveedor;     		  // PROVEEDOR

//alert(url); 

xmlHttp.onreadystatechange=ActualizacionPreciosMostrarProveedorActualizado;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ActualizacionPreciosMostrarProveedorActualizado()  
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("ok_punto_verde").style.visibility = "hidden";
}


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_item_seleccionado = valor[0]
	//var val_debito = valor[1]
	//var val_tarjeta = valor[2]
	//var val_sugerido = valor[3]
	//var val_sql = valor[4]
		
	//document.getElementById("precio_min_debito"+val_item_seleccionado).value=val_debito;
	//document.getElementById("precio_min_tarj"+val_item_seleccionado).value=val_tarjeta;
	//document.getElementById("precio_sugerido"+val_item_seleccionado).value=val_sugerido;
	
	document.getElementById("ok_punto_verde"+val_item_seleccionado).style.visibility = "visible";
	
	//alert(val_sql);
	
}

}

function borrar_articulo(item)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
global_posicion_boton_rojo=item;  
  
var url="precios_actualizacion_lista_borrar_articulo.asp";
url=url+"?id="+item;  // ITEM de la listados
 

//alert(url); 

var r=confirm("Esta seguro que desea BORRAR el articulo seleccionado?");
if (r==true)
  {
	xmlHttp.onreadystatechange=PrenderBotonRojoOK;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
} 

function PrenderBotonRojoOK() 
{ 

//alert(xmlHttp.readyState);

if (xmlHttp.readyState==1)
{ 
	document.getElementById("ok_punto_rojo"+global_posicion_boton_rojo).style.visibility = "hidden";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("ok_punto_rojo"+global_posicion_boton_rojo).style.visibility = "visible";
	
}


}



function insertar_articulo_alta_por_lista(item,sel_proveedor,sel_rubro,sel_subrubros,sel_articulo,sel_modelo,sel_costo,sel_efectivo,sel_debito,sel_tarjeta,sel_sugerido,sel_observaciones)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
global_posicion_boton_verde=item;  
  
var url="insertar_articulo_alta_por_lista.asp";
url=url+"?id="+item;   			 // ITEM de la listados
url=url+"&pro="+sel_proveedor;   
url=url+"&rub="+sel_rubro;   	
url=url+"&sru="+sel_subrubros;   
url=url+"&art="+sel_articulo;   
url=url+"&mod="+sel_modelo;   
url=url+"&cos="+sel_costo;   
url=url+"&efe="+sel_efectivo;   
url=url+"&deb="+sel_debito;   
url=url+"&tar="+sel_tarjeta;   
url=url+"&sug="+sel_sugerido;   
url=url+"&obs="+sel_observaciones;    

//alert(url); 

xmlHttp.onreadystatechange=PrenderBotonVerdeOK;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function PrenderBotonVerdeOK() 
{ 

//alert(xmlHttp.readyState);

if (xmlHttp.readyState==1)
{ 
	document.getElementById("ok_punto_verde"+global_posicion_boton_verde).style.visibility = "hidden";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("ok_punto_verde"+global_posicion_boton_verde).style.visibility = "visible";
	
}


}


function articulo_alta_calcular_precios_por_lista(item,precio_efectivo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var precio_costo=document.getElementById("precio_costo"+item).value;   
  
var url="precios_alta_lista_calcular_precios.asp";
url=url+"?id="+item;     			  // ID ITEM
url=url+"&efe="+precio_efectivo;      // PRECIO MIN. EFECTIVO
url=url+"&cos="+precio_costo;     	  // PRECIO COSTO

//alert(url);

xmlHttp.onreadystatechange=AltaPreciosMostrarPreciosCalculados;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function AltaPreciosMostrarPreciosCalculados()  
{ 


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_item_seleccionado = valor[0]
	var val_debito = valor[1]
	var val_tarjeta = valor[2]
	var val_sugerido = valor[3]
	//var val_sql = valor[4]
		
	document.getElementById("precio_debito"+val_item_seleccionado).value=val_debito;
	document.getElementById("precio_tarjeta"+val_item_seleccionado).value=val_tarjeta;
	document.getElementById("precio_sugerido"+val_item_seleccionado).value=val_sugerido;
	
	//document.getElementById("ok_punto_verde"+val_item_seleccionado).style.visibility = "visible";
	
	//alert(val_sql);
	
}

}



function agregar_articulo()
{
var table=document.getElementById("tabla_datos"); 
var error=0

xx=xx+1

//alert(xx-1);

var sel_proveedor=document.getElementById("cb_proveedores").value;
var sel_rubro=document.getElementById("cb_rubros").value;
var sel_subrubros=document.getElementById("cb_subrubros").value;
var sel_articulo=document.getElementById("articulo"+(xx-1)).value;
var sel_modelo=document.getElementById("modelo"+(xx-1)).value;
var sel_costo=document.getElementById("precio_costo"+(xx-1)).value;
var sel_efectivo=document.getElementById("precio_efectivo"+(xx-1)).value;
var sel_debito=document.getElementById("precio_debito"+(xx-1)).value;
var sel_tarjeta=document.getElementById("precio_tarjeta"+(xx-1)).value;
var sel_sugerido=document.getElementById("precio_sugerido"+(xx-1)).value;
var sel_observaciones=document.getElementById("observaciones"+(xx-1)).value;

// ### Validaciones ###
 
//if (sel_proveedor=='')
// {
//	error = 1 ;
//	document.getElementById("amensaje_error_1").style.display="block";
// }
//else
// {
//	document.getElementById("amensaje_error_1").style.display="none";
// }  


if (sel_rubro=='0')
 {
	error = 1 ;
	document.getElementById("amensaje_error_2").style.display="block";
 }
else
 {
	document.getElementById("amensaje_error_2").style.display="none";
 }  
 
if (sel_subrubros=='0')
 {
	error = 1 ;
	document.getElementById("amensaje_error_3").style.display="block";
 }
else
 {
	document.getElementById("amensaje_error_3").style.display="none";
 }   
 
 
if (sel_articulo=='')
 {
	error = 1 ;
	alert("El campo CODIGO ARTICULO es OBLIGATORIO");
 }
 
if (sel_modelo=='')
 {
	error = 1 ;
	alert("El campo DESCRIPCION es OBLIGATORIO");
 } 
 
if (sel_efectivo=='')
 {
	error = 1 ;
	alert("El campo EFECTIVO es OBLIGATORIO");
 }  
 
if (sel_debito=='')
 {
	error = 1 ;
	alert("El campo DEBITO es OBLIGATORIO");
 }  

if (sel_tarjeta=='')
 {
	error = 1 ;
	alert("El campo TARJETA es OBLIGATORIO");
 }  

if (sel_sugerido=='')
 {
	error = 1 ;
	alert("El campo SUGERIDO es OBLIGATORIO");
 }  

if (error==1)
	{ 
	error=0 ; 
	xx=xx-1
	return false;
	}	


// ### Fin Validaciones ###



// Llamo a la funcion que INSERTA los nuevos articulos
insertar_articulo_alta_por_lista(xx-1,sel_proveedor,sel_rubro,sel_subrubros,sel_articulo,sel_modelo,sel_costo,sel_efectivo,sel_debito,sel_tarjeta,sel_sugerido,sel_observaciones);	

var cont1 = "<input type='text'   name='articulo"        + xx + "' id='articulo"        + xx + "' class='articulos_campo_largo'>"
var cont2 = "<input type='text'   name='modelo"          + xx + "' id='modelo"          + xx + "' class='articulos_campo_largo'>"
var cont3 = "<input type='number' STEP='1' oninput='this.value = this.value.replace(/[^0-9]/g, '');' name='precio_costo"    + xx + "' id='precio_costo"    + xx + "' class='articulos_campo_precios'>"
var cont4 = "<input type='number' STEP='1' oninput='this.value = this.value.replace(/[^0-9]/g, '');' name='precio_efectivo" + xx + "' id='precio_efectivo" + xx + "' class='articulos_campo_precios' onKeyUp='articulo_alta_calcular_precios_por_lista("+ xx +",this.value)'>"
var cont5 = "<input type='number' STEP='1' oninput='this.value = this.value.replace(/[^0-9]/g, '');' name='precio_debito"   + xx + "' id='precio_debito"   + xx + "' class='articulos_campo_precios'>"
var cont6 = "<input type='number' STEP='1' oninput='this.value = this.value.replace(/[^0-9]/g, '');' name='precio_tarjeta"  + xx + "' id='precio_tarjeta"  + xx + "' class='articulos_campo_precios'>"
var cont7 = "<input type='number' STEP='1' oninput='this.value = this.value.replace(/[^0-9]/g, '');' name='precio_sugerido" + xx + "' id='precio_sugerido" + xx + "' class='articulos_campo_precios'>"
var cont8 = "<input type='text'   name='observaciones"   + xx + "' id='observaciones"   + xx + "' class='articulos_campo_largo3'>"
var cont9 = "<i class='fa-solid fa-circle punto_verde' style='visibility:hidden' id='ok_punto_verde" + xx + "' name='ok_punto_verde" + xx + "'></i>"

var row=table.insertRow(fila);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
var cell5=row.insertCell(4);
var cell6=row.insertCell(5);
var cell7=row.insertCell(6);
var cell8=row.insertCell(7);
var cell9=row.insertCell(8);

cell1.className  = 'sam_tabla_td_derecha';
cell2.className  = 'sam_tabla_td_derecha';
cell3.className  = 'sam_tabla_td_derecha';
cell4.className  = 'sam_tabla_td_derecha';
cell5.className  = 'sam_tabla_td_derecha';
cell6.className  = 'sam_tabla_td_derecha';
cell7.className  = 'sam_tabla_td_derecha';
cell8.className  = 'sam_tabla_td_derecha';
cell9.className  = 'sam_tabla_td_derecha';

cell1.innerHTML=cont1;
cell2.innerHTML=cont2;
cell3.innerHTML=cont3;
cell4.innerHTML=cont4;
cell5.innerHTML=cont5;
cell6.innerHTML=cont6;
cell7.innerHTML=cont7;
cell8.innerHTML=cont8;
cell9.innerHTML=cont9;


//xx=xx+1
fila=fila+1

//alert(cont3);

// ACA HACER LA LLAMADA AL QUE INSERTA EL REGISTRO ANTERIOR

}



function reporte_general_articulos_resultado_filtros_excel(proveedor,rubro,subrubro,ordenamiento)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_articulos_resultado_filtros_excel.asp";
url=url+"?pro="+proveedor; 
url=url+"&rub="+rubro; 
url=url+"&sub="+subrubro;
url=url+"&ord="+ordenamiento;

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function crea_excel97() 
{
if (xmlHttp.readyState==4)
{ 
	document.getElementById("excel").innerHTML=xmlHttp.responseText
	document.getElementById("excel").style.visibility="visible"; 	
}
}



function articulo_calcular_precios_por_lista(item,precio_efectivo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var precio_costo=document.getElementById("precio_costo"+item).value;   
var proveedor=document.getElementById("cb_proveedor"+item).value;  
  
var url="precios_actualizacion_lista_calcular_precios.asp";
url=url+"?id="+item;     			  // ID ITEM
url=url+"&efe="+precio_efectivo;      // PRECIO MIN. EFECTIVO
url=url+"&cos="+precio_costo;     	  // PRECIO COSTO
url=url+"&pro="+proveedor;     		  // PROVEEDOR

//alert(url);

xmlHttp.onreadystatechange=ActualizacionPreciosMostrarPreciosCalculados;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ActualizacionPreciosMostrarPreciosCalculados()  
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("ok_punto_verde").style.visibility = "hidden";
}


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_item_seleccionado = valor[0]
	var val_debito = valor[1]
	var val_tarjeta = valor[2]
	var val_sugerido = valor[3]
	//var val_sql = valor[4]
		
	document.getElementById("precio_min_debito"+val_item_seleccionado).value=val_debito;
	document.getElementById("precio_min_tarj"+val_item_seleccionado).value=val_tarjeta;
	document.getElementById("precio_sugerido"+val_item_seleccionado).value=val_sugerido;
	
	document.getElementById("ok_punto_verde"+val_item_seleccionado).style.visibility = "visible";
	
	//alert(val_sql);
	
}

}


function filtro_actualizacion_lista_precios(proveedor,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="precios_actualizacion_lista_resultado_filtros.asp";
url=url+"?pro="+proveedor;  // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO


//alert(url);

xmlHttp.onreadystatechange=ListarArticulosParaActualizacion;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarArticulosParaActualizacion() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda_articulos").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_articulos").innerHTML=xmlHttp.responseText;
}

}



function presupuesto_borrar_cotizacion(codigo_detalle_articulos,nro_cotizacion)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
   
var url="presupuestos_borrar_cotizacion.asp";
url=url+"?cd="+codigo_detalle_articulos; // Codigo Detalle Articulos
url=url+"&nc="+nro_cotizacion; // Nro. Cotizacion

//alert(url);

var r=confirm("Esta seguro que desea BORRAR la cotizacion seleccionada?");
if (r==true)
  {
	xmlHttp.onreadystatechange=PresupuestosPonerEnCarrito;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}

function nueva_cotizacion(nro_cotizacion_actual,cod_detalle_articulos)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
    
  
var url="presupuestos_agregar_cotizacion.asp";
url=url+"?cot="+nro_cotizacion_actual;   // NRO Cotizacion
url=url+"&cod="+cod_detalle_articulos;   // CODIGO detalle articulos

//alert(url);

xmlHttp.onreadystatechange=PresupuestosNuevoNroCotizacion;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function PresupuestosNuevoNroCotizacion() 
{ 
	if (xmlHttp.readyState==4)
	{ 


	var r=confirm("Esta seguro de agregar una nueva COTIZACION al PRESUPUESTO generado?");
	if (r==true)
		{


			//alert("Actualizo Nro. cotizacion");	
			
			document.getElementById("listado_carrito").innerHTML=xmlHttp.responseText;
			
			// Obtener el elemento con name="label_carrito"
			var labelCarritoElement = document.getElementsByName("label_carrito")[0];

			// Verificar si se encontró el elemento
			if (labelCarritoElement) 
			{
				// Mover al elemento
				labelCarritoElement.scrollIntoView({ behavior: 'smooth' });
			}	
		
		}	
	
	}
}


function presupuesto_paso_1_verificar_cliente()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  

var error=0

var apellido_nombre=document.getElementById("cliente_apellido_nombre").value; 
var dni=document.getElementById("cliente_dni").value; 
var direccion=document.getElementById("cliente_domicilio").value; 
var telefono=document.getElementById("cliente_telefono").value; 
var email=document.getElementById("cliente_email").value; 

if (apellido_nombre == '')
	{ 	
	error = 1;
	document.getElementById("cl_mensaje_error_1").style.display="block";
	document.getElementById("cl_mensaje_error_1b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("cliente_apellido_nombre").value; 
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s-]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("cl_mensaje_error_1").style.display="none";	
			document.getElementById("cl_mensaje_error_1b").style.display="block";
			document.getElementById("cl_mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("cl_mensaje_error_1").style.display="none";		
			document.getElementById("cl_mensaje_error_1b").style.display="none";		

			}
		}

if (dni == '')
	{ 	
//	error = 1;
//	document.getElementById("cl_mensaje_error_2").style.display="block";
//	document.getElementById("cl_mensaje_error_2b").style.display="none";
	}	
else
	
	{	
	valor = document.getElementById("cliente_dni").value;
	
	var pat = /[0-9]{8,}/
	
	if (!pat.test(valor)) 
		{
		
		error = 1 ;
		document.getElementById("cl_mensaje_error_2").style.display="none";
		document.getElementById("cl_mensaje_error_2b").style.display="block";
		document.getElementById("cl_mensaje_error_2b").focus();
		}
		else 
		{
		document.getElementById("cl_mensaje_error_2").style.display="none";		
		document.getElementById("cl_mensaje_error_2b").style.display="none";		
		}
	}



if (direccion == '')
	{ 	
//	error = 1;
//	document.getElementById("cl_mensaje_error_3").style.display="block";
//	document.getElementById("cl_mensaje_error_3b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("cliente_domicilio").value;
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s-]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("cl_mensaje_error_3").style.display="none";	
			document.getElementById("cl_mensaje_error_3b").style.display="block";
			document.getElementById("cl_mensaje_error_3b").focus();
			}
			else 
			{
			document.getElementById("cl_mensaje_error_3").style.display="none";		
			document.getElementById("cl_mensaje_error_3b").style.display="none";		

			}
		}	
		
		
if (telefono == '')
	{ 	
//	error = 1;
//	document.getElementById("cl_mensaje_error_4").style.display="block";
//	document.getElementById("cl_mensaje_error_4b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("cliente_telefono").value;
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s-]*$/
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("cl_mensaje_error_4").style.display="none";	
			document.getElementById("cl_mensaje_error_4b").style.display="block";
			document.getElementById("cl_mensaje_error_4b").focus();
			}
			else 
			{
			document.getElementById("cl_mensaje_error_4").style.display="none";		
			document.getElementById("cl_mensaje_error_4b").style.display="none";		

			}
		}
		

if (email=='')
	
	{ 	
//	error = 1;
//	document.getElementById("cl_mensaje_error_5").style.display="block";
//	document.getElementById("cl_mensaje_error_5b").style.display="none";
	}
	else
		{
		valor = document.getElementById("cliente_email").value;
		var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
		if (!pat.test(valor)) 
			{
			error = 1 ;
			document.getElementById("cl_mensaje_error_5").style.display="none";
			document.getElementById("cl_mensaje_error_5b").style.display="block";
			}
			else 
			{
			document.getElementById("cl_mensaje_error_5").style.display="none";
			document.getElementById("cl_mensaje_error_5b").style.display="none";
			}
		}

	
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function aviso_presupuesto(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="presupuesto_aviso_email.asp";
url=url+"?pid="+str;   // Id Presupuesto
url=url+"&pem="+str2;  // Email Cliente

//alert(url); 


var r=confirm("Esta seguro de enviar el mail de aviso del PRESUPUESTO generado?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarAvisoEnvio;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarAvisoEnvio() 
{ 


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("mensaje_envio_exitoso").style.display="block";
}

}


function cambiar_total_carrito_compras(descuento,codigo_detalle,nro_cotizacion)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="presupuestos_cambiar_total_carrito.asp";
url=url+"?des="+descuento;
url=url+"&det="+codigo_detalle;
url=url+"&cot="+nro_cotizacion;
xmlHttp.onreadystatechange=PresupuestoCambiarTotalCarrito;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function PresupuestoCambiarTotalCarrito() 
{ 


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_nuevo_total_carrito = valor[0]
	var val_nro_cotizacion = valor[1]

	document.getElementById("suma_general_carrito_"+val_nro_cotizacion).value=val_nuevo_total_carrito;
 
}

}

function confirmar_presupuesto()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var cb_vendedores=document.getElementById("cb_vendedores").value; 
var cliente_apellido_nombre=document.getElementById("cliente_apellido_nombre").value;  
var cliente_dni=document.getElementById("cliente_dni").value; 
var cliente_domicilio=document.getElementById("cliente_domicilio").value; 
var cliente_telefono=document.getElementById("cliente_telefono").value; 
var cliente_email=document.getElementById("cliente_email").value;  
var codigo_detalle_articulos=document.getElementById("codigo_detalle").value;  
var carrito_subtotal=document.getElementById("subtotal_general_carrito").value;  
var carrito_descuento=document.getElementById("descuento_general_presupuesto").value;  
var carrito_observaciones=document.getElementById("observaciones").value; 
//var carrito_total=document.getElementById("suma_general_carrito").value;    
  
if (cb_vendedores=='')
 {
	error = 1 ;
	document.getElementById("pmensaje_error_1").style.display="block";
 }
else
 {
	document.getElementById("pmensaje_error_1").style.display="none";
 }  
 
//if (cliente_apellido_nombre == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_2").style.display="block";
//	document.getElementById("pmensaje_error_2b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_apellido_nombre").value; 
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_2").style.display="none";	
//			document.getElementById("pmensaje_error_2b").style.display="block";
//			document.getElementById("pmensaje_error_2b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_2").style.display="none";		
//			document.getElementById("pmensaje_error_2b").style.display="none";		
//
//			}
//		} 
// 
//if (cliente_dni == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_3").style.display="block";
//	document.getElementById("pmensaje_error_3b").style.display="none";	
//	}	
//else
//	{	
//	valor = document.getElementById("cliente_dni").value;
//	
//	var pat = /[0-9]{8,}/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("pmensaje_error_3").style.display="none";
//		document.getElementById("pmensaje_error_3b").style.display="block";
//		document.getElementById("pmensaje_error_3b").focus();
//		}
//		else 
//		{
//		document.getElementById("pmensaje_error_3").style.display="none";		
//		document.getElementById("pmensaje_error_3b").style.display="none";		
//		}
//	} 
// 
//if (cliente_domicilio == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_4").style.display="block";
//	document.getElementById("pmensaje_error_4b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_domicilio").value; 
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s-]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_4").style.display="none";	
//			document.getElementById("pmensaje_error_4b").style.display="block";
//			document.getElementById("pmensaje_error_4b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_4").style.display="none";		
//			document.getElementById("pmensaje_error_4b").style.display="none";		
//
//			}
//		}  
//
//if (cliente_telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_5").style.display="block";
//	document.getElementById("pmensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_telefono").value;
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_5").style.display="none";	
//			document.getElementById("pmensaje_error_5b").style.display="block";
//			document.getElementById("pmensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_5").style.display="none";		
//			document.getElementById("pmensaje_error_5b").style.display="none";		
//
//			}
//		}
// 
//if (cliente_email!='')
//{
//valor = document.getElementById("cliente_email").value;
//var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//if (!pat.test(valor)) 
//	{
//	error = 1 ;
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="block";
//	}
//	else 
//	{
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="none";
//	}
//}
//else
//{
//	//error = 1 ;
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="none";
//}
 
  
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

var r=confirm("Esta seguro que desea CONFIRMAR y CERRAR el actual presupuesto? No podr\u00E1 modificarlo.");
if (r==true) 
  {
	  
	var url="presupuestos_cerrar.asp";
	url=url+"?ven="+cb_vendedores;	 			  
	url=url+"&cli="+cliente_apellido_nombre; 	  
	url=url+"&dni="+cliente_dni; 				  
	url=url+"&dom="+cliente_domicilio;   
	url=url+"&tel="+cliente_telefono;  
	url=url+"&ema="+cliente_email; 
	url=url+"&cde="+codigo_detalle_articulos;	
	url=url+"&cst="+carrito_subtotal;  
	url=url+"&cad="+carrito_descuento; 
	url=url+"&obs="+carrito_observaciones; 
	
//	url=url+"&ctg="+carrito_total;		
	
	//alert(url);
	
	xmlHttp.onreadystatechange=CerrarPresupuesto;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}

function CerrarPresupuesto()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "presupuestos_cerrar_ok.asp?problema=ok";
	}
}



function cambiar_precio_carrito_compras(item,tipo_precio,codigo_detalle,nro_cotizacion)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="presupuestos_cambiar_tipo_precio_item.asp";
url=url+"?ite="+item;
url=url+"&tip="+tipo_precio;
url=url+"&det="+codigo_detalle;
url=url+"&cot="+nro_cotizacion;

//alert(url);

xmlHttp.onreadystatechange=PresupuestoCambiarTipoPrecioItem;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function PresupuestoCambiarTipoPrecioItem() 
{ 


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_item_seleccionado = valor[0]
	var val_precio_seleccionado = valor[1]
	var val_total_carrito = valor[2]
	var val_nro_cotizacion = valor[3]
		
	document.getElementById("precio_valor_"+val_item_seleccionado).value=val_precio_seleccionado;
	document.getElementById("suma_total_carrito_"+val_nro_cotizacion).value=val_total_carrito;
	document.getElementById("suma_general_carrito_"+val_nro_cotizacion).value=val_total_carrito;
}

}



function activar_cliente(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="clientes_activar.asp";
url=url+"?id="+str;  // Id Cliente
url=url+"&st="+str2;  // Estado FALSE (inactiva) - TRUE (activa)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado del CLIENTE?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarClientes;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarClientes()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "clientes_modificacion.asp?act=cli";
	}
}

function actualizar_clientes()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  

var error=0

var apellido_nombre=document.getElementById("ape_nom").value; 
//var dni=document.getElementById("dni").value; 
//var cuit=document.getElementById("cuit").value; 
var cb_iva=document.getElementById("cb_iva").value; 
var direccion=document.getElementById("direccion").value; 
var telefono=document.getElementById("telefono").value; 
//var email=document.getElementById("email").value; 
var observaciones=document.getElementById("observaciones").value;

if (apellido_nombre == '')
	{ 	
	error = 1;
	document.getElementById("mensaje_error_1").style.display="block";
	document.getElementById("mensaje_error_1b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("ape_nom").value; 
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_1").style.display="none";	
			document.getElementById("mensaje_error_1b").style.display="block";
			document.getElementById("mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_1").style.display="none";		
			document.getElementById("mensaje_error_1b").style.display="none";		

			}
		}

//if (dni == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_3").style.display="block";
//	document.getElementById("mensaje_error_3b").style.display="none";
//	}	
//else
//	
//	{	
//	valor = document.getElementById("dni").value;
//	
//	var pat = /[0-9]{8,}/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("mensaje_error_3").style.display="none";
//		document.getElementById("mensaje_error_3b").style.display="block";
//		document.getElementById("mensaje_error_3c").style.display="none";
//		document.getElementById("mensaje_error_3b").focus();
//		}
//		else 
//		{
//		document.getElementById("mensaje_error_3").style.display="none";		
//		document.getElementById("mensaje_error_3b").style.display="none";		
//		document.getElementById("mensaje_error_3c").style.display="none";	
//		}
//	}
//
//
//if (cuit != '')
//	{	
//	valor = document.getElementById("cuit").value;
//	
//	var pat = /^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("mensaje_error_2").style.display="none";
//		document.getElementById("mensaje_error_2b").style.display="block";
//		document.getElementById("mensaje_error_2c").style.display="none";
//		document.getElementById("mensaje_error_2b").focus();
//		}
//		else 
//		{
//		document.getElementById("mensaje_error_2").style.display="none";		
//		document.getElementById("mensaje_error_2b").style.display="none";		
//		document.getElementById("mensaje_error_2c").style.display="none";	
//		}
//	}

//if (cb_iva=='0')
// {
//	error = 1 ;
//	document.getElementById("mensaje_error_3").style.display="block";
// }
//else
// {
//	document.getElementById("mensaje_error_3").style.display="none";
// }
// 
//if (direccion == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_4").style.display="block";
//	document.getElementById("mensaje_error_4b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("direccion").value;
//		
//		//var pat = /[0-9]{4,}/
//		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_4").style.display="none";	
//			document.getElementById("mensaje_error_4b").style.display="block";
//			document.getElementById("mensaje_error_4b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_4").style.display="none";		
//			document.getElementById("mensaje_error_4b").style.display="none";		
//
//			}
//		}	
		
		
//if (telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_5").style.display="block";
//	document.getElementById("mensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("telefono").value;
//		
//		//var pat = /[0-9]{4,}/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_5").style.display="none";	
//			document.getElementById("mensaje_error_5b").style.display="block";
//			document.getElementById("mensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_5").style.display="none";		
//			document.getElementById("mensaje_error_5b").style.display="none";		
//
//			}
//		}
		

//if (email!='')
//{
//valor = document.getElementById("email").value;
//var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//if (!pat.test(valor)) 
//	{
//	error = 1 ;
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="block";
//	}
//	else 
//	{
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="none";
//	}
//}
//else
//{
//	//error = 1 ;
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="none";
//}

	
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 

function insertar_clientes()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  

var error=0

var apellido_nombre=document.getElementById("ape_nom").value; 
//var dni=document.getElementById("dni").value; 
//var cuit=document.getElementById("cuit").value; 
var cb_iva=document.getElementById("cb_iva").value; 
var direccion=document.getElementById("direccion").value; 
var telefono=document.getElementById("telefono").value; 
//var email=document.getElementById("email").value; 
var observaciones=document.getElementById("observaciones").value;

if (apellido_nombre == '')
	{ 	
	error = 1;
	document.getElementById("mensaje_error_1").style.display="block";
	document.getElementById("mensaje_error_1b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("ape_nom").value; 
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_1").style.display="none";	
			document.getElementById("mensaje_error_1b").style.display="block";
			document.getElementById("mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_1").style.display="none";		
			document.getElementById("mensaje_error_1b").style.display="none";		

			}
		}

//if (dni == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_3").style.display="block";
//	document.getElementById("mensaje_error_3b").style.display="none";
//	}	
//else
//	
//	{	
//	valor = document.getElementById("dni").value;
//	
//	var pat = /[0-9]{8,}/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("mensaje_error_3").style.display="none";
//		document.getElementById("mensaje_error_3b").style.display="block";
//		document.getElementById("mensaje_error_3c").style.display="none";
//		document.getElementById("mensaje_error_3b").focus();
//		}
//		else 
//		{
//		document.getElementById("mensaje_error_3").style.display="none";		
//		document.getElementById("mensaje_error_3b").style.display="none";		
//		document.getElementById("mensaje_error_3c").style.display="none";	
//		}
//	}


//if (cuit != '')
//	{	
//	valor = document.getElementById("cuit").value;
//	
//	var pat = /^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("mensaje_error_2").style.display="none";
//		document.getElementById("mensaje_error_2b").style.display="block";
//		document.getElementById("mensaje_error_2c").style.display="none";
//		document.getElementById("mensaje_error_2b").focus();
//		}
//		else 
//		{
//		document.getElementById("mensaje_error_2").style.display="none";		
//		document.getElementById("mensaje_error_2b").style.display="none";		
//		document.getElementById("mensaje_error_2c").style.display="none";	
//		}
//	}

//if (cb_iva=='0')
// {
//	error = 1 ;
//	document.getElementById("mensaje_error_3").style.display="block";
// }
//else
// {
//	document.getElementById("mensaje_error_3").style.display="none";
// }
// 
//if (direccion == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_4").style.display="block";
//	document.getElementById("mensaje_error_4b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("direccion").value;
//		
//		//var pat = /[0-9]{4,}/
//		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_4").style.display="none";	
//			document.getElementById("mensaje_error_4b").style.display="block";
//			document.getElementById("mensaje_error_4b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_4").style.display="none";		
//			document.getElementById("mensaje_error_4b").style.display="none";		
//
//			}
//		}	
		
		
//if (telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_5").style.display="block";
//	document.getElementById("mensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("telefono").value;
//		
//		//var pat = /[0-9]{4,}/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_5").style.display="none";	
//			document.getElementById("mensaje_error_5b").style.display="block";
//			document.getElementById("mensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_5").style.display="none";		
//			document.getElementById("mensaje_error_5b").style.display="none";		
//
//			}
//		}
		

//if (email!='')
//{
//valor = document.getElementById("email").value;
//var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//if (!pat.test(valor)) 
//	{
//	error = 1 ;
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="block";
//	}
//	else 
//	{
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="none";
//	}
//}
//else
//{
//	//error = 1 ;
//	document.getElementById("mensaje_error_6").style.display="none";
//	document.getElementById("mensaje_error_6b").style.display="none";
//}

	
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function grabar_presupuesto()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var cb_vendedores=document.getElementById("cb_vendedores").value; 
var cliente_apellido_nombre=document.getElementById("cliente_apellido_nombre").value;  
var cliente_dni=document.getElementById("cliente_dni").value; 
var cliente_domicilio=document.getElementById("cliente_domicilio").value; 
var cliente_telefono=document.getElementById("cliente_telefono").value; 
var cliente_email=document.getElementById("cliente_email").value;  
var codigo_detalle_articulos=document.getElementById("codigo_detalle").value;  
var carrito_subtotal=document.getElementById("subtotal_general_carrito").value;  
var carrito_descuento=document.getElementById("descuento_general_presupuesto").value;  
var carrito_observaciones=document.getElementById("observaciones").value;  
//var carrito_total=document.getElementById("suma_general_carrito").value;  

//alert(carrito_descuento);
  
if (cb_vendedores=='')
 {
	error = 1 ;
	document.getElementById("pmensaje_error_1").style.display="block";
 }
else
 {
	document.getElementById("pmensaje_error_1").style.display="none";
 }  
 
//if (cliente_apellido_nombre == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_2").style.display="block";
//	document.getElementById("pmensaje_error_2b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_apellido_nombre").value; 
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_2").style.display="none";	
//			document.getElementById("pmensaje_error_2b").style.display="block";
//			document.getElementById("pmensaje_error_2b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_2").style.display="none";		
//			document.getElementById("pmensaje_error_2b").style.display="none";		
//
//			}
//		} 
// 
//if (cliente_dni == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_3").style.display="block";
//	document.getElementById("pmensaje_error_3b").style.display="none";	
//	}	
//else
//	{	
//	valor = document.getElementById("cliente_dni").value;
//	
//	var pat = /[0-9]{8,}/
//	
//	if (!pat.test(valor)) 
//		{
//		
//		error = 1 ;
//		document.getElementById("pmensaje_error_3").style.display="none";
//		document.getElementById("pmensaje_error_3b").style.display="block";
//		document.getElementById("pmensaje_error_3b").focus();
//		}
//		else 
//		{
//		document.getElementById("pmensaje_error_3").style.display="none";		
//		document.getElementById("pmensaje_error_3b").style.display="none";		
//		}
//	} 
// 
//if (cliente_domicilio == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_4").style.display="block";
//	document.getElementById("pmensaje_error_4b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_domicilio").value; 
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s-]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_4").style.display="none";	
//			document.getElementById("pmensaje_error_4b").style.display="block";
//			document.getElementById("pmensaje_error_4b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_4").style.display="none";		
//			document.getElementById("pmensaje_error_4b").style.display="none";		
//
//			}
//		}  
//
//if (cliente_telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("pmensaje_error_5").style.display="block";
//	document.getElementById("pmensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("cliente_telefono").value;
//		
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("pmensaje_error_5").style.display="none";	
//			document.getElementById("pmensaje_error_5b").style.display="block";
//			document.getElementById("pmensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("pmensaje_error_5").style.display="none";		
//			document.getElementById("pmensaje_error_5b").style.display="none";		
//
//			}
//		}
// 
//if (cliente_email!='')
//{
//valor = document.getElementById("cliente_email").value;
//var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//if (!pat.test(valor)) 
//	{
//	error = 1 ;
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="block";
//	}
//	else 
//	{
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="none";
//	}
//}
//else
//{
//	//error = 1 ;
//	document.getElementById("pmensaje_error_6").style.display="none";
//	document.getElementById("pmensaje_error_6b").style.display="none";
//}
 
  
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

var r=confirm("Esta seguro que desea GUARDAR el actual presupuesto?");
if (r==true)
  {
	  
	var url="presupuestos_insert.asp";
	url=url+"?ven="+cb_vendedores;	 			  
	url=url+"&cli="+cliente_apellido_nombre; 	  
	url=url+"&dni="+cliente_dni; 				  
	url=url+"&dom="+cliente_domicilio;   
	url=url+"&tel="+cliente_telefono;  
	url=url+"&ema="+cliente_email; 
	url=url+"&cde="+codigo_detalle_articulos;	
	url=url+"&cst="+carrito_subtotal;  
	url=url+"&cad="+carrito_descuento; 
	url=url+"&obs="+carrito_observaciones;
//	url=url+"&ctg="+carrito_total;		
	
	//alert(url);
	
	xmlHttp.onreadystatechange=GuardarPresupuesto;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function GuardarPresupuesto()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "presupuestos_insert_ok.asp?problema=ok";
	}
}


function presupuesto_vaciar_carrito_completo(codigo_detalle_articulos)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
   
var url="presupuestos_vaciar_carrito_completo.asp";
url=url+"?cd="+codigo_detalle_articulos; // Codigo Detalle Articulos

//alert(url);

var r=confirm("Esta seguro que desea VACIAR el carrito por completo?");
if (r==true)
  {
	xmlHttp.onreadystatechange=PresupuestosPonerEnCarrito;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}





function presupuesto_sacar_carrito(id_registro,codigo_detalle_articulos)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
   
var url="presupuestos_sacar_carrito.asp";
url=url+"?id="+id_registro; // ID registro
url=url+"&cd="+codigo_detalle_articulos; // Codigo Detalle Articulos


//alert(url);

xmlHttp.onreadystatechange=PresupuestosPonerEnCarrito;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function PresupuestoCargarDatosAsegurado(asegurado,dni,domicilio,telefono,email) 
{ 
	if (xmlHttp.readyState==4)
		{ 
	
		document.getElementById("cliente_apellido_nombre").value=asegurado;
		document.getElementById("cliente_dni").value=dni;
		document.getElementById("cliente_domicilio").value=domicilio;
		document.getElementById("cliente_telefono").value=telefono;
		document.getElementById("cliente_email").value=email;
		
		document.getElementById("buscador_resultados").style.visibility = "hidden";
		document.getElementById("buscador_resultados").style.height = 0;			
		
		}
}


function buscar_cliente(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
	var url="presupuestos_buscador_clientes.asp";
	url=url+"?r="+str;
	
	//alert(url); 
	
	xmlHttp.onreadystatechange=MostrarResultadosClientes;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function MostrarResultadosClientes() 
{ 

  if (xmlHttp.readyState==4)
	{ 

	document.getElementById("buscador_resultados").style.visibility = "visible";
	document.getElementById("buscador_resultados").style.height = "auto"; 
	document.getElementById("buscador_resultados").innerHTML=xmlHttp.responseText;
	
	}	
}


function presupuesto_agregar_carrito(id_articulo,codigo_detalle_articulo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
    
  
var url="presupuestos_agregar_carrito.asp";
url=url+"?id="+id_articulo;     		 // ID Texto
url=url+"&cod="+codigo_detalle_articulo; // CODIGO DETALLE ARTICULO

//alert(url);

xmlHttp.onreadystatechange=PresupuestosPonerEnCarrito;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function PresupuestosPonerEnCarrito() 
{ 
	if (xmlHttp.readyState==4)
	{ 
		document.getElementById("listado_carrito").innerHTML=xmlHttp.responseText;
		
		// Obtener el elemento con name="label_carrito"
        var labelCarritoElement = document.getElementsByName("label_carrito")[0];

        // Verificar si se encontró el elemento
        if (labelCarritoElement) {
            // Mover al elemento
            labelCarritoElement.scrollIntoView({ behavior: 'smooth' });
        }
		
	}
}

function presupuesto_filtro_articulos(texto,proveedor,rubro,subrubro,costo,codigo_detalle)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
    
  
var url="presupuestos_resultado_filtros.asp";
url=url+"?txt="+texto;     		// TEXTO
url=url+"&pro="+proveedor; 		// PROVEEDOR
url=url+"&rub="+rubro;     		// RUBRO
url=url+"&sru="+subrubro;  		// SUBRUBRO
url=url+"&cos="+costo;     		// PRECIO COSTO
url=url+"&cod="+codigo_detalle; // CODIGO DETALLE ARTICULOS


//alert(url);

xmlHttp.onreadystatechange=PresupuestosFiltroArticulos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function PresupuestosFiltroArticulos() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
	
	// Obtener el elemento con name="label_articulos"
	var labelCarritoElement = document.getElementsByName("label_articulos")[0];

	// Verificar si se encontró el elemento
	if (labelCarritoElement) {
		// Mover al elemento
		labelCarritoElement.scrollIntoView({ behavior: 'smooth' });
	}	
	
	
}

}


function aplicar_actualizacion_precios_limpiar_campos() 
{
	if (xmlHttp.readyState==4)
	{
	document.getElementById("porcentaje_actualizacion").value='';
	document.getElementById("precio_costo").value='';
	document.getElementById("precio_min_efvo").value='';
	document.getElementById("precio_min_debito").value='';
	document.getElementById("precio_min_tarj").value='';
	document.getElementById("precio_sugerido").value='';
	}
}



function articulo_calcular_precios(precio_efectivo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="articulos_alta_calcular_precios.asp";
url=url+"?efe="+precio_efectivo;     // PRECIO MIN. EFECTIVO

//alert(url);

xmlHttp.onreadystatechange=MostrarPreciosCalculados;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function MostrarPreciosCalculados() 
{ 


if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_debito = valor[0]
	var val_tarjeta = valor[1]
	var val_sugerido = valor[2]
		
	document.getElementById("precio_min_debito").value=val_debito;
	document.getElementById("precio_min_tarj").value=val_tarjeta;
	document.getElementById("precio_sugerido").value=val_sugerido;
}

}

function aplicar_actualizacion_precios(texto,proveedor,rubro,subrubro,por_debito,por_tarjeta,por_sugerido,art_precio_costo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0  

var val_aumento_descuento=document.getElementById("cb_aumento_descuento").value;
var val_porcentaje_actualizacion=document.getElementById("porcentaje_actualizacion").value;
var val_precio_costo=document.getElementById("precio_costo").value; 
var val_precio_efectivo=document.getElementById("precio_min_efvo").value; 

if (val_porcentaje_actualizacion != '' && val_precio_costo != '' && val_precio_efectivo != '')
	{ 	
	error = 1;
	document.getElementById("mensaje_error_1").style.display="none";
	document.getElementById("mensaje_error_2").style.display="none";	
	document.getElementById("mensaje_error_1c").style.display="block";
	document.getElementById("mensaje_error_2c").style.display="block";
	}
	else
	{	
	document.getElementById("mensaje_error_1c").style.display="none";
	document.getElementById("mensaje_error_2c").style.display="none";
	}
 

if (val_porcentaje_actualizacion > 100)
	{ 	
	error = 1;
	document.getElementById("mensaje_error_3").style.display="block";
	}
	else
	{	
	document.getElementById("mensaje_error_3").style.display="none";
	}

	//alert(val_precio_costo);
	//alert(val_porcentaje_actualizacion); 

if (val_porcentaje_actualizacion == '')
{

	if (val_precio_costo == '')
		{ 	
		error = 1;
		document.getElementById("mensaje_error_1").style.display="block";
		document.getElementById("mensaje_error_1b").style.display="none";
		}
		else
		{	
		valor = document.getElementById("precio_costo").value; 
		
		var pat = /^[0-9]+$/
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_1").style.display="none";	
			document.getElementById("mensaje_error_1b").style.display="block";
			document.getElementById("mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_1").style.display="none";		
			document.getElementById("mensaje_error_1b").style.display="none";		

			}
		}  
	 
	if (val_precio_efectivo == '')
		{ 	
		error = 1;
		document.getElementById("mensaje_error_2").style.display="block";
		}
		else
		{	
		valor = document.getElementById("precio_min_efvo").value; 
		
		var pat = /^[0-9]+$/
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_2").style.display="none";	
			document.getElementById("mensaje_error_2b").style.display="block";
			document.getElementById("mensaje_error_2b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_2").style.display="none";		
			document.getElementById("mensaje_error_2b").style.display="none";		

			}
		} 
		
}
		
 
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	  
  
var url="precios_aplicar_actualizacion_precios.asp";
url=url+"?txt="+texto;     // TEXTO
url=url+"&pro="+proveedor; // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO
url=url+"&pad="+por_debito;  // % actualizacion DEBITO
url=url+"&pac="+por_tarjeta;  // % actualizacion CREDITO
url=url+"&pas="+por_sugerido;  // % actualizacion SUGERIDO
url=url+"&prc="+val_precio_costo;  // PRECIO COSTO
url=url+"&pre="+val_precio_efectivo;  // PRECIO SUGERIDO
url=url+"&apc="+art_precio_costo;  // PRECIO COSTO ARTICULO informado para la busqueda
url=url+"&por="+val_porcentaje_actualizacion;  // % actualizacion para todos los precios 
url=url+"&aod="+val_aumento_descuento;  // % AUMENTO o DESCUENTO para todos los precios 




//alert(url);


var r=confirm("Esta seguro que desea actualizar todos los ARTICULOS listados con los valores informados?");
if (r==true)
  {
	xmlHttp.onreadystatechange=ListarPreciosActualizada;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}





function ListarPreciosActualizada() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("resultado_actualizacion_precios").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("resultado_actualizacion_precios").innerHTML=xmlHttp.responseText;
}

}


function filtro_lista_precios_actualizacion(texto,proveedor,rubro,subrubro,costo)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="precios_actualizacion_resultado_filtros.asp";
url=url+"?txt="+texto;     // TEXTO
url=url+"&pro="+proveedor; // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO
url=url+"&cos="+costo;  // PRECIO COSTO


//alert(url);

xmlHttp.onreadystatechange=ListarPreciosActualizacion;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarPreciosActualizacion() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
}

}

function filtro_lista_precios(texto,proveedor,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="precios_resultado_filtros.asp";
url=url+"?txt="+texto;     // TEXTO
url=url+"&pro="+proveedor; // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO


//alert(url);

xmlHttp.onreadystatechange=ListarPrecios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarPrecios() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
}

}

function activar_proveedor(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="proveedores_activar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado FALSE (inactiva) - TRUE (activa)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado del PROVEEDOR?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarProveedores;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarProveedores()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "proveedores_modificacion.asp?act=pro";
	}
}


function actualizar_proveedores()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  

var error=0

var razon_social=document.getElementById("razon_social").value; 
var cuit=document.getElementById("cuit").value; 
var cb_iva=document.getElementById("cb_iva").value; 
var direccion=document.getElementById("direccion").value; 
var telefono=document.getElementById("telefono").value; 
var email=document.getElementById("email").value; 
var observaciones=document.getElementById("observaciones").value;
var contacto=document.getElementById("contacto").value; 
var contacto_telefono=document.getElementById("contacto_telefono").value; 
var contacto_email=document.getElementById("contacto_email").value; 


if (razon_social == '')
	{ 	
	error = 1;
	document.getElementById("mensaje_error_1").style.display="block";
	document.getElementById("mensaje_error_1b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("razon_social").value;
		
		//var pat = /[0-9]{4,}/
		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ& \s]*$/
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_1").style.display="none";	
			document.getElementById("mensaje_error_1b").style.display="block";
			document.getElementById("mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_1").style.display="none";		
			document.getElementById("mensaje_error_1b").style.display="none";		

			}
		}


if (cuit == '')
	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_2").style.display="block";
//	document.getElementById("mensaje_error_2b").style.display="none";	
//	document.getElementById("mensaje_error_2c").style.display="none";	
	}	
else
	{	
	valor = document.getElementById("cuit").value;
	
	//var pat = /[0-9]{11,}/
	
	var pat = /^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$/
	
	// var reCUIT = new RegExp("^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$");
	
	
	if (!pat.test(valor)) 
		{
		
		error = 1 ;
		document.getElementById("mensaje_error_2").style.display="none";
		document.getElementById("mensaje_error_2b").style.display="block";
		document.getElementById("mensaje_error_2c").style.display="none";
		document.getElementById("mensaje_error_2b").focus();
		}
		else 
		{
		document.getElementById("mensaje_error_2").style.display="none";		
		document.getElementById("mensaje_error_2b").style.display="none";		
		document.getElementById("mensaje_error_2c").style.display="none";	
		}
	}

if (cb_iva=='0')
 {
//	error = 1 ;
//	document.getElementById("mensaje_error_3").style.display="block";
 }
else
 {
	document.getElementById("mensaje_error_3").style.display="none";
 }
 
if (direccion == '')
	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_4").style.display="block";
//	document.getElementById("mensaje_error_4b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("direccion").value;
		
		//var pat = /[0-9]{4,}/
		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_4").style.display="none";	
			document.getElementById("mensaje_error_4b").style.display="block";
			document.getElementById("mensaje_error_4b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_4").style.display="none";		
			document.getElementById("mensaje_error_4b").style.display="none";		

			}
		}	
		
		
//if (telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_5").style.display="block";
//	document.getElementById("mensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("telefono").value;
//		
//		//var pat = /[0-9]{4,}/
//		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_5").style.display="none";	
//			document.getElementById("mensaje_error_5b").style.display="block";
//			document.getElementById("mensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_5").style.display="none";		
//			document.getElementById("mensaje_error_5b").style.display="none";		
//
//			}
//		}
		

if (email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="block";
	}
	else 
	{
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="none";
	}
}
else
{
	//error = 1 ;
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="none";
}

	
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 

function insertar_proveedores()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  

var error=0

var razon_social=document.getElementById("razon_social").value; 
var cuit=document.getElementById("cuit").value; 
var cb_iva=document.getElementById("cb_iva").value; 
var direccion=document.getElementById("direccion").value; 
var telefono=document.getElementById("telefono").value; 
var email=document.getElementById("email").value; 
var observaciones=document.getElementById("observaciones").value;
var contacto=document.getElementById("contacto").value; 
var contacto_telefono=document.getElementById("contacto_telefono").value; 
var contacto_email=document.getElementById("contacto_email").value; 


if (razon_social == '')
	{ 	
	error = 1;
	document.getElementById("mensaje_error_1").style.display="block";
	document.getElementById("mensaje_error_1b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("razon_social").value; 
		
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_1").style.display="none";	
			document.getElementById("mensaje_error_1b").style.display="block";
			document.getElementById("mensaje_error_1b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_1").style.display="none";		
			document.getElementById("mensaje_error_1b").style.display="none";		

			}
		}


if (cuit == '')
	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_2").style.display="block";
//	document.getElementById("mensaje_error_2b").style.display="none";	
//	document.getElementById("mensaje_error_2c").style.display="none";	
	}	
else
	{	
	valor = document.getElementById("cuit").value;
	
	//var pat = /[0-9]{11,}/
	
	var pat = /^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$/
	
	// var reCUIT = new RegExp("^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$");
	
	
	if (!pat.test(valor)) 
		{
		
		error = 1 ;
		document.getElementById("mensaje_error_2").style.display="none";
		document.getElementById("mensaje_error_2b").style.display="block";
		document.getElementById("mensaje_error_2c").style.display="none";
		document.getElementById("mensaje_error_2b").focus();
		}
		else 
		{
		document.getElementById("mensaje_error_2").style.display="none";		
		document.getElementById("mensaje_error_2b").style.display="none";		
		document.getElementById("mensaje_error_2c").style.display="none";	
		}
	}

//if (cb_iva=='0')
// {
//	error = 1 ;
//	document.getElementById("mensaje_error_3").style.display="block";
// }
//else
// {
//	document.getElementById("mensaje_error_3").style.display="none";
// }
 
if (direccion == '')
	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_4").style.display="block";
//	document.getElementById("mensaje_error_4b").style.display="none";
	}
	else
		{	
		valor = document.getElementById("direccion").value;
		
		//var pat = /[0-9]{4,}/
		//var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.& \s]*$/;
		if (!pat.test(valor)) 
			{
			
			error = 1 ;
			document.getElementById("mensaje_error_4").style.display="none";	
			document.getElementById("mensaje_error_4b").style.display="block";
			document.getElementById("mensaje_error_4b").focus();
			}
			else 
			{
			document.getElementById("mensaje_error_4").style.display="none";		
			document.getElementById("mensaje_error_4b").style.display="none";		

			}
		}	
		
		
//if (telefono == '')
//	{ 	
//	error = 1;
//	document.getElementById("mensaje_error_5").style.display="block";
//	document.getElementById("mensaje_error_5b").style.display="none";
//	}
//	else
//		{	
//		valor = document.getElementById("telefono").value;
//		
//		//var pat = /[0-9]{4,}/
//		var pat = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9 \s]*$/
//		if (!pat.test(valor)) 
//			{
//			
//			error = 1 ;
//			document.getElementById("mensaje_error_5").style.display="none";	
//			document.getElementById("mensaje_error_5b").style.display="block";
//			document.getElementById("mensaje_error_5b").focus();
//			}
//			else 
//			{
//			document.getElementById("mensaje_error_5").style.display="none";		
//			document.getElementById("mensaje_error_5b").style.display="none";		
//
//			}
//		}
		

if (email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="block";
	}
	else 
	{
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="none";
	}
}
else
{
	//error = 1 ;
	document.getElementById("mensaje_error_6").style.display="none";
	document.getElementById("mensaje_error_6b").style.display="none";
}

	
if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function delete_articulo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 

function update_articulo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
//var error=0
//
//var v_id = document.getElementById("user_id").value;
//var v_usuario = document.getElementById("usuario").value;
//var v_clave = document.getElementById("clave").value;
//var v_nombre = document.getElementById("nombre").value;
//var v_apellido = document.getElementById("apellido").value;
//var v_email = document.getElementById("email").value;
//var v_cb_tipo = document.getElementById("cb_tipo").value;
//
//if (v_usuario=='')
// {
//	 error = 1 ;
//	document.getElementById("error_usuario").innerHTML = "Falta cargar DNI";
// }
//else
// {
//	document.getElementById("error_usuario").innerHTML = ""; 
// } 
//
//if (v_clave=='')
// {
//	 error = 1 ;
//	document.getElementById("error_clave").innerHTML = "Falta cargar la CLAVE";
// }
//else
// {
//	document.getElementById("error_clave").innerHTML = ""; 
// } 
//
//
//if (v_nombre=='')
// {
//	error = 1 ;
//	document.getElementById("error_nombre").innerHTML = "Falta cargar nombre";
// }
// else
// {
//	document.getElementById("error_nombre").innerHTML = ""; 
// } 
//
//
//if (v_apellido=='')
// {
//	error = 1 ;
//	document.getElementById("error_apellido").innerHTML = "Falta cargar apellido";
// }
//else
// {
//	document.getElementById("error_apellido").innerHTML = ""; 
// } 
//
//
//
//if (v_email!='')
//{
//valor = document.getElementById("email").value;
//var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//if (!pat.test(valor)) 
//	{
//	error = 1 ;
//	document.getElementById("error_mail").innerHTML = "Formato del mail incorrecto";
//	}
//	else 
//	{
//	document.getElementById("error_mail").innerHTML = "";
//	}
//}
//else
//{
//	error = 1 ;
//	document.getElementById("error_mail").innerHTML = "Falta cargar mail";
//}
//
//
//if (v_cb_tipo=='')
// {
//	error = 1 ;
//	document.getElementById("error_tipo").innerHTML = "Falta cargar tipo de usuario";
// }
//else
// {
//	document.getElementById("error_tipo").innerHTML = "";
// }
//
//
//if (error==1)
//	{ 
//	error=0 ; 
//	return false;
//	}	

document.getElementById("Form1").submit();	


} 


function filtro_modificacion_articulos(proveedor,rubro,subrubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="articulos_modificacion_resultado_filtros.asp";
url=url+"?pro="+proveedor; // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO


//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function articulos_cargar_subrubros(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="articulos_cargar_subrubros.asp";
url=url+"?r="+str;

global_rubro=str;

xmlHttp.onreadystatechange=ProductosTerminadosCargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function ProductosTerminadosCargarSubRubros() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_subrubros").innerHTML=xmlHttp.responseText;


productos_terminados_cargar_stock(0,global_rubro)

}
}



 

function filtro_reporte_general_articulos(proveedor,rubro,subrubro,ordenamiento)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_articulos_resultado_filtros.asp";
url=url+"?pro="+proveedor;  // PROVEEDOR
url=url+"&rub="+rubro;     // RUBRO
url=url+"&sru="+subrubro;  // SUBRUBRO
url=url+"&ord="+ordenamiento;  // ORDEN


//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function reporte_articulos_cargar_subrubros(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_subrubros.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=ReporteArticulosCargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function ReporteArticulosCargarSubRubros() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_subrubros").innerHTML=xmlHttp.responseText;
}
}

function filtro_reporte_proximos_vencimientos(usuario,consulta_desde,consulta_hasta) 
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_proximos_vtos_resultado_filtros.asp";
url=url+"?usr="+usuario;   		 // USUARIO
url=url+"&fed="+consulta_desde;  // FECHA CONSULTA DESDE
url=url+"&feh="+consulta_hasta;  // FECHA CONSULTA HASTA

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function traer_planes_entrenamiento_abonado(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="reporte_general_rutinas_cargar_planes_entrenamiento.asp"; 
url=url+"?r="+cliente;
xmlHttp.onreadystatechange=CargarPlanesEntrenamientoAbonados;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function CargarPlanesEntrenamientoAbonados() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_planes").innerHTML=xmlHttp.responseText;
}
}







function update_planes_entrenamiento()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

document.getElementById("Form1").submit();	

} 


function rutinas_planes_entrenamiento_edit_listar_rutinas(codigo_rutinas)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var url="rutinas_planes_entrenamiento_rutinas_editar_listar.asp";
url=url+"?cod="+codigo_rutinas; // CODIGO DETALLE EJERCICIO

//alert(url);

xmlHttp.onreadystatechange=PlanesListarDetalleRutinas;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function delete_planes_entrenamiento()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

document.getElementById("Form1").submit();	

} 

function rutinas_planes_entrenamiento_listar_rutinas(codigo_rutinas)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var url="rutinas_planes_entrenamiento_rutinas_listar.asp";
url=url+"?cod="+codigo_rutinas; // CODIGO DETALLE EJERCICIO

//alert(url);

xmlHttp.onreadystatechange=PlanesListarDetalleRutinas;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function PlanesListarDetalleRutinas() 
{
	
if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}
 
if (xmlHttp.readyState==4)
{
document.getElementById("preloader").style.visibility = "hidden";
document.getElementById("preloader").style.height = 0;	
document.getElementById("CAMPOS_DETALLE_RUTINAS_CARGADAS").innerHTML=xmlHttp.responseText;
}
}



function insert_planes_entrenamiento()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_abonado = document.getElementById("cb_abonado").value;
var v_edad = document.getElementById("edad").value;
var v_peso = document.getElementById("peso").value;
var v_altura = document.getElementById("altura").value;
var v_fec_alta = document.getElementById("fec_alta").value;
var v_duracion = document.getElementById("duracion").value;
var v_fec_fin = document.getElementById("fec_fin").value;
var v_cb_profesor = document.getElementById("cb_profesor").value;
var v_observadores = document.getElementById("observaciones").value;
var v_objetivos = document.getElementById("objetivos").value;
var v_codigo_plan_rutinas = document.getElementById("codigo_plan_rutinas").value;

if (v_cb_abonado=='')
 {
	error = 1 ;
	document.getElementById("error_cb_abonado").innerHTML = "Falta cargar el Abonado";
 }
else
 {
	document.getElementById("error_cb_abonado").innerHTML = "";
 }

//if (v_observaciones=='')
// {
//	error = 1 ;
//	document.getElementById("error_observaciones").innerHTML = "Falta cargar la Obseravacion";
// }
//else
// {
//	document.getElementById("error_observaciones").innerHTML = "";
// } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function borrar_planes_entrenamiento_rutinas_detalle(id_registro,cod_deta)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

//var cod_deta = document.getElementById("cod_ejercicios").value;  
    
var url="delete_planes_entrenamiento_rutinas_detalle.asp";
url=url+"?id="+id_registro; // ID registro detalle
url=url+"&cod="+cod_deta;   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleRutinas;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_rutinas_detalle()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var rutina = document.getElementById("cb_rutina").value;
var cod_detalle_rutinas = document.getElementById("codigo_plan_rutinas").value;

var url="insert_planes_entrenamiento_rutinas_detalle.asp";
url=url+"?rut="+rutina;	 				// RUTINA
url=url+"&cod="+cod_detalle_rutinas; 	// CODIGO DETALLE RUTINAS

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleRutinas;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarDetalleRutinas() 
{
	
if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}
 
if (xmlHttp.readyState==4)
{
document.getElementById("preloader").style.visibility = "hidden";
document.getElementById("preloader").style.height = 0;	
document.getElementById("CAMPOS_DETALLE_RUTINAS_CARGADAS").innerHTML=xmlHttp.responseText;
}
}


function delete_rutinas_rutinas()
{ 
	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	

} 



function rutinas_cargar_ejercicios_detalle_listar()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var cod_detalle_ejercicios = document.getElementById("codigo_ejercicios").value;

var url="rutinas_cargar_ejercicios_detalle_listar.asp";
url=url+"?cod="+cod_detalle_ejercicios; // CODIGO DETALLE EJERCICIO

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleEjercicios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function update_rutinas_rutinas()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_nombre = document.getElementById("nombre").value;
var v_observaciones = document.getElementById("observaciones").value;

if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar el Nombre";
 }
else
 {
	document.getElementById("error_nombre").innerHTML = "";
 }

if (v_observaciones=='')
 {
	error = 1 ;
	document.getElementById("error_observaciones").innerHTML = "Falta cargar la Obseravacion";
 }
else
 {
	document.getElementById("error_observaciones").innerHTML = "";
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function rutinas_cargar_ejercicios_detalle_editar()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var cod_detalle_ejercicios = document.getElementById("codigo_ejercicios").value;

var url="rutinas_cargar_ejercicios_detalle_editar.asp";
url=url+"?cod="+cod_detalle_ejercicios; // CODIGO DETALLE EJERCICIO

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleEjercicios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_rutinas_rutinas()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_nombre = document.getElementById("nombre").value;
var v_observaciones = document.getElementById("observaciones").value;

if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar el Nombre";
 }
else
 {
	document.getElementById("error_nombre").innerHTML = "";
 }

if (v_observaciones=='')
 {
	error = 1 ;
	document.getElementById("error_observaciones").innerHTML = "Falta cargar la Obseravacion";
 }
else
 {
	document.getElementById("error_observaciones").innerHTML = "";
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function borrar_ejercicios_detalle(id_registro,cod_deta)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

//var cod_deta = document.getElementById("cod_ejercicios").value;  
    
var url="delete_rutinas_ejercicios_detalle.asp";
url=url+"?id="+id_registro; // ID registro detalle
url=url+"&cod="+cod_deta;   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleEjercicios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_ejercicios_detalle()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var rubro = document.getElementById("cb_rutina_rubro").value;
var ejercicio = document.getElementById("cb_ejercicios").value;
var cod_detalle_ejercicios = document.getElementById("codigo_ejercicios").value;

var url="insert_rutinas_ejercicios_detalle.asp";
url=url+"?rub="+rubro;	 		// RUBRO
url=url+"&eje="+ejercicio; 	  	// EJERCICIO
url=url+"&cod="+cod_detalle_ejercicios; 	    // CODIGO DETALLE EJERCICIO

//alert(url);

xmlHttp.onreadystatechange=ListarDetalleEjercicios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarDetalleEjercicios() 
{
	
if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}
 
if (xmlHttp.readyState==4)
{
document.getElementById("preloader").style.visibility = "hidden";
document.getElementById("preloader").style.height = 0;	
document.getElementById("CAMPOS_DETALLE_EJERCICIOS_CARGADOS").innerHTML=xmlHttp.responseText;
}
}










function delete_rutinas_ejercicios()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rutina_rubro = document.getElementById("cb_rutina_rubro").value;
var v_cb_ejercicios = document.getElementById("cb_ejercicios").value;
var v_series = document.getElementById("series").value;
var v_repeticiones = document.getElementById("repeticiones").value;
var v_descanso = document.getElementById("descanso").value;
var v_peso = document.getElementById("peso").value;
var v_tecnica = document.getElementById("tecnica").value;

document.getElementById("Form1").submit();	


} 


function update_rutinas_ejercicios()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rutina_rubro = document.getElementById("cb_rutina_rubro").value;
var v_cb_ejercicios = document.getElementById("cb_ejercicios").value;
var v_series = document.getElementById("series").value;
var v_repeticiones = document.getElementById("repeticiones").value;
var v_descanso = document.getElementById("descanso").value;
var v_peso = document.getElementById("peso").value;
var v_tecnica = document.getElementById("tecnica").value;

if (v_cb_rutina_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el Rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_ejercicios=='')
 {
	error = 1 ;
	document.getElementById("error_ejercicios").innerHTML = "Falta cargar el Ejercicio";
 }
else
 {
	document.getElementById("error_ejercicios").innerHTML = "";
 } 

if (v_series=='')
 {
	error = 1 ;
	document.getElementById("error_series").innerHTML = "Falta cargar las Series";
 }
else
 {
	document.getElementById("error_series").innerHTML = ""; 
 }
 
 
if (v_repeticiones=='')
{
	error = 1 ;
	document.getElementById("error_repeticiones").innerHTML = "Falta cargar las Repeticiones";
 }
else
 {
	document.getElementById("error_repeticiones").innerHTML = ""; 
 } 
 
 
if (v_descanso=='')
 {
	error = 1 ;
	document.getElementById("error_descanso").innerHTML = "Falta cargar el Descanso";
 }
else
 {
	document.getElementById("error_descanso").innerHTML = ""; 
 }

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function modificacion_traer_datos_ejercicios(rubro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="rutinas_ejercicios_modificacion_traer_ejercicios.asp";
url=url+"?rub="+rubro;   // RUBRO

//alert(url);

xmlHttp.onreadystatechange=ModificacionListarRutinasEjercicios;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ModificacionListarRutinasEjercicios() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 

	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_ejercicios_rubro").innerHTML=xmlHttp.responseText;
	
}
}


function insert_rutinas_ajercicios()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rutina_rubro = document.getElementById("cb_rutina_rubro").value;
var v_cb_ejercicios = document.getElementById("cb_ejercicios").value;
var v_series = document.getElementById("series").value;
var v_repeticiones = document.getElementById("repeticiones").value;
var v_descanso = document.getElementById("descanso").value;
var v_peso = document.getElementById("peso").value;
var v_tecnica = document.getElementById("tecnica").value;

if (v_cb_rutina_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar el Rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_ejercicios=='')
 {
	error = 1 ;
	document.getElementById("error_ejercicios").innerHTML = "Falta cargar el Ejercicio";
 }
else
 {
	document.getElementById("error_ejercicios").innerHTML = "";
 } 

if (v_series=='')
 {
	error = 1 ;
	document.getElementById("error_series").innerHTML = "Falta cargar las Series";
 }
else
 {
	document.getElementById("error_series").innerHTML = ""; 
 }
 
 
if (v_repeticiones=='')
{
	error = 1 ;
	document.getElementById("error_repeticiones").innerHTML = "Falta cargar las Repeticiones";
 }
else
 {
	document.getElementById("error_repeticiones").innerHTML = ""; 
 } 
 
 
if (v_descanso=='')
 {
	error = 1 ;
	document.getElementById("error_descanso").innerHTML = "Falta cargar el Descanso";
 }
else
 {
	document.getElementById("error_descanso").innerHTML = ""; 
 }
 
//if (v_peso=='')
// {
//	error = 1 ;
//	document.getElementById("error_peso").innerHTML = "Falta cargar el Peso";
// }
//else
// {
//	document.getElementById("error_peso").innerHTML = ""; 
// }
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function traer_rutinas_ejercicios(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_rutinas_ejercicios.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarEjerciciosRutinas;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function CargarEjerciciosRutinas() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_ejercicios").innerHTML=xmlHttp.responseText;
}
}




// RUTINAS ALTA TURNOS


function erase_turnos_profesionales(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="turnos_profesionales_delete.asp";
url=url+"?id="+str;  // Id turno
url=url+"&ab="+str2; // Id abonado

//alert(url);


var r=confirm("Esta seguro de ELIMINAR el turno?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarFiltrosTurnosProfesionales;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarFiltrosTurnosProfesionales()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "turnos_profesionales_baja.asp";
	}
}
















function filtro_baja_turnos_profesionales(profesional,consulta_desde,consulta_hasta,abonado)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="turnos_profesionales_baja_resultado_filtros.asp";
url=url+"?pro="+profesional;   	  // PROFESIONAL
url=url+"&fed="+consulta_desde;  // FECHA CONSULTA DESDE
url=url+"&feh="+consulta_hasta; // FECHA CONSULTA HASTA
url=url+"&abo="+abonado; 	   // ABONADO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_profesionales(profesional,consulta_desde,consulta_hasta,abonado)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_profesionales_resultado_filtros.asp";
url=url+"?pro="+profesional;   	  // PROFESIONAL
url=url+"&fed="+consulta_desde;  // FECHA CONSULTA DESDE
url=url+"&feh="+consulta_hasta; // FECHA CONSULTA HASTA
url=url+"&abo="+abonado; 	   // ABONADO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function BajaHorarioUpdate(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="BajaHorarioUpdate.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=irBajaHorarioUpdate;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function irBajaHorarioUpdate() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("tablaupdate").innerHTML=xmlHttp.responseText;
//document.getElementById("dias_de_atencion_update").innerHTML=xmlHttp.responseText;
}
}


function ConfirmarAltaHorarioUpdate(str,str2,str3,str4)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="ConfirmarAltaHorarioUpdate.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
xmlHttp.onreadystatechange=AltaHorarioUpdate;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function AltaHorarioUpdate() 
{ 
if (xmlHttp.readyState==4)
{ 
//document.getElementById("tablaupdate").innerHTML=xmlHttp.responseText;
document.getElementById("tablaupdate").style.display = "none";
document.getElementById("dias_de_atencion_update").innerHTML=xmlHttp.responseText;
}
}



function BajaHorario(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="BajaHorario.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=irBajaHorario;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function irBajaHorario() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("dias_de_atencion").innerHTML=xmlHttp.responseText;
}
}


function ConfirmarAltaHorario(str,str2,str3)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="ConfirmarAltaHorario.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
xmlHttp.onreadystatechange=AltaHorario;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function AltaHorario() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("dias_de_atencion").innerHTML=xmlHttp.responseText;
}
}


// *******************


function cobranzas_traer_datos_ingresos_musculacion(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_traer_datos_ingresos_musculacion.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=CobranzasListarTurnosFuturos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function cobranzas_traer_datos_ingresos_salon(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_traer_datos_ingresos_salon.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=CobranzasListarTurnosFuturosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function activar_suscripcion_desde_buscador(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_activar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado FALSE (inactiva) - TRUE (activa)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado de la SUSCRIPCION?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptoresDesdeBuscador;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarSuscriptoresDesdeBuscador()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "buscador_suscripciones.asp";
	}
}



function reset_clave_desde_buscador(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_reset_clave.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea RESETEAR la clave del cliente?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptoresDesdeBuscador;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarSuscriptoresDesdeBuscador()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "buscador_suscripciones.asp";
	}
}



function delete_turnos_masivos_musculacion()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var v_cb_cliente = document.getElementById("cb_cliente").value;  
var v_fecha_desde = document.getElementById("fec_turno_desde").value;  
var v_fecha_hasta = document.getElementById("fec_turno_hasta").value;  
  
  
var url="turnos_gym_baja_masiva.asp";
url=url+"?cli="+v_cb_cliente;  // Cliente
url=url+"&fed="+v_fecha_desde; // Fecha Desde Turno
url=url+"&feh="+v_fecha_hasta; // Fecha Hasta Turno

//alert(url);

xmlHttp.onreadystatechange=BuscarTurnosBajaMasiva;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function filtro_reporte_general_ingresos_adicionales_excel(fecha_desde,fecha_hasta,rubro,subrubro)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_ingresos_adicionales_resultado_filtros_excel.asp";
url=url+"?fed="+fecha_desde;   // FECHA INGRESO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA INGRESO HASTA
url=url+"&rub="+rubro;   	  //  RUBRO
url=url+"&sru="+subrubro;    //  SUBRUBRO

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_gastos_excel(fecha_desde,fecha_hasta,rubro,subrubro)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_gastos_resultado_filtros_excel.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA
url=url+"&rub="+rubro;   	  //  RUBRO
url=url+"&sru="+subrubro;    //  SUBRUBRO

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_suscripciones_excel(apellido,localidad,sexo,activo)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_suscripciones_resultado_filtros_excel.asp";
url=url+"?ape="+apellido;   // APELLIDO
url=url+"&loc="+localidad;   // LOCALIDAD
url=url+"&sex="+sexo;   // SEXO
url=url+"&act="+activo;   // ACTIVOS

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_pagos_externo_excel(fecha_desde,fecha_hasta,cliente,actividad,formapago)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_pagos_externo_resultado_filtros_excel.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA
url=url+"&cli="+cliente;   	   // CLIENTE
url=url+"&act="+actividad; 	   // ACTIVIDAD
url=url+"&for="+formapago; 	   // FORMA DE PAGO

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 




function traer_subrubros_ingresos_reporte(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_subrubros_ingresos.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function filtro_reporte_general_ingresos_adicionales(fecha_desde,fecha_hasta,rubro,subrubro)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_ingresos_adicionales_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA INGRESO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA INGRESO HASTA
url=url+"&rub="+rubro;   	  //  RUBRO
url=url+"&sru="+subrubro;    //  SUBRUBRO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function delete_ingreso()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 


function update_ingresos()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rubro = document.getElementById("cb_rubro").value;
var v_cb_subrubro = document.getElementById("cb_subrubro").value;
var v_fec_ingreso = document.getElementById("fec_ingreso").value;
var v_importe = document.getElementById("importe").value;

if (v_cb_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_subrubro=='')
 {
	error = 1 ;
	document.getElementById("error_subrubro").innerHTML = "Falta cargar Sub rubro";
 }
else
 {
	document.getElementById("error_subrubro").innerHTML = "";
 } 

 
if (v_importe=='')
{
	error = 1 ;
	document.getElementById("error_importe").innerHTML = "Falta cargar importe";
 }
else
 {
	document.getElementById("error_importe").innerHTML = ""; 
 } 
 
 
if (v_fec_ingreso=='')
 {
	error = 1 ;
	document.getElementById("error_fec_ingreso").innerHTML = "Falta cargar fecha";
 }
else
 {
	document.getElementById("error_fec_ingreso").innerHTML = ""; 
 }
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function filtro_modificacion_ingresos(fecha_desde,fecha_hasta)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="ingresos_modificacion_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA INGRESOS DESDE
url=url+"&feh="+fecha_hasta;   // FECHA INGRESOS HASTA

//alert(url);

xmlHttp.onreadystatechange=ListarIngresos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarIngresos() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_ingresos").innerHTML=xmlHttp.responseText;
}


}



function insert_ingresos()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rubro = document.getElementById("cb_rubro").value;
var v_cb_subrubro = document.getElementById("cb_subrubro").value;
var v_fec_ingreso = document.getElementById("fec_ingreso").value;
var v_importe = document.getElementById("importe").value;

if (v_cb_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_subrubro=='')
 {
	error = 1 ;
	document.getElementById("error_subrubro").innerHTML = "Falta cargar Sub rubro";
 }
else
 {
	document.getElementById("error_subrubro").innerHTML = "";
 } 

 
if (v_importe=='')
{
	error = 1 ;
	document.getElementById("error_importe").innerHTML = "Falta cargar importe";
 }
else
 {
	document.getElementById("error_importe").innerHTML = ""; 
 } 
 
 
if (v_fec_ingreso=='')
 {
	error = 1 ;
	document.getElementById("error_fec_ingreso").innerHTML = "Falta cargar fecha";
 }
else
 {
	document.getElementById("error_fec_ingreso").innerHTML = ""; 
 }
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function traer_subrubros_ingresos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_subrubros_ingresos.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function CargarSubRubros() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_subrubro").innerHTML=xmlHttp.responseText;
}
}

function calcular_total_mensual_convenio(fecha_desde,fecha_hasta)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="convenio_resultado_calculo_mensual.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA

//alert(url);

xmlHttp.onreadystatechange=MostrarResultadoCalculoConvenio;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function MostrarResultadoCalculoConvenio() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_calculo_convenio").innerHTML="";
}


if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_calculo_convenio").innerHTML=xmlHttp.responseText;
}


}


function update_parametros_convenio()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_q_alumnos      = document.getElementById("q_alumnos").value;
var v_coeficiente    = document.getElementById("coeficiente_alcance").value;
var v_valor_promedio = document.getElementById("valor_promedio").value;


if (v_q_alumnos < 1)
 {
	error = 1 ;
	document.getElementById("error_q_alumnos").innerHTML = "El valor MINIMO es 1";
 }
 else
 {
	document.getElementById("error_q_alumnos").innerHTML = ""; 
 } 

 
if (v_coeficiente < 1)
 {
	error = 1 ;
	document.getElementById("error_coeficiente_alcance").innerHTML = "El valor MINIMO es 1";
 }
 else
 {
	document.getElementById("error_coeficiente_alcance").innerHTML = ""; 
 }  
 
if (v_valor_promedio < 1)
 {
	error = 1 ;
	document.getElementById("error_valor_promedio").innerHTML = "El valor MINIMO es 1";
 }
 else
 {
	document.getElementById("error_valor_promedio").innerHTML = ""; 
 }   

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function delete_turnos_masivos_salon()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var v_cb_cliente = document.getElementById("cb_cliente").value;  
var v_fecha_desde = document.getElementById("fec_turno_desde").value;  
var v_fecha_hasta = document.getElementById("fec_turno_hasta").value;  
  
  
var url="turnos_salon_baja_masiva.asp";
url=url+"?cli="+v_cb_cliente;  // Cliente
url=url+"&fed="+v_fecha_desde; // Fecha Desde Turno
url=url+"&feh="+v_fecha_hasta; // Fecha Hasta Turno

//alert(url);

xmlHttp.onreadystatechange=BuscarTurnosBajaMasiva;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function BuscarTurnosBajaMasiva() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
}
}

function insert_mensaje_profesor()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0


var v_cb_profesor = document.getElementById("cb_profesor").value;
var v_cb_abonado = document.getElementById("cb_abonado").value;
var v_mensaje = document.getElementById("mensaje").value;


if (v_cb_profesor=='')
 {
	error = 1 ;
	document.getElementById("error_profesor").innerHTML = "Falta cargar el profesor al cual desea enviar el mensaje";
 }
else
 {
	document.getElementById("error_profesor").innerHTML = "";
 }
 

if (v_cb_abonado=='')
 {
	error = 1 ;
	document.getElementById("error_abonado").innerHTML = "Falta cargar el abonado";
 }
else
 {
	document.getElementById("error_abonado").innerHTML = "";
 }

//alert(v_mensaje.length);

if (v_mensaje.length > 255)
{
	error = 1 ;
	document.getElementById("error_mensaje_largo").innerHTML = "No puede exceder los 255 caracteres";
 }
else
 {
	document.getElementById("error_mensaje_largo").innerHTML = ""; 
 } 
 

 if (v_mensaje=='')
 {
	error = 1 ;
	document.getElementById("error_mensaje").innerHTML = "Falta cargar el mensaje";
 }
else
 {
	document.getElementById("error_mensaje").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function insert_respuesta_mensaje()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0


var v_respuesta = document.getElementById("respuesta").value;


if (v_respuesta.length > 255)
{
	error = 1 ;
	document.getElementById("error_mensaje_respuesta_largo").innerHTML = "La respuesta NO puede exceder los 255 caracteres";
 }
else
 {
	document.getElementById("error_mensaje_respuesta_largo").innerHTML = ""; 
 } 
 

 if (v_respuesta=='')
 {
	error = 1 ;
	document.getElementById("error_mensaje_respuesta").innerHTML = "Falta cargar la respuesta";
 }
else
 {
	document.getElementById("error_mensaje_respuesta").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function insert_mensaje()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0


var v_cb_usuario = document.getElementById("cb_usuario").value;
var v_mensaje = document.getElementById("mensaje").value;




if (v_cb_usuario=='')
 {
	error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar el usuario sobre el cual desea enviar el mensaje";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = "";
 }

//alert(v_mensaje.length);

if (v_mensaje.length > 255)
{
	error = 1 ;
	document.getElementById("error_mensaje_largo").innerHTML = "No puede exceder los 255 caracteres";
 }
else
 {
	document.getElementById("error_mensaje_largo").innerHTML = ""; 
 } 
 

 if (v_mensaje=='')
 {
	error = 1 ;
	document.getElementById("error_mensaje").innerHTML = "Falta cargar el mensaje";
 }
else
 {
	document.getElementById("error_mensaje").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function filtro_reporte_general_nutricion(usuario,consulta_desde,consulta_hasta,sexo)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_nutricion_resultado_filtros.asp";
url=url+"?usr="+usuario;   // USUARIO
url=url+"&fed="+consulta_desde;  // FECHA CONSULTA DESDE
url=url+"&feh="+consulta_hasta;   	// FECHA CONSULTA HASTA
url=url+"&sex="+sexo;   	// SEXO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function cobranzas_traer_datos_turnos_futuros_salon(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_alta_traer_datos_turnos_futuros_salon.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=CobranzasListarTurnosFuturosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function CobranzasListarTurnosFuturosSalon() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_turnos_futuros_salon").innerHTML=xmlHttp.responseText;
	
}
}



function cobranzas_traer_datos_turnos_futuros_musculacion(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_alta_traer_datos_turnos_futuros.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=CobranzasListarTurnosFuturos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function CobranzasListarTurnosFuturos() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_turnos_futuros_musculacion").innerHTML=xmlHttp.responseText;
	
	// Muestro si el CLIENTE tiene turnos futuros
	//cobranzas_traer_datos_turnos_futuros_salon(global_cliente);	
	
	// Muestro si el CLIENTE tiene turnos futuros
	cobranzas_traer_datos_ingresos_salon(global_cliente);		
	
}
}

function delete_nutricion()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 


function cargar_detalle_otros_indices_zoom(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="nutricion_otros_indices_zoom.asp";
url=url+"?cod="+str;

//alert(url);

xmlHttp.onreadystatechange=ListarNutricionOtrosIndices;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function update_nutricion()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0


var v_cb_usuario = document.getElementById("cb_usuario").value;
var v_edad = document.getElementById("edad").value;
var v_fec_consulta = document.getElementById("fec_consulta").value;
var v_detalle = document.getElementById("detalle").value;
var v_peso = document.getElementById("peso").value;
var v_talla = document.getElementById("talla").value;
var v_masa = document.getElementById("masa").value;
var v_objetivo = document.getElementById("objetivo").value;
var v_recomendacion = document.getElementById("recomendacion").value;


if (v_cb_usuario=='')
 {
	error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar usuario de la consulta";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = "";
 }


if (v_edad=='')
 {
	error = 1 ;
	document.getElementById("error_edad").innerHTML = "Falta cargar edad";
 }
 else
 {
	document.getElementById("error_edad").innerHTML = ""; 
 } 


if (v_fec_consulta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_consulta").innerHTML = "Falta cargar fecha de la consulta";
 }
else
 {
	document.getElementById("error_fec_consulta").innerHTML = ""; 
 } 

 
 if (v_detalle=='')
 {
	error = 1 ;
	document.getElementById("error_detalle_consulta").innerHTML = "Falta cargar detalle de la consulta";
 }
else
 {
	document.getElementById("error_detalle_consulta").innerHTML = ""; 
 } 
 
 if (v_peso=='')
 {
	error = 1 ;
	document.getElementById("error_peso").innerHTML = "Falta cargar peso";
 }
else
 {
	document.getElementById("error_peso").innerHTML = ""; 
 }  

 if (v_talla=='')
 {
	error = 1 ;
	document.getElementById("error_talla").innerHTML = "Falta cargar talla";
 }
else
 {
	document.getElementById("error_talla").innerHTML = ""; 
 }  

 if (v_masa=='')
 {
	error = 1 ;
	document.getElementById("error_masa").innerHTML = "Falta cargar indice de masa corporal";
 }
else
 {
	document.getElementById("error_masa").innerHTML = ""; 
 } 

 if (v_objetivo=='')
 {
	error = 1 ;
	document.getElementById("error_objetivo").innerHTML = "Falta cargar objetivo";
 }
else
 {
	document.getElementById("error_objetivo").innerHTML = ""; 
 } 

 if (v_recomendacion=='')
 {
	error = 1 ;
	document.getElementById("error_recomendacion").innerHTML = "Falta cargar recomendacion";
 }
else
 {
	document.getElementById("error_recomendacion").innerHTML = ""; 
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function cargar_detalle_otros_indices_editar(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="nutricion_otros_indices_editar.asp";
url=url+"?cod="+str;

//alert(url);

xmlHttp.onreadystatechange=ListarNutricionOtrosIndices;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}




function borrar_registro_detalle_otros_indices(id_registro,cod_deta)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

//var cod_deta = document.getElementById("codigo_detalle").value;  
    
var url="delete_nutricion_otros_indices_detalles.asp";
url=url+"?id="+id_registro; // ID registro detalle
url=url+"&cod="+cod_deta;   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarNutricionOtrosIndices;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_otros_indices()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var otro_indice_detalle = document.getElementById("otro_indice_detalle").value;
var otro_indice_valor = document.getElementById("otro_indice_valor").value;
var cod_deta = document.getElementById("codigo_detalle").value;


var url="nutricion_insertar_otros_indices_detalles.asp";
url=url+"?det="+otro_indice_detalle; 	// DETALLE NUEVO INDICE
url=url+"&val="+otro_indice_valor; 	    // VALOR NUEVO INDICE
url=url+"&cod="+cod_deta; 	   			// CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarNutricionOtrosIndices;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarNutricionOtrosIndices() 
{

if (xmlHttp.readyState==4)
{
document.getElementById("CAMPOS_DETALLE_OTROS_INDICES").innerHTML=xmlHttp.responseText;
document.getElementById("otro_indice_detalle").value='';
document.getElementById("otro_indice_valor").value='';
}
}




function insert_nutricion()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0


var v_cb_usuario = document.getElementById("cb_usuario").value;
var v_edad = document.getElementById("edad").value;
var v_fec_consulta = document.getElementById("fec_consulta").value;
var v_detalle = document.getElementById("detalle").value;
var v_peso = document.getElementById("peso").value;
var v_talla = document.getElementById("talla").value;
var v_masa = document.getElementById("masa").value;
var v_objetivo = document.getElementById("objetivo").value;
var v_recomendacion = document.getElementById("recomendacion").value;


if (v_cb_usuario=='')
 {
	error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar usuario de la consulta";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = "";
 }


if (v_edad=='')
 {
	error = 1 ;
	document.getElementById("error_edad").innerHTML = "Falta cargar edad";
 }
 else
 {
	document.getElementById("error_edad").innerHTML = ""; 
 } 


if (v_fec_consulta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_consulta").innerHTML = "Falta cargar fecha de la consulta";
 }
else
 {
	document.getElementById("error_fec_consulta").innerHTML = ""; 
 } 

 
 if (v_detalle=='')
 {
	error = 1 ;
	document.getElementById("error_detalle_consulta").innerHTML = "Falta cargar detalle de la consulta";
 }
else
 {
	document.getElementById("error_detalle_consulta").innerHTML = ""; 
 } 
 
 if (v_peso=='')
 {
	error = 1 ;
	document.getElementById("error_peso").innerHTML = "Falta cargar peso";
 }
else
 {
	document.getElementById("error_peso").innerHTML = ""; 
 }  

 if (v_talla=='')
 {
	error = 1 ;
	document.getElementById("error_talla").innerHTML = "Falta cargar talla";
 }
else
 {
	document.getElementById("error_talla").innerHTML = ""; 
 }  

 if (v_masa=='')
 {
	error = 1 ;
	document.getElementById("error_masa").innerHTML = "Falta cargar indice de masa corporal";
 }
else
 {
	document.getElementById("error_masa").innerHTML = ""; 
 } 

 if (v_objetivo=='')
 {
	error = 1 ;
	document.getElementById("error_objetivo").innerHTML = "Falta cargar objetivo";
 }
else
 {
	document.getElementById("error_objetivo").innerHTML = ""; 
 } 

 if (v_recomendacion=='')
 {
	error = 1 ;
	document.getElementById("error_recomendacion").innerHTML = "Falta cargar recomendacion";
 }
else
 {
	document.getElementById("error_recomendacion").innerHTML = ""; 
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function nutricion_calcular_edad_usuario(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="nutricion_calcular_edad_usuario.asp";
url=url+"?cli="+cliente;   // DESCUENTO

//alert(url);

xmlHttp.onreadystatechange=TraerEdadUsuario;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function TraerEdadUsuario() 
{ 

if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("edad").value=xmlHttp.responseText;
	
}

}



function traer_datos_paquetes_adicionales(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_alta_traer_datos_paquetes_adicionales.asp";
url=url+"?id="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarPaquetesAdicionalesCliente;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarPaquetesAdicionalesCliente() 
{ 

if (xmlHttp.readyState==4)
{ 
document.getElementById("resultado_busqueda_paquetes_adicionales").innerHTML=xmlHttp.responseText;

// Muestro si el CLIENTE tiene turnos FUTUROS
cobranzas_traer_datos_turnos_futuros_musculacion(global_cliente);

}
}

function mostrar_detalle_paquetes(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="suscripciones_paquetes_detalles_mostrar.asp";
url=url+"?cod="+str;

//alert(url);

xmlHttp.onreadystatechange=ListarDetallePaquetes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function cargar_detalle_paquetes_editar(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="suscripciones_paquetes_detalles_editar.asp";
url=url+"?cod="+str;

//alert(url);

xmlHttp.onreadystatechange=ListarDetallePaquetes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function borrar_registro_detalle_paquete(id_registro,cod_deta)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

//var cod_deta = document.getElementById("codigo_detalle").value;  
    
var url="delete_suscripciones_paquetes_detalles.asp";
url=url+"?id="+id_registro; // ID registro detalle
url=url+"&cod="+cod_deta;   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetallePaquetes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_paquetes_detalle()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var paquete_id = document.getElementById("cb_paquete").value;
var cod_deta = document.getElementById("codigo_detalle").value;


var url="insertar_paquetes_detalles.asp";
url=url+"?paq="+paquete_id; 	// PAQUETE ID
url=url+"&cod="+cod_deta; 	   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetallePaquetes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarDetallePaquetes() 
{

if (xmlHttp.readyState==4)
{
document.getElementById("CAMPOS_DETALLE_PAQUETES_CARGADAS").innerHTML=xmlHttp.responseText;
}

}





function seleccionar_todo(){ 
   for (i=0;i<document.f1.elements.length;i++) 
	  if(document.f1.elements[i].type == "checkbox")	
		 document.f1.elements[i].checked=1 
} 

function deseleccionar_todo(){ 
   for (i=0;i<document.f1.elements.length;i++) 
	  if(document.f1.elements[i].type == "checkbox")	
		 document.f1.elements[i].checked=0 
}



function filtro_reporte_general_usuarios_inactivos(dias)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_usuarios_inactivos_resultado_filtros.asp";
url=url+"?dia="+dias;   // DIAS DE INACTIVIDAD

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function marcar_ingreso_salon(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_marcar_ingreso_salon.asp";
url=url+"?usr="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea MARCAR el ingreso al SALON FITNESS del cliente?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptoresIngresoSalon;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarSuscriptoresIngresoSalon()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "suscripciones_listar_salon.asp";
	}
}


function turnos_salon_modificacion_borrar(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="turnos_salon_modificacion_delete.asp";
url=url+"?id="+str;
url=url+"&usr="+str2;

//alert(url);

xmlHttp.onreadystatechange=MostrarTurnosGymModificacionBorrar;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarTurnosGymModificacionBorrar() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("TablaTurnosSalon").innerHTML='';
	document.getElementById("TablaTurnosSalon").innerHTML=xmlHttp.responseText;
}
}


function traer_datos_turnos_salon(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="turnos_salon_modificacion_turnos.asp";
url=url+"?id="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ModificacionListarTurnosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ModificacionListarTurnosSalon() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_turnos_salon").innerHTML=xmlHttp.responseText;
}


}



function filtro_reporte_general_turnos_salon(cliente,hora,desde,hasta)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="reporte_general_turnos_salon_resultado_filtros.asp";
url=url+"?cli="+cliente;   	// CLIENTE
url=url+"&hor="+hora;   	// HORA TURNO
url=url+"&fed="+desde;   	// FECHA TURNO DESDE
url=url+"&feh="+hasta;   	// FECHA TURNO HASTA

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function borrar_ingreso_salon(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="eliminar_ingreso_salon.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea ELIMINAR el ingreso al SALON FITNESS?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarIngresosSalon;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}

function MostrarIngresosSalon()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "reporte_general_ingresos_salon.asp?act=repo";
	}
}


function filtro_reporte_general_ingresos_salon(fecha_ingreso,cliente)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_ingresos_salon_resultado_filtros.asp";
url=url+"?fec="+fecha_ingreso;   // FECHA INGRESO AMPMGYM
url=url+"&cli="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_turnos_salon()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_cb_actividad = document.getElementById("cb_actividad").value;
var v_fec_desde = document.getElementById("fec_turno_desde").value;
var v_fec_hasta = document.getElementById("fec_turno_hasta").value;
var v_ck_lun = document.getElementById("ck_lunes").checked;
var v_ck_mar = document.getElementById("ck_martes").checked;
var v_ck_mie = document.getElementById("ck_miercoles").checked;
var v_ck_jue = document.getElementById("ck_jueves").checked;
var v_ck_vie = document.getElementById("ck_viernes").checked;
var v_ck_sab = document.getElementById("ck_sabado").checked;
var v_cb_hora = document.getElementById("cb_hora").value;

if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }
 
if (v_cb_actividad=='')
 {
	error = 1 ;
	document.getElementById("error_actividad").innerHTML = "Falta cargar actividad";
 }
else
 {
	document.getElementById("error_actividad").innerHTML = "";
 }
 
if (v_fec_desde=='')
 {
	error = 1 ;
	document.getElementById("error_fec_turno_desde").innerHTML = "Falta cargar Fecha del turno DESDE";
 }
else
 {
	document.getElementById("error_fec_turno_desde").innerHTML = "";
 }
 
if (v_fec_hasta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_turno_hasta").innerHTML = "Falta cargar Fecha del turno HASTA";
 }
else
 {
	document.getElementById("error_fec_turno_hasta").innerHTML = "";
 } 

if (v_ck_lun==false && v_ck_mar==false && v_ck_mie==false && v_ck_jue==false && v_ck_vie==false && v_ck_sab==false)
{
	error = 1 ;
	document.getElementById("error_dias").innerHTML = "Falta cargar d\u00EDas disponibles ";
 }
else
 {
	document.getElementById("error_dias").innerHTML = "";
 }


if (v_cb_hora=='')
 {
	error = 1 ;
	document.getElementById("error_horario").innerHTML = "Falta cargar horario disponible";
 }
else
 {
	document.getElementById("error_horario").innerHTML = "";
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function traer_horarios_actividad(actividad)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="turnos_cargar_horarios_disponibles_salon.asp";
url=url+"?act="+actividad;  // Actividad para cargar los horarios dispobibles

//alert(url);

xmlHttp.onreadystatechange=MostrarHorariosDisponiblesSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function MostrarHorariosDisponiblesSalon() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_hora").innerHTML=xmlHttp.responseText;
}
}


function insert_registro_tabla_salon(str,str2,str3,str4,str5)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function editar_registro_tabla_salon(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function borrar_registro_tabla_salon(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);

xmlHttp.onreadystatechange=MostrarDatosSalon;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarDatosSalon() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("registro_accion_salon").innerHTML=xmlHttp.responseText;
}
}







// ************************



function calcular_descuento(descuento,valor_actividad)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_calcular_descuento_valor_actividad.asp";
url=url+"?des="+descuento;   // DESCUENTO
url=url+"&act="+valor_actividad;   // ACTIVIDAD


//alert(url);

xmlHttp.onreadystatechange=TraerValorDescuentoActividad;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function TraerValorDescuentoActividad() 
{ 

if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("actividad_pago").value=xmlHttp.responseText;
	
}

}

function traer_subrubros_reporte(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_subrubros_reporte.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function filtro_reporte_general_gastos(fecha_desde,fecha_hasta,rubro,subrubro)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_gastos_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA
url=url+"&rub="+rubro;   	  //  RUBRO
url=url+"&sru="+subrubro;    //  SUBRUBRO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 





function delete_gasto()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 


function update_gastos()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rubro = document.getElementById("cb_rubro").value;
var v_cb_subrubro = document.getElementById("cb_subrubro").value;
var v_fec_gasto = document.getElementById("fec_gasto").value;
var v_importe = document.getElementById("importe").value;

if (v_cb_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_subrubro=='')
 {
	error = 1 ;
	document.getElementById("error_subrubro").innerHTML = "Falta cargar Sub rubro";
 }
else
 {
	document.getElementById("error_subrubro").innerHTML = "";
 } 

 
if (v_importe=='')
{
	error = 1 ;
	document.getElementById("error_importe").innerHTML = "Falta cargar importe";
 }
else
 {
	document.getElementById("error_importe").innerHTML = ""; 
 } 
 
 
if (v_fec_gasto=='')
 {
	error = 1 ;
	document.getElementById("error_fec_gasto").innerHTML = "Falta cargar fecha";
 }
else
 {
	document.getElementById("error_fec_gasto").innerHTML = ""; 
 }
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function filtro_modificacion_gastos(fecha_desde,fecha_hasta)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="gastos_modificacion_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA GASTO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA GASTO HASTA

//alert(url);

xmlHttp.onreadystatechange=ListarGastos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarGastos() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_gastos").innerHTML=xmlHttp.responseText;
}


}


function insert_gastos()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_rubro = document.getElementById("cb_rubro").value;
var v_cb_subrubro = document.getElementById("cb_subrubro").value;
var v_fec_gasto = document.getElementById("fec_gasto").value;
var v_importe = document.getElementById("importe").value;

if (v_cb_rubro=='')
 {
	error = 1 ;
	document.getElementById("error_rubro").innerHTML = "Falta cargar rubro";
 }
else
 {
	document.getElementById("error_rubro").innerHTML = "";
 }

if (v_cb_subrubro=='')
 {
	error = 1 ;
	document.getElementById("error_subrubro").innerHTML = "Falta cargar Sub rubro";
 }
else
 {
	document.getElementById("error_subrubro").innerHTML = "";
 } 

 
if (v_importe=='')
{
	error = 1 ;
	document.getElementById("error_importe").innerHTML = "Falta cargar importe";
 }
else
 {
	document.getElementById("error_importe").innerHTML = ""; 
 } 
 
 
if (v_fec_gasto=='')
 {
	error = 1 ;
	document.getElementById("error_fec_gasto").innerHTML = "Falta cargar fecha";
 }
else
 {
	document.getElementById("error_fec_gasto").innerHTML = ""; 
 }
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function traer_subrubros(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_subrubros.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarSubRubros;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function CargarSubRubros() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_subrubro").innerHTML=xmlHttp.responseText;
}
}

function borrar_ingreso_la_escondida(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="eliminar_ingreso_la_escondida.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea ELIMINAR el ingreso a LA ESCONDIDA?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarIngresosLaEscondida;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}

function MostrarIngresosLaEscondida()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "reporte_general_ingresos_la_escondida.asp?act=repo";
	}
}






function filtro_reporte_general_ingresos_la_escondida(fecha_ingreso,cliente)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_ingresos_la_escondida_resultado_filtros.asp";
url=url+"?fec="+fecha_ingreso;   // FECHA INGRESO AMPMGYM
url=url+"&cli="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_pagos_externo(fecha_desde,fecha_hasta,cliente,actividad,formapago)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_pagos_externo_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA
url=url+"&cli="+cliente;   	   // CLIENTE
url=url+"&act="+actividad; 	   // ACTIVIDAD
url=url+"&for="+formapago; 	   // FORMA DE PAGO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function filtro_reporte_general_turnos_laescondida(cliente,hora,desde)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="reporte_general_turnos_la_escondida_resultado_filtros.asp";
url=url+"?cli="+cliente;   	// CLIENTE
url=url+"&hor="+hora;   	// HORA TURNO
url=url+"&fed="+desde;   	// FECHA TURNO DESDE

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_turnos_gym(cliente,hora,desde,hasta)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="reporte_general_turnos_gym_resultado_filtros.asp";
url=url+"?cli="+cliente;   	// CLIENTE
url=url+"&hor="+hora;   	// HORA TURNO
url=url+"&fed="+desde;   	// FECHA TURNO DESDE
url=url+"&feh="+hasta;   	// FECHA TURNO HASTA

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function delete_cobranza_externo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 


function update_cobranza_externo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_cb_actividad = document.getElementById("cb_actividad").value;
var v_actividad_valor = document.getElementById("actividad_valor_default").value;
var v_valor_a_pagar = document.getElementById("actividad_valor").value;
var v_valor_pago = document.getElementById("actividad_pago").value;
var v_fec_cobro_desde = document.getElementById("fec_cobro_desde").value;
var v_fec_cobro_hasta = document.getElementById("fec_cobro_hasta").value;
var v_cb_formapago = document.getElementById("cb_formapago").value;


if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }

if (v_cb_actividad=='')
 {
	error = 1 ;
	document.getElementById("error_actividad").innerHTML = "Falta cargar actividad";
 }
else
 {
	document.getElementById("error_actividad").innerHTML = "";
 } 

if (v_valor_a_pagar=='')
 {
	error = 1 ;
	document.getElementById("error_valor_a_pagar").innerHTML = "Falta cargar el valor a pagar";
 }
else
 {
	document.getElementById("error_valor_a_pagar").innerHTML = ""; 
 }
 
 
if (v_valor_pago=='')
{
	error = 1 ;
	document.getElementById("error_valor_pago").innerHTML = "Falta cargar el valor pagado";
 }
else
 {
	document.getElementById("error_valor_pago").innerHTML = ""; 
 } 
 
 
if (v_fec_cobro_desde=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro_desde").innerHTML = "Falta cargar fecha de cobro DESDE";
 }
else
 {
	document.getElementById("error_fec_cobro_desde").innerHTML = ""; 
 }
 
if (v_fec_cobro_hasta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro_hasta").innerHTML = "Falta cargar fecha de cobro HASTA";
 }
else
 {
	document.getElementById("error_fec_cobro_hasta").innerHTML = ""; 
 }
 
 
if (v_cb_formapago=='')
 {
	error = 1 ;
	document.getElementById("error_for_pago").innerHTML = "Falta cargar forma de pago";
 }
else
 {
	document.getElementById("error_for_pago").innerHTML = "";
 }  
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function traer_datos_cobranza_externo(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_alta_traer_datos_cuenta_externo.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=ListarCuentaCorrienteExterno;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function ListarCuentaCorrienteExterno() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_cuenta_corriente_externo").innerHTML=xmlHttp.responseText;
	
	// Muestro si el CLIENTE tiene paquetes adicionales adquiridos
	traer_datos_paquetes_adicionales(global_cliente);
	
	
	// Muestro si el CLIENTE tiene turnos FUTUROS
	//cobranzas_traer_datos_turnos_futuros_musculacion(global_cliente);	

	// Muestro si el CLIENTE tiene INGRESOS
	cobranzas_traer_datos_ingresos_musculacion(global_cliente);	
	
	
}


}


function turnos_laescondida_modificacion_borrar(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="turnos_laescondida_modificacion_delete.asp";
url=url+"?id="+str;
url=url+"&usr="+str2;

//alert(url);

xmlHttp.onreadystatechange=MostrarTurnosLaEscondidaModificacion;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarTurnosLaEscondidaModificacion() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("TablaTurnosLaEscondida").innerHTML='';
	document.getElementById("TablaTurnosLaEscondida").innerHTML=xmlHttp.responseText;
}
}





function traer_datos_turnos_laescondida(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="turnos_laescondida_modificacion_turnos.asp";
url=url+"?id="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ModificacionListarTurnosLaEscondida;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ModificacionListarTurnosLaEscondida() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_turnos_laescondida").innerHTML=xmlHttp.responseText;
}


}


function turnos_gym_modificacion_borrar(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="turnos_gym_modificacion_delete.asp";
url=url+"?id="+str;
url=url+"&usr="+str2;

//alert(url);

xmlHttp.onreadystatechange=MostrarTurnosGymModificacion;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarTurnosGymModificacion() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("TablaTurnosGym").innerHTML='';
	document.getElementById("TablaTurnosGym").innerHTML=xmlHttp.responseText;
}
}




function traer_datos_turnos_gym(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="turnos_gym_modificacion_turnos.asp";
url=url+"?id="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ModificacionListarTurnosGym;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ModificacionListarTurnosGym() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_turnos_gym").innerHTML=xmlHttp.responseText;
}


}







function insert_turnos_gym()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_fec_desde = document.getElementById("fec_turno_desde").value;
var v_fec_hasta = document.getElementById("fec_turno_hasta").value;
var v_ck_lun = document.getElementById("ck_lunes").checked;
var v_ck_mar = document.getElementById("ck_martes").checked;
var v_ck_mie = document.getElementById("ck_miercoles").checked;
var v_ck_jue = document.getElementById("ck_jueves").checked;
var v_ck_vie = document.getElementById("ck_viernes").checked;
var v_ck_sab = document.getElementById("ck_sabado").checked;
var v_cb_hora = document.getElementById("cb_hora").value;

if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }
 
if (v_fec_desde=='')
 {
	error = 1 ;
	document.getElementById("error_fec_turno_desde").innerHTML = "Falta cargar Fecha del turno DESDE";
 }
else
 {
	document.getElementById("error_fec_turno_desde").innerHTML = "";
 }
 
if (v_fec_hasta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_turno_hasta").innerHTML = "Falta cargar Fecha del turno HASTA";
 }
else
 {
	document.getElementById("error_fec_turno_hasta").innerHTML = "";
 } 

if (v_ck_lun==false && v_ck_mar==false && v_ck_mie==false && v_ck_jue==false && v_ck_vie==false && v_ck_sab==false)
{
	error = 1 ;
	document.getElementById("error_dias").innerHTML = "Falta cargar d\u00EDas disponibles ";
 }
else
 {
	document.getElementById("error_dias").innerHTML = "";
 }


if (v_cb_hora=='')
 {
	error = 1 ;
	document.getElementById("error_horario").innerHTML = "Falta cargar horario disponible";
 }
else
 {
	document.getElementById("error_horario").innerHTML = "";
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function insert_turnos_laescondida()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_ck_lun = document.getElementById("ck_lunes").checked;
var v_ck_mar = document.getElementById("ck_martes").checked;
var v_ck_mie = document.getElementById("ck_miercoles").checked;
var v_ck_jue = document.getElementById("ck_jueves").checked;
var v_ck_vie = document.getElementById("ck_viernes").checked;
var v_ck_sab = document.getElementById("ck_sabado").checked;
var v_cb_hora = document.getElementById("cb_hora").value;

if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }

if (v_ck_lun==false && v_ck_mar==false && v_ck_mie==false && v_ck_jue==false && v_ck_vie==false && v_ck_sab==false)
{
	error = 1 ;
	document.getElementById("error_dias").innerHTML = "Falta cargar d\u00EDas disponibles ";
 }
else
 {
	document.getElementById("error_dias").innerHTML = "";
 }


if (v_cb_hora=='')
 {
	error = 1 ;
	document.getElementById("error_horario").innerHTML = "Falta cargar horario disponible";
 }
else
 {
	document.getElementById("error_horario").innerHTML = "";
 } 


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function insert_registro_tabla_laescondida(str,str2,str3,str4,str5)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatosLaEscondida;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function editar_registro_tabla_laescondida(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatosLaEscondida;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function borrar_registro_tabla_laescondida(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);

xmlHttp.onreadystatechange=MostrarDatosLaEscondida;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarDatosLaEscondida() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("registro_accion_laescondida").innerHTML=xmlHttp.responseText;
}
}


function update_parametros()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_max_turnos_gym 		 = document.getElementById("max_turnos_gym").value;
//var v_max_turnos_laescondida = document.getElementById("max_turnos_laescondida").value;
var v_max_turnos_salon = document.getElementById("max_turnos_salon").value;


if (v_max_turnos_gym < 1)
 {
	error = 1 ;
	document.getElementById("error_turnos_gym").innerHTML = "El valor MINIMO es 1";
 }
 else
 {
	document.getElementById("error_turnos_gym").innerHTML = ""; 
 } 

//if (v_max_turnos_laescondida < 1)
// {
//	error = 1 ;
//	document.getElementById("error_turnos_laescondida").innerHTML = "El valor MINIMO es 1";
// }
// else
// {
//	document.getElementById("error_turnos_laescondida").innerHTML = ""; 
// } 
 
if (v_max_turnos_salon < 1)
 {
	error = 1 ;
	document.getElementById("error_turnos_salon").innerHTML = "El valor MINIMO es 1";
 }
 else
 {
	document.getElementById("error_turnos_salon").innerHTML = ""; 
 }  

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function modificacion_traer_datos_cobranza_externo(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_modificacion_traer_datos_cuenta_externo.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=ListarCuentaCorriente;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_cobranza_externo()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_cb_actividad = document.getElementById("cb_actividad").value;
var v_actividad_valor = document.getElementById("actividad_valor_default").value;
var v_valor_a_pagar = document.getElementById("actividad_valor").value;
var v_valor_pago = document.getElementById("actividad_pago").value;
var v_fec_cobro_desde = document.getElementById("fec_cobro_desde").value;
var v_fec_cobro_hasta = document.getElementById("fec_cobro_hasta").value;
var v_cb_formapago = document.getElementById("cb_formapago").value;

if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }

if (v_cb_actividad=='')
 {
	error = 1 ;
	document.getElementById("error_actividad").innerHTML = "Falta cargar actividad";
 }
else
 {
	document.getElementById("error_actividad").innerHTML = "";
 } 

if (v_valor_a_pagar=='')
 {
	error = 1 ;
	document.getElementById("error_valor_a_pagar").innerHTML = "Falta cargar el valor a pagar";
 }
else
 {
	document.getElementById("error_valor_a_pagar").innerHTML = ""; 
 }
 
 
if (v_valor_pago=='')
{
	error = 1 ;
	document.getElementById("error_valor_pago").innerHTML = "Falta cargar el valor pagado";
 }
else
 {
	document.getElementById("error_valor_pago").innerHTML = ""; 
 } 
 
 
if (v_fec_cobro_desde=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro_desde").innerHTML = "Falta cargar fecha de cobro DESDE";
 }
else
 {
	document.getElementById("error_fec_cobro_desde").innerHTML = ""; 
 }
 
if (v_fec_cobro_hasta=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro_hasta").innerHTML = "Falta cargar fecha de cobro HASTA";
 }
else
 {
	document.getElementById("error_fec_cobro_hasta").innerHTML = ""; 
 }
 
 
if (v_cb_formapago=='')
 {
	error = 1 ;
	document.getElementById("error_for_pago").innerHTML = "Falta cargar forma de pago";
 }
else
 {
	document.getElementById("error_for_pago").innerHTML = "";
 }  

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 


function estadisticas_avance_pagos_externo(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="estadisticas_avance_pagos_externo.asp";
url=url+"?per="+str;

//alert(url);


xmlHttp.onreadystatechange=EstadisticasAvancePagos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

// FIN EXTERNO


function estadisticas_avance_pagos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="estadisticas_avance_pagos.asp";
url=url+"?per="+str;

//alert(url);


xmlHttp.onreadystatechange=EstadisticasAvancePagos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function EstadisticasAvancePagos() 
{ 

if (xmlHttp.readyState==1)
{ 
document.getElementById("preloader").style.visibility = "visible";
}

if (xmlHttp.readyState==4)
{ 
document.getElementById("preloader").style.visibility = "hidden";
//document.getElementById("preloader").style.height = 0;
document.getElementById("listado_avance_pagos").innerHTML=xmlHttp.responseText;
}

}


function filtro_reporte_general_pagos(fecha_desde,fecha_hasta,cliente)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_pagos_resultado_filtros.asp";
url=url+"?fed="+fecha_desde;   // FECHA PAGO DESDE
url=url+"&feh="+fecha_hasta;   // FECHA PAGO HASTA
url=url+"&cli="+cliente;   		 // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function update_usuario()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_id = document.getElementById("user_id").value;
var v_usuario = document.getElementById("usuario").value;
var v_clave = document.getElementById("clave").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_email = document.getElementById("email").value;
var v_cb_tipo = document.getElementById("cb_tipo").value;

if (v_usuario=='')
 {
	 error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar DNI";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = ""; 
 } 

if (v_clave=='')
 {
	 error = 1 ;
	document.getElementById("error_clave").innerHTML = "Falta cargar la CLAVE";
 }
else
 {
	document.getElementById("error_clave").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar nombre";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar apellido";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 



if (v_email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_mail").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Falta cargar mail";
}


if (v_cb_tipo=='')
 {
	error = 1 ;
	document.getElementById("error_tipo").innerHTML = "Falta cargar tipo de usuario";
 }
else
 {
	document.getElementById("error_tipo").innerHTML = "";
 }


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function insert_usuario()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_usuario = document.getElementById("usuario").value;
var v_clave = document.getElementById("clave").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_email = document.getElementById("email").value;
var v_cb_tipo = document.getElementById("cb_tipo").value;

if (v_usuario=='')
 {
	 error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar DNI";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = ""; 
 } 

if (v_clave=='')
 {
	 error = 1 ;
	document.getElementById("error_clave").innerHTML = "Falta cargar la CLAVE";
 }
else
 {
	document.getElementById("error_clave").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar nombre";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar apellido";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 



if (v_email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_mail").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Falta cargar mail";
}


if (v_cb_tipo=='')
 {
	error = 1 ;
	document.getElementById("error_tipo").innerHTML = "Falta cargar tipo de usuario";
 }
else
 {
	document.getElementById("error_tipo").innerHTML = "";
 }


if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function activar_usuario(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="usuarios_activar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado FALSE (inactiva) - TRUE (activa)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado del USUARIO?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarUsuarios;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarUsuarios()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "usuarios_modificacion.asp";
	}
}



function enviar_saludo(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="dashboard_enviar_saludo_cumple.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea ENVIAR el/los saludos de CUMPLE?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarMensajeExitosoCumple;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarMensajeExitosoCumple() 
{ 
if (xmlHttp.readyState==4)
{ 

var res = xmlHttp.responseText;

document.getElementById("mensaje_enviado").innerHTML=xmlHttp.responseText;

}
}




function borrar_ingreso(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="eliminar_ingreso_gym.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea ELIMINAR el ingreso al GYM?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarIngresosGym;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}

function MostrarIngresosGym()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "reporte_general_ingresos.asp?act=repo";
	}
}


function delete_cobranza()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
document.getElementById("Form1").submit();	


} 


function update_cobranza()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_cb_actividad = document.getElementById("cb_actividad").value;
var v_actividad_valor = document.getElementById("actividad_valor_default").value;
var v_valor_a_pagar = document.getElementById("actividad_valor").value;
var v_fec_cobro = document.getElementById("fec_cobro").value;
var v_cb_formapago = document.getElementById("cb_formapago").value;
var v_fec_pago_cuota_date = document.getElementById("fec_pago_cuota_date").value;


if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }

if (v_cb_actividad=='')
 {
	error = 1 ;
	document.getElementById("error_actividad").innerHTML = "Falta cargar actividad";
 }
else
 {
	document.getElementById("error_actividad").innerHTML = "";
 } 

if (v_valor_a_pagar=='')
 {
	error = 1 ;
	document.getElementById("error_valor_a_pagar").innerHTML = "Falta cargar el valor a pagar";
 }
else
 {
	document.getElementById("error_valor_a_pagar").innerHTML = ""; 
 }
 
 
if (v_fec_cobro=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro").innerHTML = "Falta cargar fecha de cobro";
 }
else
 {
	document.getElementById("error_fec_cobro").innerHTML = ""; 
 }
 
 if (v_cb_formapago=='')
 {
	error = 1 ;
	document.getElementById("error_for_pago").innerHTML = "Falta cargar forma de pago";
 }
else
 {
	document.getElementById("error_for_pago").innerHTML = "";
 }  

if (v_fec_pago_cuota_date=='')
 {
	error = 1 ;
	document.getElementById("error_pago_cuota").innerHTML = "Falta cargar fecha de pago cuota";
 }
else
 {
	document.getElementById("error_pago_cuota").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 







function modificacion_traer_datos_cobranza(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_modificacion_traer_datos_cuenta.asp";
url=url+"?id="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarCuentaCorriente;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function insert_cobranza()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_cb_cliente = document.getElementById("cb_cliente").value;
var v_cb_actividad = document.getElementById("cb_actividad").value;
var v_actividad_valor = document.getElementById("actividad_valor_default").value;
var v_valor_a_pagar = document.getElementById("actividad_valor").value;
var v_valor_pago = document.getElementById("actividad_pago").value;
var v_fec_cobro = document.getElementById("fec_cobro").value;
var v_cb_formapago = document.getElementById("cb_formapago").value;
var v_fec_pago_cuota_date = document.getElementById("fec_pago_cuota_date").value;

error_pago_cuota

if (v_cb_cliente=='')
 {
	error = 1 ;
	document.getElementById("error_cliente").innerHTML = "Falta cargar cliente";
 }
else
 {
	document.getElementById("error_cliente").innerHTML = "";
 }

if (v_cb_actividad=='')
 {
	error = 1 ;
	document.getElementById("error_actividad").innerHTML = "Falta cargar actividad";
 }
else
 {
	document.getElementById("error_actividad").innerHTML = "";
 } 

if (v_valor_a_pagar=='')
 {
	error = 1 ;
	document.getElementById("error_valor_a_pagar").innerHTML = "Falta cargar el valor a pagar";
 }
else
 {
	document.getElementById("error_valor_a_pagar").innerHTML = ""; 
 }
 
 
if (v_valor_pago=='')
{
	error = 1 ;
	document.getElementById("error_valor_pago").innerHTML = "Falta cargar el valor pagado";
 }
else
 {
	document.getElementById("error_valor_pago").innerHTML = ""; 
 } 
 
 
if (v_fec_cobro=='')
 {
	error = 1 ;
	document.getElementById("error_fec_cobro").innerHTML = "Falta cargar fecha de cobro";
 }
else
 {
	document.getElementById("error_fec_cobro").innerHTML = ""; 
 }
 
if (v_cb_formapago=='')
 {
	error = 1 ;
	document.getElementById("error_for_pago").innerHTML = "Falta cargar forma de pago";
 }
else
 {
	document.getElementById("error_for_pago").innerHTML = "";
 }  
 
 
if (v_fec_pago_cuota_date=='')
 {
	error = 1 ;
	document.getElementById("error_pago_cuota").innerHTML = "Falta cargar fecha de pago cuota";
 }
else
 {
	document.getElementById("error_pago_cuota").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 




function traer_valor_actividad(actividad,cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_traer_valor_actividad.asp";
url=url+"?act="+actividad;   // ACTIVIDAD
url=url+"&cli="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=TraerValorActividad;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function TraerValorActividad() 
{ 

if (xmlHttp.readyState==4)
{ 
	var valor = xmlHttp.responseText.split("|");

	var val_actividad = valor[0]
	var val_saldo = valor[1]
	var val_fecha_pautada = valor[2]
	var val_fecha_pautada_date = valor[3]
	
	document.getElementById("actividad_valor").value=val_actividad;
	document.getElementById("actividad_valor_default").value=val_actividad;
	document.getElementById("actividad_pago").value=parseInt(val_actividad)+parseInt(val_saldo);
	//document.getElementById("saldo").value=val_saldo;
	//document.getElementById("fec_pago_cuota").value=val_fecha_pautada;
	//document.getElementById("fec_pago_cuota_date").value=val_fecha_pautada_date;
	
}

}


function traer_datos_cobranza(cliente)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="cobranzas_traer_datos_cuenta.asp";
url=url+"?id="+cliente;   // CLIENTE

global_cliente=cliente;

//alert(url);

xmlHttp.onreadystatechange=ListarCuentaCorriente;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarCuentaCorriente() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
}


if (xmlHttp.readyState==4)
{ 
	
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda_cuenta_corriente").innerHTML=xmlHttp.responseText;
	
	// Muestro si el CLIENTE tiene paquetes adicionales adquiridos
	traer_datos_paquetes_adicionales(global_cliente);	
	
}


}





function filtro_reporte_general_ingresos(fecha_ingreso,cliente)
{ 
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_ingresos_resultado_filtros.asp";
url=url+"?fec="+fecha_ingreso;   // FECHA INGRESO AMPMGYM
url=url+"&cli="+cliente;   // CLIENTE

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function marcar_ingreso_ampmgym(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_marcar_ingreso_ampmgym.asp";
url=url+"?usr="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea MARCAR el ingreso a AMPMGYM del cliente?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptoresIngreso;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarSuscriptoresIngreso()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "suscripciones_listar.asp";
	}
}


function reset_clave(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_reset_clave.asp";
url=url+"?id="+str;  // Id Publicacion

//alert(url);


var r=confirm("Esta seguro que desea RESETEAR la clave del cliente?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptores;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function insert_suscripcion()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

//var v_id = document.getElementById("user_id").value;
var v_usuario = document.getElementById("usuario").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_email = document.getElementById("email").value;
//var v_telefono = document.getElementById("telefono").value;
//var v_direccion = document.getElementById("direccion").value;
//var v_localidad = document.getElementById("localidad").value;
var v_cb_sexo = document.getElementById("cb_sexo").value;
//var v_fec_nac = document.getElementById("fec_nac").value;
//var v_peso = document.getElementById("peso").value;
//var v_altura = document.getElementById("altura").value;
var v_fec_ing_ampm = document.getElementById("fec_ing_ampm").value;
var v_fec_pago_cuota = document.getElementById("fec_pago_cuota").value;

if (v_usuario=='')
 {
	 error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar usuario";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar nombre";
 }
 else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar apellido";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 



if (v_email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_mail").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Falta cargar mail";
}


//if (v_telefono=='')
// {
//	error = 1 ;
//	document.getElementById("error_telefono").innerHTML = "Falta cargar telefono";
// }
//else
// {
//	document.getElementById("error_telefono").innerHTML = ""; 
// } 
//
//
//
//if (v_direccion=='')
// {
//	error = 1 ;
//	document.getElementById("error_direccion").innerHTML = "Falta cargar direccion";
// }
//else
// {
//	document.getElementById("error_direccion").innerHTML = ""; 
// } 
//
//
//if (v_localidad=='')
// {
//	error = 1 ;
//	document.getElementById("error_localidad").innerHTML = "Falta cargar localidad";
// }
//else
// {
//	document.getElementById("error_localidad").innerHTML = ""; 
// } 


if (v_cb_sexo=='')
 {
	error = 1 ;
	document.getElementById("error_sexo").innerHTML = "Falta cargar sexo";
 }
else
 {
	document.getElementById("error_sexo").innerHTML = "";
 }


//if (v_fec_nac=='')
// {
//	error = 1 ;
//	document.getElementById("error_nacimiento").innerHTML = "Falta cargar fecha nacimiento";
// }
//else
// {
//	document.getElementById("error_nacimiento").innerHTML = ""; 
// }
//
//
//if (v_peso=='')
// {
//	error = 1 ;
//	document.getElementById("error_peso").innerHTML = "Falta cargar peso";
// }
//else
// {
//	document.getElementById("error_peso").innerHTML = ""; 
// }
// 
//if (v_altura=='')
// {
//	error = 1 ;
//	document.getElementById("error_altura").innerHTML = "Falta cargar altura";
// }
//else
// {
//	document.getElementById("error_altura").innerHTML = ""; 
// } 
 
 
 if (v_fec_ing_ampm=='')
 {
	error = 1 ;
	document.getElementById("error_ing_ampm").innerHTML = "Falta cargar fecha nacimiento";
 }
else
 {
	document.getElementById("error_ing_ampm").innerHTML = ""; 
 }
 
 if (v_fec_pago_cuota=='')
 {
	error = 1 ;
	document.getElementById("error_pago_cuota").innerHTML = "Falta cargar fecha nacimiento";
 }
else
 {
	document.getElementById("error_pago_cuota").innerHTML = ""; 
 } 
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function update_suscripcion()
{ 

	
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
{
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0

var v_id = document.getElementById("user_id").value;
var v_usuario = document.getElementById("usuario").value;
var v_nombre = document.getElementById("nombre").value;
var v_apellido = document.getElementById("apellido").value;
var v_email = document.getElementById("email").value;
var v_telefono = document.getElementById("telefono").value;
var v_direccion = document.getElementById("direccion").value;
var v_localidad = document.getElementById("localidad").value;
var v_cb_sexo = document.getElementById("cb_sexo").value;
var v_fec_nac = document.getElementById("fec_nac").value;
var v_peso = document.getElementById("peso").value;
var v_altura = document.getElementById("altura").value;
var v_fec_ing_ampm = document.getElementById("fec_ing_ampm").value;
var v_fec_pago_cuota = document.getElementById("fec_pago_cuota").value;

if (v_usuario=='')
 {
	 error = 1 ;
	document.getElementById("error_usuario").innerHTML = "Falta cargar usuario";
 }
else
 {
	document.getElementById("error_usuario").innerHTML = ""; 
 } 


if (v_nombre=='')
 {
	error = 1 ;
	document.getElementById("error_nombre").innerHTML = "Falta cargar nombre";
 }
else
 {
	document.getElementById("error_nombre").innerHTML = ""; 
 } 


if (v_apellido=='')
 {
	error = 1 ;
	document.getElementById("error_apellido").innerHTML = "Falta cargar apellido";
 }
else
 {
	document.getElementById("error_apellido").innerHTML = ""; 
 } 



if (v_email!='')
{
valor = document.getElementById("email").value;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if (!pat.test(valor)) 
	{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Formato del mail incorrecto";
	}
	else 
	{
	document.getElementById("error_mail").innerHTML = "";
	}
}
else
{
	error = 1 ;
	document.getElementById("error_mail").innerHTML = "Falta cargar mail";
}


if (v_telefono=='')
 {
	error = 1 ;
	document.getElementById("error_telefono").innerHTML = "Falta cargar telefono";
 }
else
 {
	document.getElementById("error_telefono").innerHTML = ""; 
 } 



if (v_direccion=='')
 {
	error = 1 ;
	document.getElementById("error_direccion").innerHTML = "Falta cargar direccion";
 }
else
 {
	document.getElementById("error_direccion").innerHTML = ""; 
 } 


if (v_localidad=='')
 {
	error = 1 ;
	document.getElementById("error_localidad").innerHTML = "Falta cargar localidad";
 }
else
 {
	document.getElementById("error_localidad").innerHTML = ""; 
 } 


if (v_cb_sexo=='')
 {
	error = 1 ;
	document.getElementById("error_sexo").innerHTML = "Falta cargar sexo";
 }
else
 {
	document.getElementById("error_sexo").innerHTML = "";
 }


if (v_fec_nac=='')
 {
	error = 1 ;
	document.getElementById("error_nacimiento").innerHTML = "Falta cargar fecha nacimiento";
 }
else
 {
	document.getElementById("error_nacimiento").innerHTML = ""; 
 }


if (v_peso=='')
 {
	error = 1 ;
	document.getElementById("error_peso").innerHTML = "Falta cargar peso";
 }
else
 {
	document.getElementById("error_peso").innerHTML = ""; 
 }
 
if (v_altura=='')
 {
	error = 1 ;
	document.getElementById("error_altura").innerHTML = "Falta cargar altura";
 }
else
 {
	document.getElementById("error_altura").innerHTML = ""; 
 } 
 
 if (v_fec_ing_ampm=='')
 {
	error = 1 ;
	document.getElementById("error_ing_ampm").innerHTML = "Falta cargar fecha nacimiento";
 }
else
 {
	document.getElementById("error_ing_ampm").innerHTML = ""; 
 }
 
 if (v_fec_pago_cuota=='')
 {
	error = 1 ;
	document.getElementById("error_pago_cuota").innerHTML = "Falta cargar fecha nacimiento";
 }
else
 {
	document.getElementById("error_pago_cuota").innerHTML = ""; 
 }  
 

if (error==1)
	{ 
	error=0 ; 
	return false;
	}	

document.getElementById("Form1").submit();	


} 



function activar_suscripcion(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
	  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="suscripciones_activar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado FALSE (inactiva) - TRUE (activa)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado de la SUSCRIPCION?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarSuscriptores;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarSuscriptores()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "suscripciones_modificacion.asp";
	}
}






function filtro_reporte_general_suscripciones(apellido,localidad,sexo,activo)
{ 
	xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_suscripciones_resultado_filtros.asp";
url=url+"?ape="+apellido;   // APELLIDO
url=url+"&loc="+localidad;   // LOCALIDAD
url=url+"&sex="+sexo;   // SEXO
url=url+"&act="+activo;   // ACTIVOS

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_contactos(apellido)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_contactos_resultado_filtros.asp";
url=url+"?ape="+apellido;   // APELLIDO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_adquirir_servicios(apellido,formapago)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_adquirir_servicios_resultado_filtros.asp";
url=url+"?ape="+apellido;   // APELLIDO
url=url+"&pag="+formapago;  // TIPO

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function publicar_para_regalar(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="para_regalar_publicar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado S (publicado) - D (desarrollo)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado del ARTICULO?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarPararegalar;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarPararegalar()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "para_regalar_modificacion.asp";
	}
}




function publicar_prensa(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="prensa_publicar.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado S (publicado) - D (desarrollo)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado del ARTICULO?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarPrensa;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarPrensa()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "prensa_modificacion.asp";
	}
}



function home_publicar_galeria(str,str2)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 

var url="home_publicar_galeria.asp";
url=url+"?id="+str;  // Id Publicacion
url=url+"&st="+str2;  // Estado S (publicado) - D (desarrollo)

//alert(url);


var r=confirm("Esta seguro de cambiar el estado de la PUBLICACION?");
if (r==true)
  {
	xmlHttp.onreadystatechange=MostrarGaleria;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
  }
}


function MostrarGaleria()
{ 
if (xmlHttp.readyState==4)
	{ 
	window.location.href = "home_galeria_modificacion.asp";
	}
}


















function cargar_detalle_discos_consulta(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="storage_mostrar_discos_consulta.asp";
url=url+"?cod="+str;


xmlHttp.onreadystatechange=CargarDetalleDiscos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function cargar_detalle_discos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


//alert(str);
  
var url="storage_mostrar_discos_update.asp";
url=url+"?cod="+str;


xmlHttp.onreadystatechange=CargarDetalleDiscos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function CargarDetalleDiscos() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("CAMPOS_DETALLE_DISCOS_CARGADOS").innerHTML=xmlHttp.responseText;
}
}


function borrar_registro_detalle_discos(id_registro)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
  
var cod_deta = document.getElementById("codigo_detalle").value;  
  
var url="delete_discos_detalles.asp";
url=url+"?id="+id_registro; // ID registro detalle
url=url+"&cod="+cod_deta;   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetalle;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function insert_discos_detalle()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var error=0
var disco_detalle = document.getElementById("disco_detalle").value;
var cod_deta = document.getElementById("codigo_detalle").value;

/*

if (disco_detalle=='') 
	{ 	
	error = 1;
	document.getElementById("disco_detalle").style.backgroundColor = "#FFFFFF" ;
	document.getElementById("mensaje_error_1").style.display="block";
	document.getElementById("disco_detalle").focus();
	}			
	else
	{	
	document.getElementById("disco_detalle").style.backgroundColor = "#FFFFFF" ;
	document.getElementById("mensaje_error_1").style.display="none";
	}		


if (error==1)
	{ 
	error=0 ; 
	return false;
	}		
	
*/	

var url="insertar_disco_detalles.asp";
url=url+"?dis="+disco_detalle; // DETALLE DISCO
url=url+"&cod="+cod_deta; 	   // CODIGO DETALLE

//alert(url);

xmlHttp.onreadystatechange=ListarDetalle;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function ListarDetalle() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("CAMPOS_DETALLE_DISCOS_CARGADOS").innerHTML=xmlHttp.responseText;
}
}























function deshabilitar_fecha_MVM(valor)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 


	var checkBox = document.getElementById("chk_fec_mvm");

	if (checkBox.checked == true)
	{
	document.getElementById("fec_mvm").disabled = true;		
	}
	else 
	{
	document.getElementById("fec_mvm").disabled = false;		
	}  
  
}

function deshabilitar_fecha_Hardening(valor)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
	var checkBox = document.getElementById("chk_fec_hardening");

	if (checkBox.checked == true)
	{
	document.getElementById("fec_hardening").disabled = true;		
	}
	else 
	{
	document.getElementById("fec_hardening").disabled = false;		
	}    
}




function filtro_reporte_general_excel(nombre,hostname,categoria,grupohard,grupo,so,fec_desde,fec_hasta,storage,lum)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_resultado_filtros_excel.asp";
url=url+"?nom="+nombre;     // NOMBRE
url=url+"&hos="+hostname;   // HOSTNAME
url=url+"&cat="+categoria;  // CATEGORIA
url=url+"&gha="+grupohard;  // GRUPO HARD
url=url+"&gru="+grupo;      // GRUPO
url=url+"&so="+so;   	  // SO
url=url+"&fed="+fec_desde;  	// Fecha de Ingreso DESDE
url=url+"&feh="+fec_hasta;  // Fecha de Ingreso HASTA
url=url+"&sto="+storage;  	// Storage
url=url+"&lum="+lum; 		// Lum

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function filtro_reporte_general_bd_excel(nombre,tipo,servidor,ambiente,app,resp_app)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_bd_resultado_filtros_excel.asp";
url=url+"?nom="+nombre;   // NOMBRE
url=url+"&tip="+tipo;     // TIPO
url=url+"&ser="+servidor; // SERVIDOR
url=url+"&amb="+ambiente; // AMBIENTE
url=url+"&app="+app;      // APP
url=url+"&rap="+resp_app; // RESPOSABLE APP

//alert(url);

xmlHttp.onreadystatechange=crea_excel97;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function crea_excel97() 
{
if (xmlHttp.readyState==4)
{ 
	document.getElementById("excel").innerHTML=xmlHttp.responseText
	document.getElementById("excel").style.visibility="visible"; 	
}
}



function filtro_reporte_general_bd(nombre,tipo,servidor,ambiente,app,resp_app)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_bd_resultado_filtros.asp";
url=url+"?nom="+nombre;   // NOMBRE
url=url+"&tip="+tipo;     // TIPO
url=url+"&ser="+servidor; // SERVIDOR
url=url+"&amb="+ambiente; // AMBIENTE
url=url+"&app="+app;      // APP
url=url+"&rap="+resp_app; // RESPOSABLE APP

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function cargar_modelos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_modelos.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarModelos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function cargar_storages_modelos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_storages_modelos.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarModelos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function cargar_switch_modelos(str)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="cargar_switch_modelos.asp";
url=url+"?r="+str;
xmlHttp.onreadystatechange=CargarModelos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}


function CargarModelos() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("cb_modelo").innerHTML=xmlHttp.responseText;
}
}

function insert_registro_tabla(str,str2,str3,str4,str5)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function editar_registro_tabla(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);


xmlHttp.onreadystatechange=MostrarDatos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function borrar_registro_tabla(str,str2,str3,str4,str5,str6)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
var url="editar_registro_tabla.asp";
url=url+"?r="+str;
url=url+"&r2="+str2;
url=url+"&r3="+str3;
url=url+"&r4="+str4;
url=url+"&r5="+str5;
url=url+"&r6="+str6;

//alert(url);

xmlHttp.onreadystatechange=MostrarDatos;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}



function MostrarDatos() 
{ 
if (xmlHttp.readyState==4)
{ 
	document.getElementById("registro_accion").innerHTML=xmlHttp.responseText;
	
    document.getElementsByName("descripcion")[0].scrollIntoView({ behavior: 'smooth' });
	
}
}




function filtro_reporte_general(nombre,hostname,categoria,grupohard,grupo,so,fec_desde,fec_hasta,storage,lum,ip,zabbix,exposicion,criticidad,mcafee_siem,mcafee_agent,mcafee_end_point,mcafee_epolicy_orchestrator)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_resultado_filtros.asp";
url=url+"?nom="+nombre;     // NOMBRE
url=url+"&hos="+hostname;   // HOSTNAME
url=url+"&cat="+categoria;  // CATEGORIA
url=url+"&gha="+grupohard;  // GRUPO HARD
url=url+"&gru="+grupo;      // GRUPO
url=url+"&so="+so;   	  	// SO
url=url+"&fed="+fec_desde; 	// Fecha de Ingreso DESDE
url=url+"&feh="+fec_hasta;  // Fecha de Ingreso HASTA
url=url+"&sto="+storage;  	// Storage
url=url+"&lum="+lum; 		// Lum
url=url+"&ips="+ip; 		// Ip
url=url+"&zab="+zabbix; 	// Zabbix;
url=url+"&exp="+exposicion; // Exposicion
url=url+"&cri="+criticidad; // Criticidad
url=url+"&sie="+mcafee_siem; // Siem
url=url+"&age="+mcafee_agent; // Agent
url=url+"&end="+mcafee_end_point; // End Point
url=url+"&epo="+mcafee_epolicy_orchestrator; // Epolicy


//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function filtro_reporte_general_sw(hostname,marca,modelo,ip)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_sw_resultado_filtros.asp";
url=url+"?hos="+hostname; // HOSTNAME
url=url+"&mar="+marca;    // MARCA
url=url+"&mod="+modelo;   // MODELO
url=url+"&ip="+ip; 		  // IP

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 

function filtro_reporte_general_fi(hostname,marca,modelo,ip)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_fi_resultado_filtros.asp";
url=url+"?hos="+hostname; // HOSTNAME
url=url+"&mar="+marca;    // MARCA
url=url+"&mod="+modelo;   // MODELO
url=url+"&ip="+ip; 		  // IP

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 


function filtro_reporte_general_st(hostname,marca,modelo,ip)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Su navegador no soporta AJAX!");
  return;
  } 
  
var url="reporte_general_st_resultado_filtros.asp";
url=url+"?hos="+hostname; // HOSTNAME
url=url+"&mar="+marca;    // MARCA
url=url+"&mod="+modelo;   // MODELO
url=url+"&ip="+ip; 		  // IP

//alert(url);

xmlHttp.onreadystatechange=ListarInformes;
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
} 



function ListarInformes() 
{ 

if (xmlHttp.readyState==1)
{ 
	document.getElementById("preloader").style.visibility = "visible";
	document.getElementById("preloader").style.height = 150;
	document.getElementById("resultado_busqueda").innerHTML="";
}

if (xmlHttp.readyState==4)
{ 
	document.getElementById("preloader").style.visibility = "hidden";
	document.getElementById("preloader").style.height = 0;
	document.getElementById("resultado_busqueda").innerHTML=xmlHttp.responseText;
}

}


function SoloNumeros(cadena, obj, e){
opc = false;
tecla = (document.all) ? e.keyCode : e.which;
if (cadena == "%d")
if (tecla > 47 && tecla < 58)
opc = true;
if (cadena == "%f"){
if (tecla > 47 && tecla < 58)
opc = true;
if (obj.value.search("[.*]") == -1 && obj.value.length != 0)
if (tecla == 46)
opc = true;
}
return opc;
}




function soloNumerosCuit() 
{
	var tecla = (window.event && window.event.keyCode) ? window.event.keyCode : (window.event && window.event.which) ? window.event.which : (window.event && window.event.charCode) ? window.event.charCode : null;
	if(tecla !=45//-
		&& (tecla<48 || tecla>57)) {
		if(!es_netscape()) 	{
			window.event.keyCode=0;
			return true;
		}
	}
}



function cuit_valido(objeto){
   var validos="0123456789-";
   var obj = objeto;
   var cuit=objeto.value;
   var mensaje;
   var int_error=0;

   if(cuit.length != 13||cuit.charAt(2)!="-"||cuit.charAt(11)!="-"){
		return false;
   }
   else {
		for(var i=0; i<cuit.length; i++) {
			if(validos.indexOf(cuit.charAt(i)) < 0) {
				return false;
			}
	 } //bucle
   }

   // funcion CUIT
   var int_acu;
   var strCUIT;
   var int_digverif;
   var num_CUIT;
   var strtabla = "54-32765432";
   int_acu = 0;
   strCUIT= cuit;
   for(var i=0;i<2;i++) {
		int_acu = int_acu + (parseInt(strtabla.charAt(i)) * parseInt(strCUIT.charAt(i)));
   }
   for(var i=3;i<11;i++){
		int_acu = int_acu + (parseInt(strtabla.charAt(i)) * parseInt(strCUIT.charAt(i)));
   }
   int_acu =parseInt(11 - (parseInt(int_acu) - (parseInt(parseInt(int_acu) / 11) * 11)));
   if(parseInt(int_acu)==11){
		int_acu=0;
   }
   if(parseInt(int_acu)==10){
		int_acu=9;
  }
  int_digverif=parseInt(strCUIT.charAt(12));
  if(int_acu==int_digverif){
	  return true;
	}
	else {
		 return false;
   }
	//fin de funcion CUIT
}

/* Alternativa que acepta los tres números separados */
/* cuit válido 20219190388*/
var reCUIT = new RegExp("^(([0-9][0-9])-?([0-9]{8})-?([0-9]))$");
function cuit_correccion(cuit) {
	var m=reCUIT.exec(cuit.value);
	if(m==null) return false;
	cuit.value=String(m[2])+'-'+String(m[3])+'-'+String(m[4]);
	if(cuit_valido(cuit)) {
		document.getElementById("mensaje_error_2c").style.display="none";				
		return true;
	}
	document.getElementById("mensaje_error_2").style.display="none";
	document.getElementById("mensaje_error_2b").style.display="none";
	document.getElementById("mensaje_error_2c").style.display="block";
	return false;
}	


function ponerCeros(obj) {
	
  var super_codigo=document.getElementById("super_codigo").value;	
  
  if (super_codigo != '')
	{
	while (obj.value.length<4)
    obj.value = '0'+obj.value;
	}
}




function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}