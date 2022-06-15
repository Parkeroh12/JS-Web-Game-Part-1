function newImage(file, leftPosition, bottomPosition){
    let Image = document.createElement('img')
    Image.src = file
    Image.style.position = 'fixed'
    Image.style.left = leftPosition + 'px'
    Image.style.bottom =bottomPosition + 'px'
    document.body.append (Image)
    return Image}
    function newItem(file, leftPosition, bottomPosition){
        let item = document.createElement('img')
        item.src = file
        item.style.position = 'fixed'
        item.style.left = leftPosition + 'px'
        item.style.bottom = bottomPosition + 'px'
        document.body.append(item)
        
        item.addEventListener('dblclick', function(){
            item.remove()
        })
        
    }


newImage( 'assets/green-character.gif', 100, 100 )
newImage('assets/pine-tree.png', 500, 250)
newImage( 'assets/tree.png',200 , 300 ) 
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
