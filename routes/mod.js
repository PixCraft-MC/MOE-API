const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('mod/index', { title: 'PixCraft Mods'});
});

router.get('/update/:modId', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;

const MODs = {
    ATSX: {
        modid: atsx,
        modName: 'ATS Cross',
        version: ()=>{

        },
        release: ()=>{

        }
    },
    PixSystem: {
        modid: pixs,
        modName: 'Pix System',
        version: ()=>{

        },
        release: ()=>{

        }
    }
}