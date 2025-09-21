
<%
' ----------------------------------------------------------------------
' Archivo: dbconfig.asp
' Propósito: Definir la configuración de base de datos para el sitio
'            Classic ASP de Sabium.
'            Actualiza los valores por defecto con los de tu entorno o
'            sobreescríbelos mediante variables de entorno del sistema.
' ----------------------------------------------------------------------
'
' Nombres de variables de entorno admitidos para sobreescribir cada valor
Const SABIUM_ENV_HOST      = "SABIUM_DB_HOST"
Const SABIUM_ENV_PORT      = "SABIUM_DB_PORT"
Const SABIUM_ENV_DATABASE  = "SABIUM_DB_NAME"
Const SABIUM_ENV_USER      = "SABIUM_DB_USER"
Const SABIUM_ENV_PASSWORD  = "SABIUM_DB_PASSWORD"
Const SABIUM_ENV_DRIVER    = "SABIUM_DB_DRIVER"
Const SABIUM_ENV_CHARSET   = "SABIUM_DB_CHARSET"
Const SABIUM_ENV_OPTIONS   = "SABIUM_DB_OPTIONS"

' Valores por defecto utilizados si no hay variable de entorno definida
Const SABIUM_DEFAULT_DRIVER  = "MySQL ODBC 9.4 Unicode Driver"
Const SABIUM_DEFAULT_HOST    = "192.168.100.254"
Const SABIUM_DEFAULT_PORT    = "3306"
Const SABIUM_DEFAULT_DATABASE= "SAB_DEV"
Const SABIUM_DEFAULT_USER    = "sab"
Const SABIUM_DEFAULT_PASSWORD= "ususab"
Const SABIUM_DEFAULT_CHARSET = "utf8mb4"
Const SABIUM_DEFAULT_OPTIONS = "3"

'-----------------------------------------------------------------------
' Devuelve el valor de una variable de entorno si existe; de lo contrario
' responde con el valor por defecto pasado como parámetro.
'-----------------------------------------------------------------------
Function SabiumGetEnv(envName, defaultValue)
    Dim expanded
    On Error Resume Next
    Dim wsh : Set wsh = CreateObject("WScript.Shell")
    expanded = wsh.ExpandEnvironmentStrings("%" & envName & "%")
    If Err.Number <> 0 Then
        expanded = ""
    ElseIf expanded = "%" & envName & "%" Then
        expanded = ""
    End If
    On Error GoTo 0
    If Not (wsh Is Nothing) Then Set wsh = Nothing

    If Len(expanded) = 0 Then
        SabiumGetEnv = defaultValue
    Else
        SabiumGetEnv = expanded
    End If
End Function

'-----------------------------------------------------------------------
' Construye y devuelve la cadena de conexión ODBC para MySQL.
'-----------------------------------------------------------------------
Function SabiumBuildConnectionString()
    Dim driver, host, port, database, username, password, charset, options
    driver   = SabiumGetEnv(SABIUM_ENV_DRIVER, SABIUM_DEFAULT_DRIVER)
    host     = SabiumGetEnv(SABIUM_ENV_HOST, SABIUM_DEFAULT_HOST)
    port     = SabiumGetEnv(SABIUM_ENV_PORT, SABIUM_DEFAULT_PORT)
    database = SabiumGetEnv(SABIUM_ENV_DATABASE, SABIUM_DEFAULT_DATABASE)
    username = SabiumGetEnv(SABIUM_ENV_USER, SABIUM_DEFAULT_USER)
    password = SabiumGetEnv(SABIUM_ENV_PASSWORD, SABIUM_DEFAULT_PASSWORD)
    charset  = SabiumGetEnv(SABIUM_ENV_CHARSET, SABIUM_DEFAULT_CHARSET)
    options  = SabiumGetEnv(SABIUM_ENV_OPTIONS, SABIUM_DEFAULT_OPTIONS)

    Dim parts
    parts = Array( _
        "Driver={" & driver & "}", _
        "Server=" & host, _
        "Port=" & port, _
        "Database=" & database, _
        "User=" & username, _
        "Password=" & password, _
        "charset=" & charset, _
        "Option=" & options _
    )

    SabiumBuildConnectionString = Join(parts, ";") & ";"
End Function
%>
