reg add "HKCR\Folder\shell\tinypng\command" /f /t REG_SZ /d "cmd.exe /s /k cd %%1 && tiny run"
        reg add "HKCR\Folder\shell\tinypng" /f /v Icon /t REG_SZ /d "D:\git\tiny-cli\lib\tiny.ico"
        reg add "HKCR\Directory\Background\shell\tinypng\command" /f /t REG_SZ /d "cmd.exe /s /k tiny run" 
        reg add "HKCR\Directory\Background\shell\tinypng" /f /v Icon /t REG_SZ /d "D:\git\tiny-cli\lib\tiny.ico"
        reg add "HKCR\*\shell\tinypng\command" /f /t REG_SZ /d "cmd.exe /s /k tiny run %%1"
        reg add "HKCR\*\shell\tinypng" /f /v Icon /t REG_SZ /d "D:\git\tiny-cli\lib\tiny.ico"
        