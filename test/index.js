/**
 * Created by Tristan on 17/4/21.
 */
const fileUtils = require('../').fileUtil;




fileUtils.mkdirs('./asd/asdfs/asfaas/asfasd/asfasd1').then(()=>{
    console.log('ok')

    fileUtils.drop('./asd').then(()=>{
        console.log('ok')
    })
})