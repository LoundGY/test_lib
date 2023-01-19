@SETLOCAL
@SET PATHEXT=%PATHEXT:;.JS;=;%
node "%~dp0\.yarn\releases\yarn-3.2.1.cjs" %*
