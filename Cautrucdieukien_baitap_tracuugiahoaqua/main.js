function checkMoney(){
    let fruit = document.getElementById("fruit").value;
    fruit = fruit.toLowerCase();
    if(fruit){
        switch(fruit){
            case"Ổi":
            case"Dưa hấu":
               document.getElementById('s1').innerHTML='Giá 20000 VNĐ/kg'
                break;
            case"Táo":
            case"Xoài":
                document.getElementById('s1').innerHTML='Giá 30000 VNĐ/kg'
                break;
            case"Cam":
            case"Chôm Chôm":
                document.getElementById('s1').innerHTML='Giá 40000 VNĐ/kg'
                break;
            case"Măng Cụt":
                document.getElementById('s1').innerHTML='Giá 50000 VNĐ/kg'
                break;
            default:
                document.getElementById('s1').innerHTML='Không có giá loại quả này'
        }
    }
}