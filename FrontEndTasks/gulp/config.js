var util = require('gulp-util'),
    dest = "/Content",
	destJs = "/Content/js",
	srcJs = "/Scripts/global",
    src = "/Content/sass";

module.exports = { 
    "production": !!util.env.production,
    "paths": {
        "src": src,
        "dest": dest
    },
    "clean": {
        "all": "/**",
        "js": destJs,
        "styles": dest,
        "assets": {
            "images": {
                "content-images": dest + "/images/**",
                "styles-images": dest + "/css/images/**",
                "favicon": dest + "/favicon/**"
            },
            "videos": dest + "/videos/**"
        }
    },
    "js": {
        "src": {
            "all": src + "/js/**/*.js"
        },
        "dest": dest + "/js"
    },
    "styles": {
        "src": {
            "all": src + "/**/*.scss",
            "build": src + "/global.scss"
        },
        "dest": dest + "/css"
    },
    "assets": {
        "images": {
            "src": {
                "content-images": src + "/Content/images/**/*",
                "styles-images": src + "/styles/_images/**/*",
                "favicon": src + "/Content/favicon/**/*"
            },
            "dest": {
                "content-images": dest + "/images",
                "styles-images": dest + "/css/images",
                "favicon": dest + "/favicon"
            }
        },
        "videos": {
            "src": src + "/Content/videos/**/*",
            "dest": dest + "/videos"
        }
    }
}