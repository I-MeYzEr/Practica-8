let objects = [
    { n: 'Данил', sn: 'Данилов' },
    { n: 'Андрей', sn: 'Андреев' },
    { n: 'Степа', sn: 'Степанов' }
    ]
    
    let result = objects.filter(objects => objects.n == 'Данил')
     
    console.log(result)
    ;