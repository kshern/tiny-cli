reg add "HKCR\Folder\shell\tinypng" /t REG_SZ /d "cmd.exe /s /k tiny XJgNHlcs17oCYxLanv-BWaBB3EAxVbjs"

REM reg add "HKCR\Folder\shelltinypng"  /v tinypng /t REG_BINARY

reg add "HKCR\directory\background\shell\tinypng\command" /t REG_SZ /d "cmd.exe /s /k tiny XJgNHlcs17oCYxLanv-BWaBB3EAxVbjs" 


reg add "HKCR\AllFilesystemObjects\shell\tinypng\command" /t REG_SZ /d "cmd.exe /s /k tiny XJgNHlcs17oCYxLanv-BWaBB3EAxVbjs"