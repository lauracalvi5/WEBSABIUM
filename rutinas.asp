<!--#include file="dbconfig.asp" -->
<%

'---- CursorTypeEnum Values ----
Const adOpenForwardOnly = 0
Const adOpenKeyset = 1
Const adOpenDynamic = 2
Const adOpenStatic = 3

'---- CursorOptionEnum Values ----
Const adHoldRecords = &H00000100
Const adMovePrevious = &H00000200
Const adAddNew = &H01000400
Const adDelete = &H01000800
Const adUpdate = &H01008000
Const adBookmark = &H00002000
Const adApproxPosition = &H00004000
Const adUpdateBatch = &H00010000
Const adResync = &H00020000
Const adNotify = &H00040000

'---- LockTypeEnum Values ----
Const adLockReadOnly = 1
Const adLockPessimistic = 2
Const adLockOptimistic = 3
Const adLockBatchOptimistic = 4

'------------------- Funcion de conexion a MySQL -------------------

Function Conectar_ADM() ' as ADODB.Connection
    Dim db  ' as ADODB.Connection
    Dim cs  ' connection string ODBC (DSN-less)
     ' Requiere tener instalado el driver configurado en dbconfig.asp
    cs = SabiumBuildConnectionString()
    Set db = Server.CreateObject("ADODB.Connection")
    ' (Opcional pero recomendado con ODBC): usar cursores en cliente
    On Error Resume Next
    db.CursorLocation = 3 ' adUseClient
    db.Open cs
    If Err.Number <> 0 Then
        ' Mostrar detalle útil si hubiera problema de conexión
        Response.Write "Error de conexión MySQL: " & Err.Number & " - " & Err.Description
        Response.End
    End If
    On Error GoTo 0

    Set Conectar_ADM = db
End Function

%>
<% FUNCTION  nohaysolonumeros(cadena)
        dim strTexto, arrayCaracteres
        strTexto=cadena
        if LEN(strTexto)=0 then strTexto="-"
        strNumeros ="0123456789"
        For numero=1 to LEN(strTexto)
            char=MID(strTexto,numero,1)
            x=InStr(strNumeros,char)
            If x=0 then
                nohaysolonumeros = TRUE
                Exit Function
            End if
        Next
        nohaysolonumeros = FALSE
END FUNCTION %>

<%
Function generacolores(longitudcadena2)
' Generador de claves aleatorias
    Dim numdecaracteres2
    Dim salida2
    ' Definicion del array
    Dim char_array2
    char_array2 = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", _
    "A", "B", "C", "D", "E", "F")
    Randomize()
    Do While Len(salida2) < longitudcadena2
        salida2 = salida2 & char_array2(Int(16 * Rnd()))
    Loop
    
    generacolores = salida2
End Function
%>

<%
Function generaclave(longituddeclave)
' Generador de claves aleatorias
    Dim numdecaracteres
    Dim salida
    ' Definicion del array
    Dim char_array
    char_array = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", _
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", _
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", _
    "U", "V", "W", "X", "Y", "Z",_
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", _
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", _
    "u", "v", "w", "x", "y", "z")
    Randomize()
    Do While Len(salida) < longituddeclave
        salida = salida & char_array(Int(62 * Rnd()))
    Loop
    ' establecemos el valor del resultado a devolver
    generaclave = salida
End Function
%>
<%
Function ZeroString(Var_String, CantidadCeros)
    ZeroString = Var_String
    DO While Len(ZeroString) < (CantidadCeros)
        ZeroString = "0"& ZeroString
    Loop
End Function
%>
<%
Function traer_usuario(dni)
    Set Conn2 = Conectar_ADM()
    strSQL="SELECT * FROM administracion WHERE aprobado=1 AND HashDNI='"&dni&"'"
    set rs=Conn2.Execute (strSQL)
    if rs.eof then
        response.write "Usuario An&oacute;nimo"
        exit function
    else
        response.write rs("empleado")
        exit function
    end if
End Function
%>

<%
Function traer_foto_usuario(dni)
    Set Conn2 = Conectar_ADM()
    strSQL="SELECT * FROM administracion WHERE aprobado=1 AND HashDNI='"&dni&"'"
    set rs=Conn2.Execute (strSQL)
    if rs.eof then
        exit function
    else
        if rs("foto")="" then
            response.write "sin_foto.jpg"
            exit function
        else
            response.write rs("foto")
            exit function
        end if
    end if
End Function
%>

<%
function eliminaSQLinyeccion(strpararevisar)
      ListaNegra = Array("dir","--", ";", "/*", "*/", "@@","select","update","insert","upload","from","union","like","join"," and"," or","delete","set","create","drop","into","table","where","values","order","having","xp","xp_cmdshell","cmdshell","cmd","shell","declare","exec","script","varchar","execute","1=1?","true","false","char","null","substring","dbo","limit","sysobjects","begin","waitfor","declare","if","exists","pg_sleep","collate","admin","ping","xp_","convert","latin","pass","chr","hex","#","�","'",";","(",")","$","%","-1?","=",",","+","*","?","&","{","}","|","!","'","<",">","""","alert","%E27","+--+","img src=","xml","like","%26","%27","%3D","%28","%29","->","&","�","=","(",")","%3D","%28","%29","%2C","%2F","%2B","wait for delay","delay","wait","ltrim")
      If (IsEmpty(strpararevisar)) Then
        Exit Function
      ElseIf (StrComp(strpararevisar, "") = 0) Then
        Exit Function
      End If
      For Each s in ListaNegra
            strpararevisar=Replace(strpararevisar,s,"",1,-1,1)
      Next
      eliminaSQLinyeccion=strpararevisar
end function

function remover_html(str_texto)
    Dim nPos1
    Dim nPos2
    nPos1 = InStr(str_texto, "<")
    Do While nPos1 > 0
        nPos2 = InStr(nPos1 + 1, str_texto, ">")
        If nPos2 > 0 Then
            str_texto = Left(str_texto, nPos1 - 1) & Mid(str_texto, nPos2 + 1)
        Else
            Exit Do
        End If
        nPos1 = InStr(str_texto, "<")
    Loop
    remover_html = str_texto
end function

Function TimeToMinutes(timeStr)
    Dim parts, hr, mn
    parts = Split(timeStr, ":")
    If UBound(parts) = 1 Then
        hr = CInt(parts(0))
        mn = CInt(parts(1))
        TimeToMinutes = (hr * 60) + mn
    Else
        TimeToMinutes = -1 
    End If
End Function

%>
