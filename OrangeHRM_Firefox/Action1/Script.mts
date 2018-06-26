Systemutil.CloseProcessByName "firefox.exe"

Dim delempid

Dim intRw


'Launch Application

SystemUtil.Run "firefox.exe", "https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login"

For i = 1 To 20 
 If Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebButton("html id:=btnLogin").Exist(1) Then
  Exit For
 End If
	
Next

'Login 

 If Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebEdit("html id:=txtUsername").Exist Then
    Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebEdit("html id:=txtUsername").Set "opensourcecms"
   Reporter.ReportEvent micPass,"Username Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Username Set","Username/Object does not exist"
End If

If Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebEdit("html id:=txtPassword").Exist Then
   Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebEdit("html id:=txtPassword").SetSecure "5b31f2fbe22d8c0b6cca186afd20b6eeec61829916db012e38686e534e5d6591"
   Reporter.ReportEvent micPass,"Password Set","Successfully Set"
 Else
   Reporter.ReportEvent micFail,"Password Set","Password/Object does not exist"
End If

If Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebButton("html id:=btnLogin").Exist Then
   Browser("name:=https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login").Page(Page).WebButton("html id:=btnLogin").Click   
   Reporter.ReportEvent micPass,"Login Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Login Button Click","Login Button does not exist"
End If


Wait(2)

'Logout 

If Browser("title:=OrangeHRM").Page(Page).Link("name:=Logout").Exist Then
   Browser("title:=OrangeHRM").Page(Page).Link("name:=Logout").Click
   Reporter.ReportEvent micPass,"Logout Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"Logout Link Click","Link does not exist"
   
End If


'Close the browser

 Systemutil.CloseProcessByName "firefox.exe"
