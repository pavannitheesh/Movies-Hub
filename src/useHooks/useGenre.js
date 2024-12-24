const genreUrl=(selected)=>{
    if(selected.length<1) return "";
    else{
       const data= selected.map((g)=>g.id);
        return data.reduce((acc,curr)=>acc+","+curr);

    }

}
export default genreUrl;