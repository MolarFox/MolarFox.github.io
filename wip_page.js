// A simple script to pick a random image on each page load

// List of random wip images to display
rand_images = [
    ["https://static1.e926.net/data/f9/f5/f9f52464470aa9685dc67c78aaa06b34.gif", "image/gif"],
    ["https://static1.e926.net/data/f9/f5/f9f52464470aa9685dc67c78aaa06b34.gif", "image/gif"],
    ["https://static1.e926.net/data/25/85/258560572eaa1f12f1adc2fca32e0572.gif", "image/gif"],
    ["https://static1.e926.net/data/09/b8/09b8c12f76986c870244ec7be7af826a.gif", "image/gif"],
    ["https://static1.e926.net/data/sample/dd/7c/dd7c0319484d286fc7193713115ec9d6.jpg", "image/jpg"],
    ["https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/162541924_1372328036456554_8276098036281206121_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=825194&_nc_ohc=sRc-p00vdfwAX_s3hEr&_nc_oc=AQnUeC9kpf0ds2Gie9DwR0L2ZWUErGv9j2kt8guMdcgizoRJxJThvr6ERm39rHrpJzo&_nc_ht=scontent.fmel12-1.fna&oh=3d0d947d972718d8f11fc399a3c775eb&oe=607B40C8", "image/gif"],
    ["https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/161464189_1805433972945454_6419209424019966750_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=825194&_nc_ohc=CeDhGm-vtlgAX8SnH5I&_nc_ht=scontent.fmel12-1.fna&oh=f3909bbd84777b6e4d6c1e9bcf9d7530&oe=607962F0", "image/gif"],
    ["https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/161464189_1805433972945454_6419209424019966750_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=825194&_nc_ohc=CeDhGm-vtlgAX8SnH5I&_nc_ht=scontent.fmel12-1.fna&oh=f3909bbd84777b6e4d6c1e9bcf9d7530&oe=607962F0", "image/gif"],
    ["https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/160589338_290934355714735_7045888557825114288_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=825194&_nc_ohc=juDhZnvEldkAX8v9Dua&_nc_ht=scontent.fmel12-1.fna&oh=0cd6d55687a67584fd4baddfd7cdab9f&oe=607AA410", "image/gif"],
    ["https://scontent.fmel12-1.fna.fbcdn.net/v/t1.0-9/160602383_4246757335351691_5420248383985894955_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=825194&_nc_ohc=ULmeWHflL18AX_CYAqW&_nc_ht=scontent.fmel12-1.fna&oh=e1f61c3e132e950507d02981bf700da6&oe=607C6585", "image/gif"]
    ["images/104947636_1922466374557548_3141623773721112396_n.jpg", "image/jpg"],
    ["images/123582162_2839760232966789_6783041329902926967_o.jpg", "image/jpg"],
    ["images/125185491_2052963868170598_2355510305668102365_n.jpg", "image/jpg"],
    ["images/151238791_511444399838198_2087961546080746876_n.jpg", "image/jpg"],
    ["images/78337645_2600455573508252_6904213422137671680_o.jpg", "image/jpg"],
    ["images/90066278_10156764613201965_4067143951239348224_o.jpg", "image/jpg"],
    ["images/94376347_252663056138507_2363452217303760896_n.jpg", "image/jpg"],
    ["images/EiAs0M4WoAIRe-V.jpg", "image/jpg"],
    ["images/Erh3qDAVkAE_oH0.jpg", "image/jpg"],
    ["images/Get_ready_Coming_2018.jpg", "image/jpg"],
    ["images/Thomas_the_Tank.jpg", "image/jpg"],
    ["images/Thumbs_up_face.jpg", "image/jpg"]
];

// pick a random line in the array and set new img src to it
let randindex = Math.floor(Math.random() * rand_images.length)
document.getElementById("wip_image").src = rand_images[randindex][0];
document.getElementById("wip_image").type = rand_images[randindex][1];