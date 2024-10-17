var kullanicilar=[
    {
        email:"barisbukumculer@gmail.com",
        password:"12345"
    },
    {
        email:"onurbukumculer@gmail.com",
        password:"12345+"
    },
]

var twitler=[
    {email:"barisbukumculer@gmail.com", twit:"Bugun Hava Cok Guzel"},
    {email:"barisbukumculer@gmail.com", twit:"Caylar demli olsun"},
    {email:"onurbukumculer@gmail.com", twit:"Fistikli Baklava"},
]

var email= prompt("Emailinizi giriniz")
var password= prompt("Sifrenizi giriniz")

function login(){
    if((email==kullanicilar[0].email && password==kullanicilar[0].password) || (email==kullanicilar[1].email && password==kullanicilar[1].password)) {
        console.log(twitler)
    }
    else    {
        console.log("Giris Yapilamadi, Kullanici adi ve ya sifresi yanlis.")
    }
}

login(email,password)