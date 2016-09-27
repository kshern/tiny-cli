reg add "HKCR\Folder\shell\tinypng" /t REG_SZ /d "cmd.exe /s /k cd %1 && tiny run"
reg add "HKCR\Folder\shell\tinypng" /v "Icon" /t REG_SZ /d "cmd.exe /s /k cd %1 && tiny run"
reg add "HKCR\directory\background\shell\tinypng\command" /t REG_SZ /d "cmd.exe /s /k tiny run" 
reg add "HKCR\*\shell\tinypng\command" /t REG_SZ /d "cmd.exe /s /k tiny run %1"